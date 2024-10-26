import { Server, Keypair } from 'stellar-sdk';

// Connect to the Stellar network (Testnet or Public)
const server = new Server('https://horizon-testnet.stellar.org'); // For Testnet
// const server = new Server('https://horizon.stellar.org'); // For Public Network

// Create a new Stellar keypair
const keypair = Keypair.random();
console.log("Public Key:", keypair.publicKey());
console.log("Secret Key:", keypair.secret());

async function getAccountDetails(publicKey) {
    try {
        const account = await server.loadAccount(publicKey);
        console.log("Account Balance:");
        account.balances.forEach(balance => {
            console.log(`Asset: ${balance.asset_type}, Balance: ${balance.balance}`);
        });
    } catch (error) {
        console.error("Error fetching account details:", error);
    }
}

// Replace with your Stellar account public key
const publicKey = "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
getAccountDetails(publicKey);

async function sendPayment(sourceSecret, destinationPublicKey, amount) {
    try {
        // Load the source account
        const sourceKeypair = Keypair.fromSecret(sourceSecret);
        const account = await server.loadAccount(sourceKeypair.publicKey());

        // Create the payment operation
        const paymentOp = {
            destination: destinationPublicKey,
            asset: StellarSdk.Asset.native(), // Use XLM; for custom assets, define them here
            amount: amount.toString(), // Amount to send (string format)
        };

        // Create the transaction
        const transaction = new StellarSdk.TransactionBuilder(account, {
            fee: await server.fetchBaseFee(), // Fetch the current base fee
            networkPassphrase: StellarSdk.Networks.TESTNET, // Change to NETWORKS.PUBLIC for mainnet
        })
        .addOperation(StellarSdk.Operation.payment(paymentOp))
        .setTimeout(30) // Set timeout in seconds
        .build();

        // Sign the transaction
        transaction.sign(sourceKeypair);

        // Submit the transaction
        const result = await server.submitTransaction(transaction);
        console.log("Payment Successful! Result:", result);
    } catch (error) {
        console.error("Error sending payment:", error);
    }
}

// Usage example
const sourceSecret = "SXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Your secret key
const destinationPublicKey = "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Destination public key
const amount = 10; // Amount to send in XLM

sendPayment(sourceSecret, destinationPublicKey, amount);
