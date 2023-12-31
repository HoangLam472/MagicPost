const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var user = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        default: "null",
        enum: [
          "gathering point leader",
          "head of transaction point",
          "assembly point staff",
          "transaction point staff",
          "admin",
          "null",
        ],
      },
      location: {
        type: String,
        required: true,
      },
      passwordChangeAt: Date,
      passwordResetToken: String,
      passwordResetExpires: Date,
    },
    {
      timestamps: true,
    }
  );

  user.methods.comparePasswords = async function (plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  };

  module.exports = mongoose.model("users", user);