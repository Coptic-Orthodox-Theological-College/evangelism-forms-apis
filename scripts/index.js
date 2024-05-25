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
        if (activity !== activities[i]) {
          activity.name = activities[i].name;
          activity.description = activities[i].description;
          console.log("🚀 ~ checkAndCreateActivities ~ activity updated successfully")
          await activity.save();
        }
      }
    }
    const allActivities = await Activity.find();
    for (let activity of allActivities) {
      if (!activities.find((act) => act._id === activity._id.toString())) {
        await Activity.deleteOne({ _id: activity._id });
        console.log("🚀 ~ checkAndCreateActivities ~ activity deleted successfully")
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
      } else {
        if (formTemplate !== FormTemplates[i]) {
          formTemplate.name = FormTemplates[i].name;
          formTemplate.activityId = FormTemplates[i].activityId;
          formTemplate.description = FormTemplates[i].description;
          formTemplate.fields = FormTemplates[i].fields;
          console.log("🚀 ~ checkAndCreateFormTemplates ~ formTemplate", `${FormTemplates[i].name} updated successfully`)
          await formTemplate.save();
        }
      }
    }
    // check if there are any form templates in the database that are not in the data.js file and delete them
    const formTemplates = await FormTemplate.find();
    for (let formTemplate of formTemplates) {
      if (!FormTemplates.find((template) => template._id === formTemplate._id.toString())) {
        await FormTemplate.deleteOne({ _id: formTemplate._id });
        console.log("🚀 ~ checkAndCreateFormTemplates ~ formTemplate", `${formTemplate.name} deleted successfully`
        );
      }
    }
  } catch (err) {
    console.log(err);
  }
}