const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser =  require("body-parser");
const dotenv = require("dotenv");

dotenv.config();


//routers
const connectToMongo = require("./config");

 //database connent
 connectToMongo();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit:100000}));

app.use(cors());



const PORT = process.env.PORT || 8800;

app.listen(PORT, () =>{
    console.log("Backend server is  running ")
});