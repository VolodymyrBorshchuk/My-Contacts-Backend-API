

const getContacts = async (req, res) => {
    console.log('sdgj')
    res.status(200).json({ message: "Get all contacts" })
};

const createContact = async (req, res) => {
    console.log('sdgj', req.body);
    const { name, email, number } = req.body;
    if (!name || !email || !body) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.status(200).json({ message: "Create contact" })
};

const getContact = async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
}

const updateContact = async (req, res) => {
    console.log('sdgj')
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
}
const deleteContact = async (req, res) => {
    console.log('sdgj')
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }