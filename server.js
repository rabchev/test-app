var express = require('express');
var brackets = require('node-brackets');

var app = express();
app.use('/brackets', brackets());

app.get('/*', function(req, res){
  res.send('Hello World');
});

app.listen(3000);

console.log('Listening on port 3000');