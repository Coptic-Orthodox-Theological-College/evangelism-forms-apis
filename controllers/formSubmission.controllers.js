import FormTemplate from "../models/formTemplate.model.js";
import Submissions from "../models/submissions.model.js";

export const createSubmission = async (req, res) => {
  const { allData } = req.body;
  console.log("🚀 ~ createSubmission ~ allData:", allData)
  const userId = req.user.userId;
  const formTemplateId = req.params.formTemplateId;

  // const alreadySubmitted = await Submissions.findOne({ userId, formTemplateId });

  // if (alreadySubmitted) {
  //   return res.status(400).json({ message: "You have already submitted this form" });
  // }

  const existingFormTemplate = await FormTemplate.findOne({ _id: formTemplateId });

  if (!existingFormTemplate) {
    return res.status(404).json({ success: false, message: "Form template not found" });
  }

  const formFields = existingFormTemplate.fields;

  const { valid, message } = await checkFieldData(formFields, allData);

  if (!valid) {
    return res.status(400).json({ success: false, message });
  }

  const newSubmission = new Submissions({ userId, formTemplateId, data: allData });

  try {
    const submission = await newSubmission.save();
    console.log("🚀 ~ createSubmission ~ submission._id:", submission._id)
    existingFormTemplate.submttedBy.push({
      userId, submissionId: submission._id, submittedAt: new Date(),
    });
    await existingFormTemplate.save();
    res.json({ success: true, message: "Submission created successfully", newSubmission });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getOneSubmission = async (req, res) => {
  const { submissionId } = req.params;

  if (!submissionId) {
    return res.status(400).json({
      success: false,
      message: "لم يتم تقديم معرف الاستمارة"
    });
  }

  try {
    const submission = await Submissions.findOne({ _id: submissionId });
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.json({ success: true, submission });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "خطأ , الرجاء المحاولة مرة أخرى" });
  }
};

export const deleteSubmission = async (req, res) => {
  const { submissionId } = req.params;

  if (!submissionId) {
    return res.status(400).json({
      success: false,
      message: "لم يتم تقديم معرف الاستمارة"
    });
  }

  try {
    const submission = await Submissions.findOneAndDelete({ _id: submissionId });
    if (!submission) {
      return res.status(404).json({ success: false, message: "الاستمارة غير موجودة" });
    }
    await FormTemplate.findOneAndUpdate(
      { _id: submission.formTemplateId },
      { $pull: { submttedBy: { submissionId } } }
    );
    res.json({ success: true, message: "تم حذف الاستمارة بنجاح" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "خطأ , الرجاء المحاولة مرة أخرى" });
  }
}

const checkFieldData = async (formFields, allData) => {
  for (let field of formFields) {
    const fieldData = await allData.find((data) => data.fieldId === field._id.toString());
    if (!fieldData && field.isRequired) {
      return { valid: false, message: `${field.name} مطلوب` };
    }

    if (fieldData && field.isEnum) {
      const values = field.values;
      const numberOfChoices = field.numberOfChoices;

      const selectedValues = fieldData.value.split(",");
      console.log("selectedValues", selectedValues);

      if (selectedValues.length > numberOfChoices) {
        return { valid: false, message: `عدد الخيارات لـ ${field.name} يتجاوز الحد` };
      }

      for (let selectedValue of selectedValues) {
        if (!values.includes(selectedValue)) {
          return { valid: false, message: `${selectedValue} ليس خيارًا صالحًا لـ ${field.name}` };
        }
      }

      if (selectedValues.length < numberOfChoices) {
        return { valid: false, message: `عدد الخيارات لـ ${field.name} أقل من المطلوب` };
      }

      if (selectedValues.length === 0) {
        return { valid: false, message: `${field.name} مطلوب` };
      }
    }
  }
  return { valid: true };
};