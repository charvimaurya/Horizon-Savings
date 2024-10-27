// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const walletsRoutes = require('./routes/walletRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI (use environment variable for security)
const uri = process.env.MONGO_URI || 'mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/';

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'operations', 'key.html'));
 });

// API routes
app.use('/api/users', userRoutes); // Mount user routes
app.use('/api/wallets', walletsRoutes); // Mount wallet routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


