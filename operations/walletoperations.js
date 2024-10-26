// operations/walletoperations.js
const Wallet = require('../models/wallet'); // Import the Wallet model

// Function to create a new wallet
async function createWallet(userId) {
    const wallet = new Wallet({ userId });
    return await wallet.save(); // Save the new wallet to the database
}

// Function to deposit funds into a wallet
async function depositFunds(walletId, amount) {
    const wallet = await Wallet.findById(walletId);
    if (!wallet) {
        throw new Error('Wallet not found');
    }
    wallet.balance += amount; // Update the balance
    return await wallet.save(); // Save the updated wallet
}

// Function to withdraw funds from a wallet
async function withdrawFunds(walletId, amount) {
    const wallet = await Wallet.findById(walletId);
    if (!wallet) {
        throw new Error('Wallet not found');
    }
    if (wallet.balance < amount) {
        throw new Error('Insufficient balance');
    }
    wallet.balance -= amount; // Update the balance
    return await wallet.save(); // Save the updated wallet
}

// Export the functions
module.exports = {
    createWallet,
    depositFunds,
    withdrawFunds,
};
