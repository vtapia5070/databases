var models = require('../models');
var bluebird = require('bluebird');

var sendResponse = function(res, data, status, err) {
  status = status || 200;
  res.status(status).send(data);
  if(err){
    console.log("There was an error: " + err); 
  } else {
    console.log("This is data :"+ data);
  }
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("get files"); 
      //query models
      models.messages.get(function(data){
        //console.log("this is data before response: ", data);
        sendResponse(res, {results: data});
      });
      //respond with message
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, function () {
        sendResponse(res);
      });
      //parse the post
      //send that down to models
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


