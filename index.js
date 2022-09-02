const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = 4000

mongoose.connect("mongodb+srv://electiva1:electiva1@cluster0.dolot0f.mongodb.net/?retryWrites=true&w=majority"
).then(() => 
    console.log("Database conection succesfull")
).catch(() => 
    console.log("Database conection error"));

app.listen(port, () =>{console.log('Conect with the port ', port);})