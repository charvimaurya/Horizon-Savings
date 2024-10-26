// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/wallets'); // Import user routes
const path = require('path');

const app = express();
<<<<<<< HEAD
const walletsRoutes = require('./routes/wallets'); // Import wallet routes
const userRoutes = require('./routes/users'); // Import user routes

// MongoDB connection URI (replace with your actual connection string)
const uri = 'mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/'; // Add your connection string here
=======
//const cors = require('cors');
const PORT = process.env.PORT || 3000; // Use 3001 or your preferred port
>>>>>>> b19ccf50d8d72211b7854403c00a0bd24d911a55

// Middleware
app.use(bodyParser.json());
//app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'operations', 'key.html'));
    //res.send('Welcome to the Savings Wallet API! Use /api to access endpoints.');
});

// Connect user routes
app.use('/api', userRoutes); // Mount user routes under /api

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

