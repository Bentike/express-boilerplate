let express = require('express');
let app = express();

// How to serve a static file
app.use("/public", express.static(__dirname + "/public"));

const myFile = __dirname + "/views/index.html";


app.get("/", (req, res) => {
    res.sendFile(myFile);
});

app.get("/json", (req, res) => {
    res.json({
        "message": "json"
    });
})































 module.exports = app;
