import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const createAdminUser = async () => {
  try {
    const adminUser = await User.findOne({ role: 'admin' });
    if (adminUser) return;

    const newAdmin = new User({
      username: 'Admin',
      password: "admin1234",
      role: 'admin'
    });

    await newAdmin.save();
    console.log('Admin user created');
  } catch (err) {
    console.error('Error creating admin user:', err);
  }
};