const express = require('express');
const bodyParser = require('body-parser'),
    path = require('path'),
    CryptoJS = require("crypto-js");
var app = express();
var consumerSecret = process.env.CANVAS_CONSUMER_SECRET;

const port = process.env.PORT || 3000;
// middleware
// __dirname - stores path to directory
app.use(express.static(__dirname + '/assets'));

//https://rajvakati.com/2017/10/19/salesforce-node-js-canvas-signed-request/

// app.use(express.static(path.join(__dirname, '/')));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/assets');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended: true }));

app.get('/', function (req, res) {
  res.render('index');
});
app.post('/', function (req, res) {
  var signed_req = req.body.signed_request;
  var hashedContext = signed_req.split('.')[0];
  var context = signed_req.split('.')[1];
  var hash = CryptoJS.HmacSHA256(context, consumerSecret);
  var b64Hash = CryptoJS.enc.Base64.stringify(hash);
  if (hashedContext === b64Hash) {
    // You could save this information in the user session if needed
    res.render('index', {req: req.body, res: res.data, context:context, consumerSecret:consumerSecret});
  } else {
    res.send("authentication failed");
  }
});
app.listen(port);
