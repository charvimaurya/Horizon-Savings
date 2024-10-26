const StellarSdk = require('stellar-sdk');

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Networks.TESTNET; // Use TESTNET for development

// Set the network to TESTNET

StellarSdk.NetworkError.useTestNetwork();

async function getAccountDetails(accountId) {
    try {
        const account = await server.loadAccount(accountId);
        console.log('Account details:', account);
    } catch(error) {
        console.error('Error fetching account details:', error);
    }
}

// Call the function with a sample account ID
getAccountDetails('YOUR_ACCOUNT_ID');

module.exports = { StellarSdk, server };
