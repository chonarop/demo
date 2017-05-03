var express = require('express')
var app = express()

function rawBody(req, res, next) {
  req.setEncoding('utf8');
  req.rawBody = '';
  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });
  req.on('end', function(){
    next();
  });
}

app.get('/', function (req, res) {
  var msg = req.query.msg;
  console.log(msg);
  res.setHeader('content-type', 'text/plain');
  if (msg != undefined){
    res.send(msg + " processed. #3");
  } else {
    res.send('Hello World!');
  }

})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = server;
