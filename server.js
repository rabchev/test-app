/*jslint plusplus: true, devel: true, nomen: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var express = require('express');
var brackets = require('node-brackets');

var app = express();
app.use('/brackets', brackets(["./views", "./styles", "./controlers", "./scripts", "./images"]));

app.get('/*', function (req, res) {
    "use strict";
    
    res.send('Hello World<br>Yahooooo!!');
});

app.listen(3000);

console.log('Listening on port 3000');