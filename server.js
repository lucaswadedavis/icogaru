var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
});

app.get('/:width', function(req, res) {
  res.type('application/json');
  res.send({a: 10});
});

app.listen(process.env.PORT || 3000);

