// models/wallet.js
const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Add a pre-save hook to update the updatedAt timestamp
walletSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Create a Wallet model
const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;