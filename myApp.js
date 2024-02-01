let express = require('express');
let app = express();

// this allow access to .env environment variables
require('dotenv').config();

// How to serve a static file
app.use("/public", express.static(__dirname + "/public"));

// How to implement root level middleware
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

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
});

// Adding middleware to a specific route and chaining middleware
// app.get("/now", (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, (req, res) => {
//     res.send({
//         time: req.time
//     });
// })


app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      let time = req.time.split('')
      let newTime = [];
      for(let i =0; i < time.length; i++){
         if(i != 17 && i != 30) newTime.push(time[i]);
         if(i == 17) newTime.push(3);
         else if(i == 30) newTime.push(1);
      }
      let currentTime = newTime.join("");
      req.time = currentTime;
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );






























 module.exports = app;
