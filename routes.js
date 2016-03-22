"use strict";
var express = require('express');
var models = require('./models.js');
var router = express.Router();              // get an instance of the express Router


router.get('/:id', function(req, res){
  const id = req.params.id;
  console.log(id);

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


router.put('/:id', function(req, res){
  const id = req.params.id;
  console.log('update issued on '+id);
  const updatedAdmission = req.body;

  models.Admission.findByIdAndUpdate(id,updatedAdmission,function(err, admission){
    if(err){
      console.log(err)
      res.json({error:err});
    }else{
      console.log(updatedAdmission);
      res.json(updatedAdmission);
    }
  });

})



router.get('/', function(req, res){
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

   console.log(queryObject);

   models.Admission.paginate(queryObject,{page: page, limit :limit},function(err, users){
     if(err){
       console.log(err)
       res.json({error:err});
     }

     console.log(users);
     res.json(users);
   });

});

router.post('/', function(req,res){

  console.log( req.body);
  var tags = req.body.tags;
  var prunedTags = [];
   for (let tag of tags){
     prunedTags.push(tag.trim());
   }
   req.body.tags = prunedTags;
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
