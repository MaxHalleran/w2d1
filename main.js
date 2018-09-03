//initialize requests
const request = require('request');
const fs = require('fs');

//Get request at https://sytantris.github.io/http-examples/future.jpg
request.get('https://sytantris.github.io/http-examples/future.jpg')

       //Safeguard against an error
       .on('error', function(err) {
        throw err;
       })

       //on initial response back from the server
       //respond with the status code, message and the content type.
       //And let the user know that the image is downloading
       .on('response', function (response) {
        console.log("Response Status Code: ", response.statusCode);
        console.log("Response status Message: ", response.statusMessage);
        console.log("Response headers: ", response.headers['content-type']);
        console.log("Downloading image...");
       })

       //When the image has been downloaded, let the user know
       .on('end', function () {
        console.log("Download Complete.")
       })

       //create a file with the image inside of it
       .pipe(fs.createWriteStream('./future.jpg'));