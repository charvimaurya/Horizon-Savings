const mongoose = require('mongoose');
const StellarSdk = require('stellar-sdk');
const User = require('../models/user'); // Import the User model

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/';

async function connectToDatabase() {
  await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB connected');
}

// Generate a random Stellar keypair and save it to MongoDB
async function createAndSaveUser() {
  const keypair = StellarSdk.Keypair.random();

  console.log('Public Key:', keypair.publicKey());
  console.log('Secret Key:', keypair.secret());

  const newUser = new User({
    publicKey: keypair.publicKey(),
    secretKey: keypair.secret(),
  });

  await newUser.save();
  console.log('User saved to MongoDB:', newUser);
}

async function main() {
  await connectToDatabase();
  await createAndSaveUser();
}

module.exports = {
  main,
};

