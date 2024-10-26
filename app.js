// app.js or server.js
const express = require('express');
const app = express();
const walletsRoutes = require('./routes/wallets'); // Import wallet routes

app.use(express.json()); // Middleware to parse JSON requests

// Use the wallets routes
app.use('/api/wallets', walletsRoutes); // All wallet routes will start with /api/wallets

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
