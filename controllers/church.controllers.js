import Church from "../models/church.model.js";
import Submissions from "../models/submissions.model.js";

export const getChurch = async (req, res) => {
  const { userId } = req.user;

  try {
    const church = await Church.findOne({ userId });
    if (!church) {
      return res.json({ success: false, message: "Church not found" });
    }
    res.json({ success: true, church });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

export const createChurch = async (req, res) => {
  const { userId } = req.user;
  const { name, address, responsiblePerson, phone } = req.body;

  const existingChurch = await Church.findOne({ userId });

  if (existingChurch) {
    return res.status(400).json({ message: "يوجد بالفعل كنيسة مسجلة" });
  }

  const church = new Church({ userId, name, address, responsiblePerson, phone });

  try {
    await church.save();
    res.json({ success: true, church });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

export const updateChurch = async (req, res) => {
  const { userId } = req.user;
  const { name, address, responsiblePerson, phone } = req.body;

  try {
    const church = await Church.findOne({ userId });
    if (!church) {
      return res.json({ success: false, message: "Church not found" });
    }

    name && (church.name = name);
    address && (church.address = address);
    responsiblePerson && (church.responsiblePerson = responsiblePerson);
    phone && (church.phone = phone);

    await church.save();

    res.json({ success: true, church });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

export const getChurchs = async (req, res) => {
  try {
    const churchs = await Church.find();
    res.json({ success: true, churchs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

export const getAllChurchSubbmissions = async (req, res) => {
  const { userId } = req.user;

  try {
    const church = await Church.findOne({ userId });
    if (!church) {
      return res.json({ success: false, message: "Church not found" });
    }

    const submissions = await Submissions.find({ userId }).populate(
      {
        path: "formTemplateId",
        populate: {
          path: "activityId",
        },
      });
    res.json({ success: true, submissions });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}