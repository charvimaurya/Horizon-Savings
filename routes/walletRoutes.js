const express = require('express');
const router = express.Router();
const {
    createWallet,
    getAllWallets,
    getWalletById,
    updateWallet,
    deleteWallet
} = require('../operations/walletoperations');

// Route to create a new wallet
router.post('/', async (req, res) => {
    try {
        const wallet = await createWallet(req.body);
        res.status(201).json(wallet); // Return created wallet
    } catch (error) {
        res.status(500).json({ error: 'Error creating wallet' });
    }
});

// Route to get all wallets
router.get('/', async (req, res) => {
    try {
        const wallets = await getAllWallets();
        res.json(wallets);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching wallets' });
    }
});

// Route to get a wallet by ID
router.get('/:id', async (req, res) => {
    try {
        const wallet = await getWalletById(req.params.id);
        if (wallet) {
            res.json(wallet);
        } else {
            res.status(404).send('Wallet not found');
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching wallet' });
    }
});

// Route to update a wallet
router.put('/:id', async (req, res) => {
    try {
        const updatedWallet = await updateWallet(req.params.id, req.body);
        if (updatedWallet) {
            res.json(updatedWallet);
        } else {
            res.status(404).send('Wallet not found');
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating wallet' });
    }
});

// Route to delete a wallet
router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteWallet(req.params.id);
        if (result) {
            res.send('Wallet deleted');
        } else {
            res.status(404).send('Wallet not found');
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting wallet' });
    }
});

// Export the router
module.exports = router;
