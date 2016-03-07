module.exports = function extractRequest(req, res, next){
  var category = req.body.category;
  var extractedRequestBody = {};
  if(req.method === 'POST' && category.toUpperCase() === 'admission'.toUpperCase()){


      extractedRequestBody.qualification = req.body.qualification;
      extractedRequestBody.minAge = req.body.minAge;
      extractedRequestBody.maxAge = req.body.maxAge;

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
