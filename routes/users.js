const express = require('express');
const router = express.Router();
const StellarSdk = require('stellar-sdk'); // Import Stellar SDK if needed
const User = require('../models/user'); // Import your User model

// Example route to create a user
router.post('/create-user', async (req, res) => {
    // Generate a Stellar keypair
    const keypair = StellarSdk.Keypair.random();
  
    try {
        // Create a new user instance
        const newUser = new User({
            publicKey: keypair.publicKey(),
            secretKey: keypair.secret(),
        });
        
        // Save user to MongoDB
        await newUser.save();
        res.status(201).json(newUser); // Send back the created user
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
});

// You can add more routes for users here, e.g., to get or delete users

module.exports = router; // Export the router
