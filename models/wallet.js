const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User
  publicKey: { type: String, unique: true },
  secretKey: String, // Keep secure; consider encrypting
  balance: { type: Number, default: 0 }
});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;
