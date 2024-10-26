import { Server, Keypair } from 'stellar-sdk';

// Initialize Stellar SDK
const server = new Server('https://horizon-testnet.stellar.org');

async function createAccount() {
    // Generate a new keypair
    const pair = Keypair.random();
    const publicKey = pair.publicKey();
    const secret = pair.secret();

    console.log("Public Key:", publicKey);
    console.log("Secret Key:", secret);

    // Fund the account on the test network
    const response = await fetch(`https://friendbot.stellar.org?addr=${publicKey}`);
    const json = await response.json();
    console.log(json);
}

// Call createAccount function
createAccount();
async function sendPayment(sourceSecret, destinationPublicKey, amount) {
    // Create Keypair from source secret
    const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecret);

    // Load the account to get its sequence number
    const sourceAccount = await server.loadAccount(sourceKeypair.publicKey());

    // Create a transaction
    const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.TESTNET // or Networks.PUBLIC for live
    })
    .addOperation(StellarSdk.Operation.payment({
        destination: destinationPublicKey,
        asset: StellarSdk.Asset.native(),
        amount: amount.toString()
    }))
    .setTimeout(30)
    .build();

    // Sign the transaction
    transaction.sign(sourceKeypair);

    // Submit the transaction
    try {
        const transactionResult = await server.submitTransaction(transaction);
        console.log("Payment successful!", transactionResult);
    } catch (error) {
        console.error("Payment failed:", error);
    }
}
