const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      maxLength: [50, 'First Name cannot exceed 30 characters'],
      required: [true, 'Please enter first name'],
    },
    lastName: {
      type: String,
      maxLength: [50, 'Last Name cannot exceed 30 characters'],
      required: [true, 'Please enter last name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
      unique: [true, 'Email already exists'],
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
      minlength: [6, 'Password must be of minimum 6 characters'],
      select: false,
    },
    isAdmin: Boolean,
  },
  { timestamps: true }
);
module.exports = mongoose.model('user', userSchema);
