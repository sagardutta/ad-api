"use strict";
var express = require('express');
var models = require('./models.js');
var router = express.Router();              // get an instance of the express Router


router.get('/:id', function(req, res){
  const id = req.params.id;


  models.Admission.findById(id,function(err, admission){
    if(err){
      console.log(err)
      res.json({error:err});
    }else{
      console.log(admission);
      res.json(admission);
    }
  });

})

router.delete('/:id', function(req, res){
  const id = req.params.id;

  models.Admission.findByIdAndRemove(id,function(err){
    if(err){
      console.log(err)
      res.status(500).json({error:err});
    }else{
      console.log();
      res.json();
    }
  });

})


router.put('/:id', function(req, res, next){
  const id = req.params.id;


  const updatedAdmission = req.extractedRequestBody;

  models.Admission.findByIdAndUpdate(id,updatedAdmission,{new:true},function(err, admission){
    if(err){
      next(err);
    }else{
      res.json(updatedAdmission);
    }
  });

})



router.get('/', function(req, res, next){
   console.log('Service GET request');
   var tag = req.query.tag;
   var page = parseInt(req.query.page);
   var limit = parseInt(req.query.limit);
   var createdDate = req.query.date;





   if(page == undefined){
     page = 1;
   }
   if(limit == undefined){
     limit = 10;
   }

   var queryObject = {};
   if(tag){
     queryObject.tags = tag;
   }
   if(createdDate){
     queryObject.createdDate = createdDate;
   }

   console.log('queryObject'+queryObject);

   models.Admission.paginate(queryObject,{page: page, limit :limit},function(err, users){
     if(err){
       next(err);
     }else{
       console.log(users);
       res.json(users);
     }
   });

});

router.post('/', function(req,res,next){

  var tags = req.body.tags;
  var prunedTags = [];
   for (let tag of tags){
     prunedTags.push(tag.trim());
   }
   req.body.tags = prunedTags;
  models.Admission.create(
    req.extractedRequestBody,
    function (err,admissionObject){
      if(err){
        next(err,req,res);
      }else{
          res.json(admissionObject);
      }


  });


});

module.exports = router;
