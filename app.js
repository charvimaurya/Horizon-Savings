<<<<<<< HEAD
const express = require('express');
const connectDB = require('./db');
const { createUser, getUserByEmail, updateUserBalance, deleteUser } = require('./operationsUser');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route to create a user
app.post('/user', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await createUser({ name, email, password });
    res.status(201).json(user);
});

// Other routes can use getUserByEmail, updateUserBalance, deleteUser similarly

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
document.getElementById('createAccount').addEventListener('click', async () => {
    const StellarSdk = window.StellarSdk;

    // Use the test network
    StellarSdk.Network.useTestNetwork();

    // Create a new keypair
    const pair = StellarSdk.Keypair.random();
    const publicKey = pair.publicKey();
    const secretKey = pair.secret();

    // Display the keys
    document.getElementById('output').textContent = `Public Key: ${publicKey}\nSecret Key: ${secretKey}`;
});
>>>>>>> 7669fc5a8d758e91d8a52db3bae47e1549a7000b
