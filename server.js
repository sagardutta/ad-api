var express = require('express');
var app = express();
var mongoose = require('mongoose');


var bodyParser = require('body-parser');



mongoose.connect(process.env.MONGOLAB_URI);

var schema = new mongoose.Schema({name:String,tags:Array, image:String});

var User = mongoose.model('User',schema);



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

router.post('/', function(req,res){

  console.log('Posting to the API');

  User.create({name:req.body.name,tags:req.body.tags}, function (err, user){
    if(err){
      console.log(err);
      res.json({error:err});
    }
    res.json(user);
  });


});

app.use('/api', router);
app.listen(port);
console.log("app started on:"+ port);
