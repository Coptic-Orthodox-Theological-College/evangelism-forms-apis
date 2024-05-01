import Activity from "../models/activity.model.js";
import FormTemplate from "../models/formTemplate.model.js";

export const createActivity = async (req, res) => {
  const { name, description } = req.body;

  const existingActivity = await Activity.findOne({ name });

  if (existingActivity) {
    return res.status(400).json({ message: "Activity already exists" });
  }

  if (!name || !description) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const newActivity = new Activity({ name, description });
  try {
    await newActivity.save();
    res.json({ message: "Activity created successfully", newActivity });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getActivities = async (req, res) => {
  try {
    const data = await Activity.find();
    let activities = [];
    for (let i = 0; i < data.length; i++) {
      const activity = data[i]._doc;
      const formTemplates = await FormTemplate.find({ activityId: activity._id });
      activities.push({ ...activity, formTemplatesCount: formTemplates.length });
    }
    res.json({ success: true, activities });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
