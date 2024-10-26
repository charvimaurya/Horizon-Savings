<<<<<<< HEAD
=======
// app.js or server.js
const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const walletsRoutes = require('./routes/wallets'); // Import wallet routes
const userRoutes = require('./routes/users'); // Import user routes

// MongoDB connection URI (replace with your actual connection string)
const uri = 'mongodb+srv://user1:user123@horizonsavings.fit27.mongodb.net/NG'; // Add your connection string here

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json()); // Middleware to parse JSON requests

// Use the user routes
app.use('/api/users', userRoutes); // All user routes will start with /api/users

// Use the wallets routes
app.use('/api/wallets', walletsRoutes); // All wallet routes will start with /api/wallets

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
>>>>>>> origin/main
