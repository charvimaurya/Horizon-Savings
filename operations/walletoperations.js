const StellarSdk = require('stellar-sdk');
const Wallet = require('../models/wallet'); // Import the Wallet model

// Initialize the Stellar SDK with test network
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const Keypair = StellarSdk.Keypair;

// Create a new wallet
const createWallet = async (walletData) => {
    try {
        const keypair = Keypair.random(); // Generate a new keypair
        const newWallet = new Wallet({
            publicKey: keypair.publicKey(),
            secretKey: keypair.secret(),
            ...walletData // Include other wallet data if needed
        });
        
        // Save wallet to MongoDB
        await newWallet.save();


        return newWallet; // Return the created wallet
    } catch (error) {
        console.error('Error creating wallet:', error);
        throw error; // Rethrow error to handle it in route
    }
};

// Get all wallets
const getAllWallets = async () => {
    try {
        return await Wallet.find();
    } catch (error) {
        console.error('Error fetching wallets:', error);
        throw error; // Rethrow error to handle it in route
    }
};

// Get a wallet by ID
const getWalletById = async (walletId) => {
    try {
        return await Wallet.findById(walletId);
    } catch (error) {
        console.error('Error fetching wallet:', error);
        throw error; // Rethrow error to handle it in route
    }
};

// Update a wallet (e.g., update balance)
const updateWallet = async (walletId, updateData) => {
    try {
        return await Wallet.findByIdAndUpdate(walletId, updateData, { new: true });
    } catch (error) {
        console.error('Error updating wallet:', error);
        throw error; // Rethrow error to handle it in route
    }
};

// Delete a wallet
const deleteWallet = async (walletId) => {
    try {
        return await Wallet.findByIdAndDelete(walletId);
    } catch (error) {
        console.error('Error deleting wallet:', error);
        throw error; // Rethrow error to handle it in route
    }
};

module.exports = {
    createWallet,
    getAllWallets,
    getWalletById,
    updateWallet,
    deleteWallet
};

