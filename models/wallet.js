const mongoose = require('mongoose');

// Define the Wallet Schema
const walletSchema = new mongoose.Schema({
    publicKey: {
        type: String,
        required: true,
        unique: true // Ensures unique wallet addresses
    },
    secretKey: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the Wallet model

const Wallet = mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
module.exports = Wallet;
