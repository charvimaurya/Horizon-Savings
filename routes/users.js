const express = require('express');
const router = express.Router();
const { createUser, getUserByEmail, updateUserBalance, deleteUser } = require('../operations/useroperations');

<<<<<<< HEAD
// Create a new user
router.post('/', async (req, res) => {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json(user);
});

// Get user by email
router.get('/:email', async (req, res) => {
    const user = await getUserByEmail(req.params.email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Update user balance
router.put('/:email/balance', async (req, res) => {
    const { newBalance } = req.body;
    const updatedUser = await updateUserBalance(req.params.email, newBalance);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete user
router.delete('/:email', async (req, res) => {
    const result = await deleteUser(req.params.email);
    if (result.deletedCount > 0) {
        res.send('User deleted');
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;
=======
// Define routes for wallets
router.get('/', (req, res) => {
    // Logic to get all wallets
});

router.post('/', (req, res) => {
    // Logic to create a new wallet

});

router.get('/:id', (req, res) => {
    // Logic to get a specific wallet by ID
});

// Export the router
module.exports = router;
>>>>>>> b19ccf50d8d72211b7854403c00a0bd24d911a55
