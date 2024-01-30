let express = require('express');
let app = express();

const myFile = __dirname + "/views/index.html";


app.get("/", (req, res) => {
    res.sendFile(myFile);
});
































 module.exports = app;
