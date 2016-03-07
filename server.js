var express = require('express');
var app = express();
var mongoose = require('mongoose');
var admissionRoutes = require('./routes.js');
var extractRequest = require('./middleware.js');


var bodyParser = require('body-parser');


//mongodb://192.168.99.100:27017/test'

//mongoose.connect(process.env.MONGOLAB_URI);

var schema = new mongoose.Schema({name:String,tags:Array, image:String});

var User = mongoose.model('User',schema);


app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(express.static('public'));

app.use(extractRequest);

app.all('/api', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
 });


var port = process.env.PORT || 3000;        // set our port



app.use('/api', admissionRoutes);
app.listen(port);
console.log("app started on:"+ port);
