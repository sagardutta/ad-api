

module.exports = function extractRequest(req, res, next){
  var category = req.body.category;
  var extractedRequestBody = {};



  if((req.method === 'POST' || req.method === 'PUT')  && category.toUpperCase() === 'admission'.toUpperCase()){


      extractedRequestBody.qualification = req.body.qualification;
      var age = req.body.age;
      var duration = req.body.duration;

      extractedRequestBody.age = (typeof age !== 'undefined' ? age : 0);
      extractedRequestBody.notificationName = req.body.notificationName;
      extractedRequestBody.source = req.body.source;
      extractedRequestBody.duration = (typeof duration !== 'undefined'? duration : 0 );
      extractedRequestBody.contactDetails = req.body.contactDetails;
      extractedRequestBody.selectionProcess = req.body.selectionProcess;
      extractedRequestBody.applicationProcedure = req.body.applicationProcedure;


      extractedRequestBody.tags = req.body.tags;
      extractedRequestBody.requiredCertificates = req.body.requiredCertificates;
      extractedRequestBody.questionPaperLanguages = req.body.questionPaperLanguages;
      extractedRequestBody.lastDate = req.body.lastDate;
      extractedRequestBody.notificationDate = req.body.notificationDate;
      extractedRequestBody.entranceExamDate = req.body.entranceExamDate;



      //
      // source: String,
      // applicationProcess: String,
      // selectionProcess: String,
      // notificationDate: Date,
      // lastDate: Date,
      // linkToSource: String,
      // contactDetails: String
      req.extractedRequestBody = extractedRequestBody;
  }
    next();
}
