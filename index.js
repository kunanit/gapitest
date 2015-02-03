var express = require('express')
var gapitest = require('./gapitest.js')
var app = express()
var myvar = 'eggs'
app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {
  res.send(myvar);
  // console.log(req.query.field);
  // gapitest.makegapicall();
})

var server = app.listen(app.get('port'), function() {
  console.log("Node app is listening on " + app.get('port'));
});