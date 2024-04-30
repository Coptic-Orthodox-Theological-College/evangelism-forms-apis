import FormTemplate from "../models/formTemplate.model.js";
import Submissions from "../models/submissions.model.js";

export const createFormTemplate = async (req, res) => {
  const { name, description, fields, activityId } = req.body;

  const existingFormTemplate = await FormTemplate.findOne({ name });

  if (existingFormTemplate) {
    return res.status(400).json({ message: "Form template already exists" });
  }

  if (!name || !description || !fields || !activityId) {
    const missingFields = [];
    if (!name) missingFields.push("الاسم");
    if (!description) missingFields.push("الوصف");
    if (!fields) missingFields.push("الحقول");
    if (!activityId) missingFields.push("رقم النشاط");
    return res.status(400).json({ message: `الحقول التالية مطلوبة: ${missingFields.join(", ")}`, success: false });
  }

  const { valid, message } = validateFields(fields);

  if (!valid) {
    return res.status(400).json({ success: false, message });
  }

  const newFormTemplate = new FormTemplate({ name, description, fields, activityId });
  try {
    await newFormTemplate.save();
    res.json({ message: "Form template created successfully", newFormTemplate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const validateFields = (fields) => {
  if (!fields || fields.length === 0) {
    return { valid: false, message: "يجب تحديد الحقول" };
  }

  // sort fields by order
  fields.sort((a, b) => a.order - b.order);

  // check if order is unique
  const orderSet = new Set();
  for (let field of fields) {
    if (orderSet.has(field.order)) {
      return { valid: false, message: "الترتيب يجب أن يكون فريدًا" };
    }
    orderSet.add(field.order);
  }

  let errMessages = "";
  for (let field of fields) {
    if (!field.name) errMessages += "الاسم مطلوب. ";
    if (field.isEnum) {
      if (!field.values || field.values.length === 0) errMessages += "قيم الحقل المعرفة مطلوبة. ";
      if (field.numberOfChoices > field.values.length)
        errMessages += "عدد الخيارات يجب أن يكون أقل من أو يساوي عدد القيم المعرفة. ";
    }
    if (field.isRequired === undefined) errMessages += "يجب تحديد ما إذا كان الحقل مطلوبًا أم لا. ";
  }

  if (errMessages) {
    return { valid: false, message: errMessages };
  }

  return { valid: true };
};

export const updateFormTemplate = async (req, res) => {
  const formTemplateId = req.params.formTemplateId;
  const { name, description, fields, activityId } = req.body;

  if (!formTemplateId) {
    return res.status(400).json({ success: false, message: "برجاء تحديد نموذج الاستمارة" });
  }

  const existingFormTemplate = await FormTemplate.findOne({ _id: formTemplateId });

  if (!existingFormTemplate) {
    return res.status(404).json({ success: false, message: "نموذج الاستمارة غير موجود" });
  }

  if (name) existingFormTemplate.name = name;
  if (description) existingFormTemplate.description = description;
  if (activityId) existingFormTemplate.activityId = activityId;

  if (fields) {
    // const { valid, message } = validateFields(fields);

    // if (!valid) {
    //   return res.status(400).json({ success: false, message });
    // }

    for (let field of fields) {
      const existingField = existingFormTemplate.fields.find((f) => f._id.toString() === field._id);
      if (field.delete === true) {
        existingFormTemplate.fields = existingFormTemplate.fields.filter((f) => f._id.toString() !== field._id);
      }
      if (existingField) {
        if (field.order) existingField.order = field.order;
        if (field.name) existingField.name = field.name;
        if (field.isRequired !== undefined) existingField.isRequired = field.isRequired;
        if (field.isEnum !== undefined) existingField.isEnum = field.isEnum;
        if (field.values) existingField.values = field.values;
        if (field.numberOfChoices) existingField.numberOfChoices = field.numberOfChoices;
      } else {
        existingFormTemplate.fields.push(field);
      }
    }
  }

  try {
    await existingFormTemplate.save();
    res.json({ success: true, message: "تم تحديث نموذج الاستمارة بنجاح", existingFormTemplate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const listAllFields = async (req, res) => {
  try {
    const fields = await FormTemplate.distinct("fields");
    res.json(fields);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const findFieldById = async (req, res) => {
  const { fieldId } = req.params;
  try {
    const field = await FormTemplate.findOne({ "fields._id": fieldId });
    if (!field) {
      return res.status(404).json({ message: "Field not found" });
    }
    res.json(field);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createSubmission = async (req, res) => {
  const { formTemplateId, allData, userId } = req.body;

  const alreadySubmitted = await Submissions.findOne({ userId, formTemplateId });

  if (alreadySubmitted) {
    return res.status(400).json({ message: "You have already submitted this form" });
  }

  const existingFormTemplate = await FormTemplate.findOne({ _id: formTemplateId });

  if (!existingFormTemplate) {
    return res.status(404).json({ message: "Form template not found" });
  }

  const formFields = existingFormTemplate.fields;

  const { valid, message } = await checkFieldData(formFields, allData);

  if (!valid) {
    return res.status(400).json({ message });
  }

  const newSubmission = new Submissions({ userId, formTemplateId, data: allData });

  try {
    await newSubmission.save();
    res.json({ message: "Submission created successfully", newSubmission });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getFormTemplate = async (req, res) => {
  const { formTemplateId } = req.params;

  if (!formTemplateId) {
    return res.status(400).json({ message: "Form template id is required" });
  }

  try {
    const formTemplate = await FormTemplate.findOne({ _id: formTemplateId });
    if (!formTemplate) {
      return res.status(404).json({ message: "Form template not found" });
    }
    res.json(formTemplate);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

const checkFieldData = async (formFields, allData) => {
  for (let field of formFields) {
    const fieldData = await allData.find((data) => data.fieldId === field._id.toString());
    if (!fieldData && field.isRequired) {
      return { valid: false, message: `${field.name} is required` };
    }

    if (fieldData && field.isEnum) {
      const values = field.values;
      const numberOfChoices = field.numberOfChoices;

      const selectedValues = fieldData.value.split(",");
      console.log("selectedValues", selectedValues);

      if (selectedValues.length > numberOfChoices) {
        return { valid: false, message: `Number of choices for ${field.name} exceeds limit` };
      }

      for (let selectedValue of selectedValues) {
        if (!values.includes(selectedValue)) {
          return { valid: false, message: `${selectedValue} is not a valid choice for ${field.name}` };
        }
      }

      if (selectedValues.length < numberOfChoices) {
        return { valid: false, message: `Number of choices for ${field.name} is less than required` };
      }

      if (selectedValues.length === 0) {
        return { valid: false, message: `${field.name} is required` };
      }
    }
  }
  return { valid: true };
};

export const listAllFormTemplatesByActivityId = async (req, res) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(400).json({ message: "Activity id is required" });
  }

  try {
    const formTemplates = await FormTemplate.find({ activityId });
    res.json({ success: true, formTemplates });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}
