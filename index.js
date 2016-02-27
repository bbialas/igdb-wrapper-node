var config = require('./config'),
    request = require('request');

var makeRequest = function (callback) {
    request(config.endpoint, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body)); // Show the HTML for the Google homepage.
            callback();
        } else {
            throw response.statusCode;
        }
    })
};

module.exports = {
   platforms: {
       get: function(params, callback) {
           makeRequest(callback);
       },
       meta: {
           get: function(callback) {

           }
       },
       games: function(params, callback) {

       }
   }
};


