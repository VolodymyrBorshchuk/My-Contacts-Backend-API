const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const { response } = require("express");

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
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.name,
                email: user.email,
                id: user.id,
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        )
        res.status(200).json({ accessToken })
    } else {
        res.status(401);
        throw new Error("Password is not valid!")
    }
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
});

module.exports = { registerUser, loginUser, currentUser }