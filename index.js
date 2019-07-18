// Import required pckages
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen('3000');
console.log('Express File server in 3000. Access at /public');