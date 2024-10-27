const StellarSdk = require('stellar-sdk');
const { saveWallet } = require('../operations/walletoperations');
require('../config/database'); // Ensures the database is connected

// Generate a random Stellar keypair
const keypair = StellarSdk.Keypair.random();

console.log('Public Key:', keypair.publicKey());
console.log('Secret Key:', keypair.secret());

async function main() {
  await saveWallet(keypair.publicKey(), keypair.secret());
}

main().catch(console.error);
