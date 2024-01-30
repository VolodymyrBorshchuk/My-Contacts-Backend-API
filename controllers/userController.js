const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hashSync(password, 10);
    console.log("Hashed password:", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User created ${user}`);
    if (user) {
        res.status(200).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }

    res.json({ mesage: "Register the user" })
});

const loginUser = asyncHandler(async (req, res) => {
    res.json({ mesage: "Login user" })
});

const currentUser = asyncHandler(async (req, res) => {
    res.json({ mesage: "Current user" })
});

module.exports = { registerUser, loginUser, currentUser }