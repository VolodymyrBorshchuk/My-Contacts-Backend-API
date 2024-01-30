const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
    res.jsonres.json({ mesage: "Register the user" })
});
const loginUser = asyncHandler(async (req, res) => {
    res.json({ mesage: "Login user" })
});
const currentUser = asyncHandler(async (req, res) => {
    res.json({ mesage: "Current user" })
});

module.exports = { registerUser, loginUser, currentUser }