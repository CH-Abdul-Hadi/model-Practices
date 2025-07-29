import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'passward is required'],
      min: [8, 'password must be 8 charater long'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
