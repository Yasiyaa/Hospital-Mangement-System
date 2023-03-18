const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGO;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"HospitalDB"

});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection success !");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
});


const doctorRouter = require("./routes/Doctor.js");
app.use("/doctor",doctorRouter);  