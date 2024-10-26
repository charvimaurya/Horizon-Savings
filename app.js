// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users'); // Import user routes

const app = express();
const PORT = process.env.PORT || 3000; // Use 3001 or your preferred port

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Savings Wallet API! Use /api to access endpoints.');
});

// Connect user routes
app.use('/api', userRoutes); // Mount user routes under /api

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
>>>>>>> origin/main
