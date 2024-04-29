import Church from "../models/church.model.js";
import User from "../models/user.model.js";

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
  const { name, address } = req.body;

  const existingChurch = await Church.findOne({ userId });

  if (existingChurch) {
    return res.status(400).json({ message: "يوجد بالفعل كنيسة مسجلة" });
  }

  const church = new Church({ userId, name, address });

  try {
    await church.save();
    res.json({ success: true, church });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}