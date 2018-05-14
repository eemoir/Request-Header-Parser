// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  console.log("This is working");
  var ipaddress = req.ip;
  var language = req.acceptsLanguages()[0];
  var software = req.get('User-Agent');
  software = software.match(/\(([^)]+)\)/)[1];
  res.json({ipaddress: ipaddress, language: language, software: software});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
