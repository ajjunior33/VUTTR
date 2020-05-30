const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  forgoutPasswordToken: String,
  forgoutPasswordDate: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model('Users', UserSchema);
