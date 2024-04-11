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
    res.json({ success: true, token, message: "تم تسجيل الدخول بنجاح" });
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
      users.push({ username, password });
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

// create admin

// check if church frist time login 
//    - if yes create church and return the data
//    - if no return the data

// create church if first time login

// CRUD church

/**
  **church schema
  churchName
  churchLocation
  churchPhoneNumber
 */

// --------------------------------------------------------------------------------------------------------

// Activity CRUD -> Admin

// --------------------------------------------------------------------------------------------------------

// Form

// --------> Admin
// create formTemplate + CRUD

// --------> Church
// submit form + CRUD