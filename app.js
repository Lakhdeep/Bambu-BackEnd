var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

mongoose.connect('mongodb://user:password12@ds239071.mlab.com:39071/bambudb');
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

var profiles = require('./profiles.js')(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port: ', port);
