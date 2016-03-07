var express = require('express');
var models = require('./models.js');
var router = express.Router();              // get an instance of the express Router



router.get('/', function(req, res){
   console.log('Service GET request');
   var tag = req.query.tag;
   models.Admission.find({tags:tag},function(err, users){
     if(err){
       console.log(err)
       res.json({error:err});
     }
     res.json(users);
   });

});

router.post('/', function(req,res){

  console.log( req.body);

  models.Admission.create(
    req.body,
    function (err,admissionObject){
    if(err){
      console.log(err);
      res.json({error:err});
    }else{
      res.json(admissionObject);
    }
  });


});

module.exports = router;
