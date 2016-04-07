module.exports = function extractRequest(req, res, next){
  var category = req.body.category;
  var extractedRequestBody = {};


  if((req.method === 'POST' || req.method === 'PUT')  && category.toUpperCase() === 'admission'.toUpperCase()){


      extractedRequestBody.qualification = req.body.qualification;
      extractedRequestBody.age = req.body.age;
      extractedRequestBody.notificationName = req.body.notificationName;
      extractedRequestBody.source = req.body.source;
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
