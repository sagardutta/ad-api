var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect(process.env.MONGOLAB_URI);
var AdSchema = new mongoose.Schema({
  category: String,
  notificationName: String,
  qualification: String,

  age:Number,
  source: String,
  applicationProcedure: String,
  selectionProcess: String,
  notificationDate: Date,
  lastDate: Date,



  createdDate: Date,
  lastUpdatedDate: Date,
  duration: Number,
  linkToSource: String,
  contactDetails: String,
  image: String,
  tags:[String]

});

AdSchema.plugin(mongoosePaginate);

var JobSchema = AdSchema.extend({
  jobMelaDetails:String,
  jobDetails:String
},{collection:'jobs'});

var AdmissionSchema = AdSchema.extend({

  entranceExamDate: Date,
  requiredCertificates: [String],
  questionPaperLanguages: [String]

}, {collection:'admissions'});

var Ad = mongoose.model('Ad',AdSchema);
var Job = mongoose.model('Job', JobSchema);
var Admission = mongoose.model('Admission', AdmissionSchema);

module.exports = {
    Admission: Admission
  }

// var admission = new Admission({
//   category:'admission',
//   qualification:'PG Diploma',
//   minAge:21,
//   maxAge:29,
//   source:'SAKSHI',
//   notificationDate: new Date(),
//   lastDate: new Date(2016,5,24),
//   contactDetails: 'http://pacific-rim.com'
// });
//
// admission.save(function(err){
//   if(err){
//       console.log(err)
//   }
// });
//
// Admission.find({},function(err, admissions){
//    console.log(admissions);
// });
