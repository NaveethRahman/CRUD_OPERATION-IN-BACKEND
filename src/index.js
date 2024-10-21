const cors = require ("cors")
const express = require("express");
const connection = require("./config/connection")
const router = require("../router")
require("dotenv").config();



const app = express();
app.use(express.json());
app.use(cors());
connection()
app.use(router)


let port = 4000;

app.use(cors({
    origin:"http://localhost:3000",
    methods:["OPTIONS","POST","GET","PUT","DELETE"]
}))


// app.use("/" ,(req, res) => res.send("I'm Alive"));


app.listen(port, () => {
    console.log("server is running on : ",port);
})
