var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var msg = req.query.msg;
  console.log(msg);
  if (msg != undefined){
    res.send(msg + " processed.");
  } else {
    res.send('Hello World!');
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
