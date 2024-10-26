const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'  }, // Reference to User
  publicKey: { type: String, unique: true },
  secretKey: String, // Keep secure; consider encrypting
  balance: { type: Number, default: 0 },
  multiSignature: { type: Boolean, defaullt: false },
  createdAT: { type: Date, default: Date.now}
});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;

const Wallet = require('./walletModel'); // Adjust path as necessary

const createWallet = async (userId) => {
    const wallet = new Wallet({ userId });
    await wallet.save();
    return wallet;
};

const deposit = async (walletId, amount) => {
    const wallet = await Wallet.findById(walletId);
    wallet.balance += amount;
    await wallet.save();
    return wallet;
};

const withdraw = async (walletId, amount) => {
    const wallet = await Wallet.findById(walletId);
    if (wallet.balance >= amount) {
        wallet.balance -= amount;
        await wallet.save();
        return wallet;
    } else {
        throw new Error('Insufficient funds');
    }
};