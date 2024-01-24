const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
    console.log('sdgj')
    res.status(200).json({ message: "Get all contacts" })
});

const createContact = asyncHandler(async (req, res) => {
    console.log('sdgj', req.body);
    const { name, email, number } = req.body;
    if (!name || !email || !body) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.status(200).json({ message: "Create contact" })
});

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
});

const updateContact = asyncHandler(async (req, res) => {
    console.log('sdgj')
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
});

const deleteContact = asyncHandler(async (req, res) => {
    console.log('sdgj')
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }