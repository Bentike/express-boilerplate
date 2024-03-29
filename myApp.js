let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// this allow access to .env environment variables
require('dotenv').config();

// How to serve a static file
app.use("/public", express.static(__dirname + "/public"));

// Setup body-parser to parse POST requests
app.use(bodyParser.urlencoded({extended: false}));

// How to implement root level middleware that works on all route
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

const getTimeMiddleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

//Adding middleware to a specific route and chaining middleware
app.get("/now", getTimeMiddleware,  (req, res) => {
     res.send({
        currentTime: req.time
     });
});


  // Route params
  app.get("/:word/echo", (req, res) => {
      res.send({
        echo: req.params.word
      });
  })

  // Getting data through query
  app.get("/name", (req, res) => {
    let {first: firstname, last: lastname} = req.query;
    res.json({
        name: `${firstname} ${lastname}`
    });
  });

  app.post("/name", (req, res) => {
    let {first: firstname, last: lastname} = req.body;
    res.json({
        name: `${firstname} ${lastname}`
    })
  })




























 module.exports = app;
