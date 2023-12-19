const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const pointManagerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, require: true},
  managedEmployees: [employeeSchema]
});

const users = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, default: 'Leadership' },
  managedAccounts: [pointManagerSchema]
});

module.exports = mongoose.model('users', users);

