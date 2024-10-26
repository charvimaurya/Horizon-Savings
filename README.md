# Horizon Saving App

 Welcome to **Horizon Saving**! 
 
 Let us take care of your XLM funds on the Stellar blockchain. 
 No need to set up a complex server setup and complicated IP addresses for your 'wallet'. Use HorizonSaving to grow your savings in a safe and easy way, as if it was just a normal bank account – except with better interest and much lower fees. 
 
 HorizonSaving provides you with a smooth Hyperledger account with authentication and all feature you need to transact with crypto currencies in a safe and easy way: Multi-Sign Security: with multiple keys in the digital lock, no one account can spend your money alone. 
 
 - Rewards on Deposits: with interest on your crypto currencies in your Hyperledger account, you can earn while you save. 
 - Strong Authentication: features such as 2-factor authorisation and hardwallet (USB compatible) makes a secure private key safe from any kind of hack.
 
## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Setup](#setup)
  - [For Developers](#for-developers)
- [Backend Structure](#backend-structure)
- [Team Members](#team-members)
- [Security Note](#security-note)
- [Support](#support)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About the Project

Horizon Saving is all about making your experience with XLM (Stellar's cryptocurrency) as smooth and rewarding as possible. Whether you're just stepping into the world of blockchain or you're a seasoned pro, we've got an intuitive interface and robust security features to help your savings grow while keeping them safe from inflation.

## Key Features

1. **Easy Account Management**
   - Set up, manage, and monitor your Stellar savings wallet with ease.

2. **Multi-Signature Wallets for Extra Security**
   - Require multiple approvals for transactions to add an extra layer of protection.

3. **Earn Rewards on Your Savings**
   - Let your savings grow passively with rewards on your XLM deposits.

4. **Protection Against Inflation**
   - Keep the value of your savings intact with automatic adjustments for inflation.

5. **Secure Authentication**
   - Rest easy knowing only you have access to your wallet through secure login.

6. **Fast and Secure Transactions**
   - Enjoy quick and low-cost transactions, all safeguarded by Stellar’s consensus protocol.

## Technologies Used

We've built Horizon Saving using:

- **Stellar SDK**
  - For seamless blockchain integration, account creation, and managing transactions.

- **Node.js & Express**
  - Powering our backend and server-side operations.

- **JavaScript**
  - The core language driving both our backend and frontend functionalities.

- **API Endpoints**
  - Facilitating wallet management, multi-signature setups, and secure transactions.

## Getting Started

### Setup

Ready to start your savings journey? Here's how:

1. **Set Up Your Wallet**
   - Create an account, and we'll generate a unique Stellar wallet just for you.
   - You'll get a **Public Key** (to receive funds) and a **Secret Key** (for authorization).
   - **Important:** Keep your Secret Key safe and private!

### For Developers

If you're interested in running Horizon Saving locally or contributing to our project, here's how to get started:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd Horizon-Savings-main
2. **Install Dependencies**

   ```bash
   Copy code
   npm install
   Run the Server

   bash
   Copy code
   node app.js
   Backend Structure
   Our backend is thoughtfully organized to ensure everything runs smoothly:

3. **Routes**

   - wallets.js: Handles wallet-related functionalities like creation, management, and transactions.

4. **Models**
   - transaction.js, user.js, wallet.js: Define data structures for transactions, user accounts, and wallets.

5. **Operations**
   - useroperations.js: Manages user authentication and data.
   - walletoperations.js: Handles deposits, withdrawals, and multi-signature setups.
6. **Team Members**

Our dedicated team has worked tirelessly to bring Horizon Saving to life:

   - Charvi - Frontend Developer (UI/UX & Dashboard Layout):
      - Designed the dashboard with a focus on security and trust, using a palette of dark blues, grays, and whites.
      - Developed main sections: balance display, deposits, rewards, and recent transactions.
      - Ensured the interface is responsive and user-friendly.
      - Assisted in creating a concise project description.
   - Mariam - Frontend Developer (Functionality Integration & Interactivity)
      - Implemented interactive elements like buttons and input forms for user actions.
      - Set up clear labels and calls to action for each functionality.
      - Integrated the user interface with backend APIs for smooth functionality.
      - Contributed to the detailed README documentation and created a video demo.
   - Maira - Backend Developer (User Account Management)
      - Set up the database for user accounts and transactions.
      - Developed APIs for user registration, login, and account management.
      - Ensured the user authentication process is secure.
      - Wrote API documentation for user account-related functionalities.
   - Anan - Backend Developer (Stellar Integration & Wallet Features)
      - Set up the Stellar SDK and handled key wallet functionalities like creating wallets and sending/receiving XLM.
      - Implemented basic multi-signature wallet functionality.
      - Documented the Stellar integration process and wallet functionalities.
   - Lina - Backend Developer (Transaction Management & APIs)
      - Developed APIs for deposit, withdrawal, and transaction tracking.
      - Ensured backend services handle user transactions securely and efficiently.
      - Collaborated with frontend developers for seamless integration.
      - Prepared a link to the public GitHub repository containing the deployed code.

### Security Note

   - 🚨 Keep your Secret Key private!
   Your Secret Key grants access to your funds. Never share it with anyone, and consider enabling multi-signature features for enhanced security.

### Support
Got questions or need assistance? We're here to help! Reach out to our support team anytime. We're dedicated to ensuring a secure and enjoyable experience for all our users.

### License
This project is licensed under the MIT License.

### Acknowledgements
Stellar Development Foundation for the Stellar SDK and blockchain network.
---
Thank you for choosing Horizon Saving—where your XLM savings are secure, earn rewards, and stay protected from inflation. Happy saving! 🎉
