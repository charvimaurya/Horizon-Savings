const express = require('express');
const app = express();
const mongoose = require('./db');
const { StellarSdk, server } = require('./stellar');

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, Horizon Savings Wallet!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
