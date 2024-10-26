document.getElementById('createAccount').addEventListener('click', async () => {
    const StellarSdk = window.StellarSdk;

    // Use the test network
    StellarSdk.Network.useTestNetwork();

    // Create a new keypair
    const pair = StellarSdk.Keypair.random();
    const publicKey = pair.publicKey();
    const secretKey = pair.secret();

    // Display the keys
    document.getElementById('output').textContent = `Public Key: ${publicKey}\nSecret Key: ${secretKey}`;
});
