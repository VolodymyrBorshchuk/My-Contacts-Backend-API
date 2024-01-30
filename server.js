const express = require("express");
const doteenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes.js");
const usertRoutes = require("./routes/userRoutes.js");
const errorHandler = require("./middleware/errorhandler.js");
const connectDb = require("./config/dbConnection.js");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", usertRoutes);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})