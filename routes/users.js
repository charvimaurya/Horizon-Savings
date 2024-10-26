const express = require('express');
const { createUser, getUserByEmail, updateUserBalance, deleteUser } = require('../operations/userOperations');
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const userData = req.body;
    try {
        const user = await createUser(userData);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get user by email
router.get('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await getUserByEmail(email);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update user balance
router.put('/:email/balance', async (req, res) => {
    const { email } = req.params;
    const { newBalance } = req.body;
    try {
        const updatedUser = await updateUserBalance(email, newBalance);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete user by email
router.delete('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const result = await deleteUser(email);
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
