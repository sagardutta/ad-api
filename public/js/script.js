
var uploadedFile ;
var max_width = 620;
var max_height = 620;



function resizeMe(img) {
  var preview = document.getElementById('preview');


  var canvas = document.createElement('canvas');

  var width = img.width;
  var height = img.height;

  // calculate the width and height, constraining the proportions
  if (width > height) {
    if (width > max_width) {
      //height *= max_width / width;
      height = Math.round(height *= max_width / width);
      width = max_width;
    }
  } else {
    if (height > max_height) {
      //width *= max_height / height;
      width = Math.round(width *= max_height / height);
      height = max_height;
    }
  }

  // resize the canvas and draw the image data into it
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);

  preview.appendChild(canvas); // do the actual resized preview
  var resized = canvas.toDataURL("image/jpeg",0.5);
  return resized; // get the data from canvas as 70% JPG (can be also PNG, etc.)

}


function readFile(){
//  var preview = document.querySelector('img');
 var file    = document.querySelector('input[type=file]').files[0];
 var reader  = new FileReader();

 reader.onload =  function (event) {


   //uploadedFile = reader.result;
   //console.log(event.target.result);
  //  var blob = new Blob([event.target.result]);
  //  window.URL = window.URL || window.webkitURL;
   //
  //  var blobURL = window.URL.createObjectURL(blob);

   var image = new Image();


   image.onload = function(){

      var resized = resizeMe(image);
      // var newinput = document.createElement("input");
      // newinput.type = 'hidden';
      // newinput.name='newimage';
      // newinput.value= resized;

      uploadedFile = resized;
      console.log(uploadedFile);
   }
   image.src = event.target.result;

 };

 if (file) {
   reader.readAsDataURL(file);
 }
}

//
// category: String,
// qualificiation: String,
// minAge: Number,
// maxAge:Number,
// source: String,
// applicationProcess: String,
// selectionProcess: String,
// notificationDate: Date,
// lastDate: Date,
// linkToSource: String,
// contactDetails: String,
// image: String


$( "#myForm" ).submit(function( event ) {

console.log("submit clicked");

 event.preventDefault();
  var $inputs = $('#myForm :input');

      // not sure if you wanted this, but I thought I'd add it.
      // get an associative array of just the values.
      var values = {};

      values["category"] = $('#category').val();
      values["qualificiation"] = $('#qualificiation').val();
      values["minAge"] = $('#minAge').val();
      values["maxAge"] = $('#maxAge').val();
      values["source"] = $('#source').val();
      values["applicationProcess"] = $('#applicationProcess').val();
      values["selectionProcess"] = $('#selectionProcess').val();
      values["notificationDate"] = $('#notificationDate').val();
      values["lastDate"] = $('#lastDate').val();
      values["linkToSource"] = $('#linkToSource').val();
      values["contactDetails"] = $('#contactDetails').val();
    //    values[""] = $('#').val();
      values["image"] = uploadedFile;
      values["tags"] = $('#tags').val().split(',');


      var posting = $.post('/api',values);

      posting.done(function(data){
          console.log(data);
      });
  event.preventDefault();
});
