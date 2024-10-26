<<<<<<< HEAD
const express = require('express');
<<<<<<< HEAD
const connectDB = require('./db'); // Correct path to db.js
const Wallet = require('./models/wallet'); // Correct path to walletModel.js
const Transaction = require('./models/transaction'); //Correct path to transactionModel.js
const mongoose = require('./db');
const { StellarSdk, server } = require('./stellar'); // Middleware to parse Json

const app = express();
app.use(express.json());

//Connect to MongoDB
connectDB();
=======
const connectDB = require('./db');
const { createUser, getUserByEmail, updateUserBalance, deleteUser } = require('./operationsUser');

const app = express();
>>>>>>> a1dc6ebbb99a7b193a494a3d566ba638fc3a13df

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

<<<<<<< HEAD
// Route to handle deposits
app.post('/wallet/:id/deposit', async (req, res) => {
  const { amount } = req.body;
  const walletId = req.params.id;

  if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
  }

  try {
      const wallet = await Wallet.findById(walletId);
      if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
      }

      // Update wallet balance
      wallet.balance += amount;
      await wallet.save();

      // Record the transaction
      const transaction = new Transaction({
          walletId,
          amount,
          transactionType: 'deposit',
      });
      await transaction.save();

      res.status(200).json({ wallet, transaction });
  } catch (error) {
      res.status(500).json({ error: 'Error processing transaction', details: error });
  }
});

// Route to handle withdrawals
app.post('/wallet/:id/withdraw', async (req, res) => {
  const { amount } = req.body;
  const walletId = req.params.id;

  if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
  }

  try {
      const wallet = await Wallet.findById(walletId);
      if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
      }

      // Check if sufficient balance exists
      if (wallet.balance < amount) {
          return res.status(400).json({ error: 'Insufficient funds' });
      }

      // Update wallet balance
      wallet.balance -= amount;
      await wallet.save();

      // Record the transaction
      const transaction = new Transaction({
          walletId,
          amount,
          transactionType: 'withdrawal',
      });
      await transaction.save();

      res.status(200).json({ wallet, transaction });
  } catch (error) {
      res.status(500).json({ error: 'Error processing transaction', details: error });
  }
});


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

=======
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
>>>>>>> a1dc6ebbb99a7b193a494a3d566ba638fc3a13df
