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
      models.messages.get(function (results){
        sendResponse(res, results);
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function (results) {
        console.log("user is ", results);
        sendResponse(res);
      });
    }
  },
  users: {
    get: function (req, res) {
      models.users.get(function (results){
        sendResponse(res, results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function (results){
        sendResponse(res);
      });
    }
  }
};


