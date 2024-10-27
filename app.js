// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
const path = require('path');

//const userRoutes = require('./routes/userRoutes');
//const walletsRoutes = require('./routes/walletRoutes');

const wallets = require('./routes/wallets');


const app = express();

// MongoDB connection URI (replace with your actual connection string)
const uri = 'mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/'; // Add your connection string here

//const cors = require('cors');
const PORT = process.env.PORT || 3000; // Use 3001 or your preferred port


// Middleware
app.use(bodyParser.json());
//app.use(cors());

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'operations', 'key.html'));
 });

// Connect user routes
//app.use('/api', userRoutes); // Mount user routes under /api

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


