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
document.addEventListener("DOMContentLoaded", () => {
    // Function to display balance from localStorage
    function displayBalance() {
        const balance = localStorage.getItem('xlmBalance') || '100.50'; // Default balance if not set
        document.querySelector('.XlmBalanceAmount').textContent = `${balance} XLM`;
    }

    // Display initial balance on load
    displayBalance();

    // Reload button functionality to update balance display
    document.querySelector('.Reload').addEventListener('click', () => {
        displayBalance();
    });
});



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

