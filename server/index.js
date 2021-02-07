var express = require('express');
var db = require('db');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(6060, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})