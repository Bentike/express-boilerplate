let express = require('express');
let app = express();

// How to serve a static file
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

const myFile = __dirname + "/views/index.html";


app.get("/", (req, res) => {
    res.sendFile(myFile);
});
































 module.exports = app;
