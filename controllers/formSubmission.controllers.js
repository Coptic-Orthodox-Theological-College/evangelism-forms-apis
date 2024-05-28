import FormTemplate from "../models/formTemplate.model.js";
import Submissions from "../models/submissions.model.js";

export const createSubmission = async (req, res) => {
  const { allData } = req.body;
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

export const updateSubmission = async (req, res) => {
  const { submissionId } = req.params;
  const { allData } = req.body;

  if (!submissionId) {
    return res.status(400).json({
      success: false,
      message: "لم يتم تقديم معرف الاستمارة"
    });
  }

  const existingSubmission = await Submissions.findOne({ _id: submissionId });

  if (!existingSubmission) {
    return res.status(404).json({ success: false, message: "الاستمارة غير موجودة" });
  }

  const existingFormTemplate = await FormTemplate.findOne({ _id: existingSubmission.formTemplateId });

  if (!existingFormTemplate) {
    return res.status(404).json({ success: false, message: "النموذج غير موجود" });
  }

  const formFields = existingFormTemplate.fields;

  const { valid, message } = await checkFieldData(formFields, allData);

  if (!valid) {
    return res.status(400).json({ success: false, message });
  }

  try {
    await Submissions.findOneAndUpdate({ _id: submissionId }, { data: allData });
    res.json({ success: true, message: "تم تحديث الاستمارة بنجاح" });
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

    if (fieldData && field.isNumber) {
      const numberData = fieldData.value;
      const maxNumber = field.ifNumber.maxNumber;
      const minRequiredNames = field.ifNumber.minRequiredNames;
      const maxRequiredNames = field.ifNumber.maxRequiredNames;

      const allDataTemp = numberData.split(",");
      const totalNumbersOfTeams = allDataTemp[0];
      const teams = Array.from({ length: totalNumbersOfTeams }, () => []);
      
      for (let i = 1; i < allDataTemp.length; i++) {
        const [teamIndex, teamName] = allDataTemp[i].split(":");
        const [teamNum, subNum] = teamIndex.split(".");

        teams[parseInt(teamNum) - 1].push(teamName);
      }
      if (maxNumber !== -1 && totalNumbersOfTeams > maxNumber) {
        return { valid: false, message: `عدد الفرق يتجاوز الحد الأقصى` };
      }

      console.log("🚀 ~ checkFieldData ~ teams:", teams)

      for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        if (team.length < minRequiredNames) {
          return { valid: false, message: `الفريق رقم ${i + 1} يحتاج إلى على الأقل ${minRequiredNames} اسماء` };
        }

        if (team.length > maxRequiredNames) {
          return { valid: false, message: `الفريق رقم ${i + 1} يحتاج إلى ${maxRequiredNames} اسماء كحد أقصى` };
        }
      }
    }
  }
  return { valid: true };
};