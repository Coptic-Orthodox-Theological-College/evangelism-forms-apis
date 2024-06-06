import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ success: false, message: "خطأ في اسم المستخدم" })

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ success: false, message: "خطأ في كلمة المرور" });

    const token = generateToken({ userId: user._id, role: user.role });
    res.json({ success: true, token, role: user.role, userId: user._id, message: "تم تسجيل الدخول بنجاح" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createUsers = async (req, res) => {
  const { numberOfUsers } = req.body;

  if (!numberOfUsers || numberOfUsers < 1) {
    return res.status(400).json({ message: "Invalid number of users" });
  }

  let users = [];
  for (let i = 0; i < numberOfUsers; i++) {
    let username = "user_" + Math.random().toString(36).substring(4);
    let password = "pass_" + Math.random().toString(36).substring(4);
    let newUser = new User({ username, password });
    try {
      await newUser.save();
      users.push({index: i + 1, username, password});
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  }
  try {
    res.json({ message: "Users created successfully", users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { username, password } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (username) user.username = username;
    if (password)
      password.length < 8
        ? res.status(400).json({ message: "Password must be at least 8 characters" })
        : user.password = password;
    await user.save();
    res.json({ success: true, message: "User updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}