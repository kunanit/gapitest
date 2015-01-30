var express = require('express')
var gapitest = require('./gapitest.js')
var app = express()

app.get('/', function (req, res) {
  res.send(myvar);
  console.log(req.query.field);
  gapitest.makegapicall();
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
  
})

var myvar = 'eggs'
