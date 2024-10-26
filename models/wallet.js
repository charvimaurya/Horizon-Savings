// models/wallet.js
const mongoose = require('mongoose');

// Define a schema and model for MongoDB
const walletSchema = new mongoose.Schema({
  publicKey: String,
  secretKey: String,
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;