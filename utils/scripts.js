import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const createAdminUser = async () => {
  try {
    const adminUser = await User.findOne({ role: 'admin' });

    if (!adminUser) {
      const newAdmin = new User({
        username: 'Admin',
        password: "admin1234",
        role: 'admin'
      });

      await newAdmin.save();
      console.log('Admin user created');
    }

    const churchUser = await User.findOne({ role: 'church' });

    if (!churchUser) {
      const newChurch = new User({
        username: 'Test',
        password: "test1234",
        role: 'church'
      });

      await newChurch.save();
      console.log('Test user created');
    }
  } catch (err) {
    console.error('Error creating admin user:', err);
  }
};