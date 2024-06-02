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
    let data = await Activity.find();
    let temp = data.map(activity => activity.toObject()); // Convert Mongoose documents to plain objects
    console.log("🚀 ~ getActivities ~ temp:", temp);

    for (let i = 0; i < temp.length; i++) {
      const count = await FormTemplate.countDocuments({ activityId: temp[i]._id });
      if (count === 1) {
        const form = await FormTemplate.findOne({ activityId: temp[i]._id });
        temp[i].ifHaveOneForm = form;
      } else {
        temp[i].ifHaveOneForm = null;
      }
    }

    res.json({ success: true, activities: temp });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
