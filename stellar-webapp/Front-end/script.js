// script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', (event) => {
        // Prevent default behavior
        event.preventDefault(); 
        
        // Get User ID and Password values
        const userId = document.getElementById('userId').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation to check if fields are filled
        if (userId === '' || password === '') {
            alert('Please fill in both fields!');
            return;
        }

        // Proceed with the login
        alert('Login successful!');
        // Redirect to the desired page, for example:
        window.location.href = 'account.html';
    });
});
import { Server, Keypair } from 'stellar-sdk'; // Make sure to import Stellar SDK

// Initialize Stellar Server (Testnet or Mainnet)
const server = new Server('https://horizon-testnet.stellar.org'); // For Testnet
// const server = new Server('https://horizon.stellar.org'); // For Public Network

// Add your Stellar secret key here (ensure this is done securely)
const sourceSecret = "SXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Replace with your secret key

async function sendPayment(sourceSecret, destinationPublicKey, amount) {
    try {
        const sourceKeypair = Keypair.fromSecret(sourceSecret);
        const account = await server.loadAccount(sourceKeypair.publicKey());

        const paymentOp = {
            destination: destinationPublicKey,
            asset: StellarSdk.Asset.native(), // Use XLM
            amount: amount.toString(), // Amount to send (string format)
        };

        const transaction = new StellarSdk.TransactionBuilder(account, {
            fee: await server.fetchBaseFee(), // Fetch the current base fee
            networkPassphrase: StellarSdk.Networks.TESTNET, // Change for mainnet
        })
        .addOperation(StellarSdk.Operation.payment(paymentOp))
        .setTimeout(30)
        .build();

        transaction.sign(sourceKeypair);

        const result = await server.submitTransaction(transaction);
        console.log("Payment Successful! Result:", result);
    } catch (error) {
        console.error("Error sending payment:", error);
    }
}

// Event listener for form submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destinationPublicKey = document.getElementById('destinationPublicKey').value;
    const amount = parseFloat(document.getElementById('amount').value);

    sendPayment(sourceSecret, destinationPublicKey, amount); // Ensure sourceSecret is securely managed
});


    // Reload button functionality to update balance display
    document.querySelector('.Reload').addEventListener('click', () => {
        displayBalance();
    });

    const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:<db_password>@horizonsavings.fit27.mongodb.net/?retryWrites=true&w=majority&appName=HorizonSavings";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




// Function to refresh balance
function refreshBalance() {
    // Simulate fetching a new balance (for demonstration)
    const newBalance = (Math.random() * 100 + 50).toFixed(2);
    localStorage.setItem('xlmBalance', newBalance);
    displayBalance();
    alert('Balance updated!');
}

// Function to confirm navigation
function confirmNavigation(event) {
    if (!confirm('Are you sure you want to navigate away?')) {
        event.preventDefault(); // Prevent the default behavior of the link
    }
}

// Adding event listeners for confirmation and refresh
document.addEventListener('DOMContentLoaded', () => {
    // Display the initial balance
    displayBalance();

    // Add click event listener for the refresh icon
    const refreshIcon = document.querySelector('.MacbookAir3 div:nth-of-type(1)');
    if (refreshIcon) {
        refreshIcon.addEventListener('click', refreshBalance);
    }

    // Add confirmation for all navigation links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', confirmNavigation);
    });
});

// Function to handle deposit confirmation
document.getElementById('confirmButton').addEventListener('click', function() {
    const depositInput = document.getElementById('depositAmount');
    const depositAmount = parseFloat(depositInput.value);

    // Validate input
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount greater than $0.00.');
        return;
    }

    // Fixed transaction fee
    const transactionFee = 0.01;

    // Calculate the total amount including transaction fee
    const totalAmount = depositAmount + transactionFee;

    // Update the displayed values
    const totalAmountDiv = document.querySelector('.totalAmount');
    const transactionFeeDiv = document.querySelector('.transactionFee');
    const youAreAboutToDepositDiv = document.querySelector('.youAreAboutToDeposit');

    // Update displayed text
    totalAmountDiv.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    transactionFeeDiv.textContent = `Transaction Fee: $${transactionFee.toFixed(2)}`;
    youAreAboutToDepositDiv.textContent = `You are about to deposit: $${depositAmount.toFixed(2)}`;
});

// Function to handle withdrawal confirmation
document.getElementById('confirmButton').addEventListener('click', function() {
    const withdrawalInput = document.getElementById('withdrawalAmount');
    const withdrawalAmount = parseFloat(withdrawalInput.value);

    // Validate input
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert('Please enter a valid withdrawal amount greater than 0.00 XLM.');
        return;
    }

    // Fixed transaction fee
    const transactionFee = 0.01;

    // Calculate the total amount deducted
    const totalAmountDeducted = withdrawalAmount + transactionFee;

    // Update the displayed values
    const totalAmountDiv = document.querySelector('.totalAmount');
    const transactionFeeDiv = document.querySelector('.transactionFee');
    const youAreAboutToWithdrawDiv = document.querySelector('.youAreAboutToWithdraw');

    // Update displayed text
    totalAmountDiv.textContent = `Total Amount Deducted: ${totalAmountDeducted.toFixed(2)} XLM`;
    transactionFeeDiv.textContent = `Transaction Fee: ${transactionFee.toFixed(2)} XLM`;
    youAreAboutToWithdrawDiv.textContent = `You are about to withdraw: ${withdrawalAmount.toFixed(2)} XLM`;
});

// Function to handle log out confirmation
document.getElementById('logOutButton').addEventListener('click', function() {
    // Here you can handle the actual logout process
    // For example, you might want to clear user data or redirect to a login page
    alert('You have successfully logged out.'); // Simple alert for demonstration
    window.location.href = 'login.html'; // Redirect to login page after logout
});

/// Function to handle log out confirmation
document.getElementById('logOutButton').addEventListener('click', function() {
    // Handle the actual logout process
    alert('You have successfully logged out.'); // Simple alert for demonstration
    window.location.href = 'login.html'; // Redirect to the login page after logout
});

// Function to handle cancel button
document.getElementById('cancelButton').addEventListener('click', function() {
    // Redirect back to the previous page
    window.location.href = 'account.html'; // Replace with the actual dashboard page
});
document.getElementById('loginButton').addEventListener('click', function() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Perform login validation (this is just a placeholder; implement your actual authentication logic)
    if (userId && password) {
        // Redirect to the next page (e.g., dashboard.html) upon successful login
        window.location.href = 'dashboard.html'; // Change 'dashboard.html' to your target page
    } else {
        alert('Please enter your User ID and Password');
    }
});

