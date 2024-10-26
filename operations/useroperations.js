const User = require('./models/user');

const createUser = async (name, email, password) => {
    const newUser = new User({ name, email, password });
    try {
        await newUser.save();
        console.log('User created successfully:', newUser);
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

module.exports = { createUser };

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        console.log('User found:', user);
        return user;
    } catch (error) {
        console.error('Error finding user:', error);
    }
};

module.exports = { findUserByEmail };

const updateUser = async (email, updatedData) => {
    try {
        const user = await User.findOneAndUpdate({ email }, updatedData, { new: true });
        console.log('User updated:', user);
        return user;
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

module.exports = { updateUser };

const deleteUser = async (email) => {
    try {
        await User.findOneAndDelete({ email });
        console.log('User deleted');
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

module.exports = { deleteUser };