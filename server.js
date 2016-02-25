var express = require('express');
var app = express();
var mongoose = require('mongoose');


var bodyParser = require('body-parser');



mongoose.connect(process.ENV.MONGOLAB_URI); 

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router



router.get('/', function(req, res){
   console.log('Service GET request');
   res.json({name:'hello world!!!'});
});

app.use('/api', router);
app.listen(port);
console.log("app started on:"+ port);
