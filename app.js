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
