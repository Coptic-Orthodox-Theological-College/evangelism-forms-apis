import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const createAdminUser = async () => {
  try {
    const adminUser = await User.findOne({ role: 'admin' });
    if (adminUser) return;

    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash('admin', salt);

    const newAdmin = new User({
      name: 'Admin',
      password: hashedPassword,
      role: 'admin'
    });

    await newAdmin.save();
    console.log('Admin user created');
  } catch (err) {
    console.error('Error creating admin user:', err);
  }
};