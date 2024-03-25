import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  role: { type: String, enum: ['user', 'admin'], required: true, default: 'user' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;