async function checkFreighterConnection() {
    // Check if Freighter is installed
    if (window.freighterApi) {
        try {
            const publicKey = await window.freighterApi.getPublicKey();
            if (publicKey) {
                console.log("Connected to Freighter wallet. Public Key:", publicKey);
                return true;
            }
        } catch (error) {
            console.error("Freighter connection failed:", error);
            return false;
        }
    } else {
        console.log("Freighter wallet is not installed.");
        return false;
    }
}

checkFreighterConnection().then(isConnected => {
    if (isConnected) {
        console.log("Freighter wallet is connected!");
    } else {
        console.log("Freighter wallet is not connected.");
    }
});
