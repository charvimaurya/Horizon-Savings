const mongoose = require('mongoose');

// Define a schema and model for MongoDB
const userSchema = new mongoose.Schema({
  publicKey: String,
  secretKey: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;