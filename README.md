# Horizon Saving App

Welcome to **Horizon Saving**, a secure and user-friendly wallet for growing and protecting your savings on the Stellar blockchain. Horizon Saving provides a safe, inflation-protected way to manage your XLM funds with added features like multi-signature security, rewards on deposits, and authentication.

---

### 🌟 Overview

Horizon Saving allows users to deposit and grow XLM (Stellar's cryptocurrency) in a secure wallet, safeguarded against inflation. The app leverages Stellar’s blockchain capabilities to provide:

- **Savings Wallets**: Deposit XLM and earn rewards.
- **Multi-Signature Wallet Security**: Enhanced security through multiple signers.
- **Account Authentication**: Secure user access and account management.
- **User-Friendly Account Management**: Seamless management of savings and Stellar accounts.

### 🔑 Key Features

1. **Account Management**  
   Simplified account management makes it easy to set up, manage, and monitor your Stellar savings wallet.

2. **Secure Multi-Signature Wallets**  
   Horizon Saving supports multi-signature wallets, adding a layer of security by requiring multiple authorizations for transactions.

3. **Interest and Rewards on Savings**  
   With Horizon Saving, you earn rewards on your XLM deposits, helping your savings grow passively.

4. **Inflation Protection**  
   By storing XLM in Horizon Saving, users gain protection against inflation, with automatic adjustments to safeguard the value of their savings.

5. **Account Authentication**  
   The authentication system ensures only authorized users access the app, providing security for each user’s wallet.

6. **Secure Stellar Transactions**  
   Horizon Saving utilizes Stellar’s secure blockchain for fast, low-cost transactions. Every transaction is protected by Stellar’s consensus protocol for maximum safety.

---

### 🚀 Getting Started

To start using Horizon Saving, follow these steps:

1. **Set Up Your Wallet**  
   A unique Stellar wallet is generated upon account creation, providing a **Public Key** (for receiving funds) and a **Secret Key** (for authorization). Store your Secret Key securely, as it grants access to your funds.
   
2. **Deposit XLM**  
   Deposit XLM into your wallet, with funds available almost immediately in Horizon Saving.

3. **Enable Multi-Signature Security (Optional)**  
   Multi-signature wallets allow you to require multiple approvals for significant transactions, adding another layer of security.

4. **Authenticate Your Account**  
   Use the secure login feature to access your wallet, ensuring only authorized access to your savings.

5. **Grow Your Savings**  
   Horizon Saving applies interest or rewards automatically, allowing your funds to grow over time.

---

### 🛠️ Stellar Integration and Blockchain Security

Built on the **Stellar SDK**, Horizon Saving securely manages your transactions and account settings through Stellar’s blockchain:

- **Account Creation**: Generate and fund Stellar accounts securely.
- **Send and Receive XLM**: Easily handle transactions across Stellar’s network.
- **Multi-Signature Transactions**: Set up multi-signature configurations to secure larger transactions.

With Stellar’s blockchain integration, Horizon Saving provides a secure, reliable, and scalable solution for managing XLM.

---

### 📂 Backend Structure

The backend includes specific files and directories to support core functionalities:

1. **Routes**:  
   - `wallets.js`: Defines routes for wallet-related functionalities, supporting wallet creation, management, and transactions.

2. **Models**:  
   - `transaction.js`, `user.js`, and `wallet.js` define data structures for handling transactions, user accounts, and wallets.

3. **Operations**:  
   - `useroperations.js`: Manages user-specific operations, including authentication and user data.
   - `walletoperations.js`: Manages wallet-specific operations like deposits, withdrawals, and multi-signature setups.

This structured backend enables streamlined wallet management, secure user authentication, and Stellar transaction handling.

---

### 🧩 Technical Setup (For Developers)

If you're a developer looking to set up Horizon Saving locally or contribute to the project, here's how to get started:

1. **Clone the Repository**
   
   ```bash
   git clone <repository-url>
   cd Horizon-Savings-main


2. **Install Dependencies**
   
   ```bash
   npm install

3. **Run the Server**

    ```node app.js

The backend is built using Node.js and Express, and depends upon Stellar SDK for blockchain integration. The app also features API endpoints for wallet management, multi-signature setup, and secure transactions.

### ⚠️ Security Note

Always keep your Secret Key private! Anyone with access to your Secret Key can control your funds, so be cautious and avoid sharing it with others. For even stronger security, consider using Horizon Saving’s multi-signature feature to require multiple authorizations on your wallet.

### 💬 Support

If you have questions, suggestions, or need assistance, feel free to reach out. The Horizon Saving team is dedicated to providing a secure, user-friendly savings experience for all our users.

---

Thank you for choosing Horizon Saving—where your XLM savings are secure, grow with interest, and are protected from inflation. Happy saving! 🎉

