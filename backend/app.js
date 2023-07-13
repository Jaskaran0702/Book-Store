const express = require('express');
const router = require("./routes/book-routes.js")
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) //local host

mongoose.connect("mongodb://admin:FOKU7Flky9kLsVO1@ac-11roh7t-shard-00-00.odnq1n8.mongodb.net:27017,ac-11roh7t-shard-00-01.odnq1n8.mongodb.net:27017,ac-11roh7t-shard-00-02.odnq1n8.mongodb.net:27017/?ssl=true&replicaSet=atlas-r1yqhh-shard-0&authSource=admin&retryWrites=true&w=majority").then(() => console.log("Connected to database"))
.then(() => {
    app.listen(5000);
}).catch((error) => console.log(error));


//FOKU7Flky9kLsVO1