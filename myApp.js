let express = require('express');
let app = express();

// this allow access to .env environment variables
require('dotenv').config();

// How to serve a static file
app.use("/public", express.static(__dirname + "/public"));

const myFile = __dirname + "/views/index.html";

// Use res.sendFile to send a file
app.get("/", (req, res) => {
    res.sendFile(myFile);
});

// Use res.json to send a JSON format data
app.get("/json", (req, res) => {
    let jsonFile;
    process.env.MESSAGE_STYLE == "uppercase" ?
     jsonFile = {"message": "HELLO JSON"} :
     jsonFile = {"message": "Hello json"};
    res.json(jsonFile);
})































 module.exports = app;
