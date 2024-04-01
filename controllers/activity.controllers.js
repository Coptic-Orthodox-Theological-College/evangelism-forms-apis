import Activity from "../models/activity.model.js";

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
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
