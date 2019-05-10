const express = require('express');

var app = express();
const port = process.env.PORT || 3000;
// middleware
// __dirname - stores path to directory
app.use(express.static(__dirname + '/assets'));

app.get('/',(req,res)=>{
  res.send('hello Express');
});

app.post('/',(req,res)=>{
  console.log("In post method");
  res.send('hello Express');
});
app.listen(port);
