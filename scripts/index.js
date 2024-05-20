import Activity from "../models/activity.model.js";
import FormTemplate from "../models/formTemplate.model.js";
import { ObjectId } from 'mongodb';
import { activities } from "./data.js";
import { FormTemplates } from "./data.js";

export const checkAndCreateActivities = async () => {
  try {
    for (let i = 0; i < activities.length; i++) {
      const activityId = new ObjectId(activities[i]._id);
      const activity = await Activity.findOne({ _id: activityId });
      if (!activity) {
        const newActivity = new Activity({
          _id: activityId,
          name: activities[i].name,
          description: activities[i].description,
        });
        console.log("🚀 ~ checkAndCreateActivities ~ newActivity:", `${activities[i].name} created successfully`)
        await newActivity.save();
      } else {
        if (activity.name !== activities[i].name || activity.description !== activities[i].description) {
          activity.name = activities[i].name;
          activity.description = activities[i].description;
          console.log("🚀 ~ checkAndCreateActivities ~ activity updated successfully")
          await activity.save();
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export const checkAndCreateFormTemplates = async () => {
  try {
    for (let i = 0; i < FormTemplates.length; i++) {
      const formTemplateId = new ObjectId(FormTemplates[i]._id);
      const formTemplate =
        await FormTemplate.findOne({ _id: formTemplateId });
      if (!formTemplate) {
        const newFormTemplate = new FormTemplate({
          _id: formTemplateId,
          name: FormTemplates[i].name,
          activityId: FormTemplates[i].activityId,
          description: FormTemplates[i].description,
          fields: FormTemplates[i].fields,
          submittedBy: FormTemplates[i].submittedBy,
        });
        console.log("🚀 ~ checkAndCreateFormTemplates ~ newFormTemplate:", `${FormTemplates[i].name} created successfully`)
        await newFormTemplate.save();
      }
      else {
        if (formTemplate.name !== FormTemplates[i].name || formTemplate.description !== FormTemplates[i].description) {
          formTemplate.name = FormTemplates[i].name;
          formTemplate.description = FormTemplates[i].description;
          console.log("🚀 ~ checkAndCreateFormTemplates ~ formTemplate updated successfully")
          await formTemplate.save();
        }
      }
    }
  }
  catch (err) {
    console.log(err);
  }
}