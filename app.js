var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.get('/name', function(req, res) {
    res.send("My name is Babatunde Ojo");
});

app.listen(4000);