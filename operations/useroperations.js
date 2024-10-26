const User = require('./models/user');

// Create a new user
const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        console.log('User created:', user);
        return user;
    } catch (err) {
        console.error('Error creating user:', err);
    }
};

// Get user by email
const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (err) {
        console.error('Error finding user:', err);
    }
};

// Update user balance
const updateUserBalance = async (email, newBalance) => {
    try {
        const user = await User.findOneAndUpdate(
            { email },
            { balance: newBalance },
            { new: true }
        );
        console.log('Updated User Balance:', user);
        return user;
    } catch (err) {
        console.error('Error updating balance:', err);
    }
};

// Delete user by email
const deleteUser = async (email) => {
    try {
        const result = await User.deleteOne({ email });
        console.log('User deleted:', result);
        return result;
    } catch (err) {
        console.error('Error deleting user:', err);
    }
};

module.exports = {
    createUser,
    getUserByEmail,
    updateUserBalance,
    deleteUser
};
