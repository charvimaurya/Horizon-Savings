const express = require('express');
const app = express();
const port = 3000; // You can change this to any available port

// Example JavaScript function
function runMyScript() {
    return { message: "Hello, this is my script!" };
}

// Define an endpoint that runs the script
app.get('/run-script', (req, res) => {
    const result = runMyScript();
    res.json(result);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});




const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./transactionRoutes'); // Import your transaction routes

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(error => console.error('MongoDB connection error:', error));

// Use transaction routes
app.use('/api/transactions', transactionRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
