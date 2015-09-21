var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      db.Message.findAll({include: [db.User]})
        .then(function(data){
          callback(data);
        })
    },
    post: function (data, callback) {
      db.User.findOrCreate({where: {username: data.username}})
        .then(function(user){
          db.Message.create({text: data.text, roomname: data.roomname, userId: user[0].dataValues.id});
          callback(user);
        })
    } 
  },
  users: {
    get: function (callback) {
      db.User.findAll()
        .then(function(results) {
          callback(results);
        })
    },
    post: function (data, callback) {
      db.User.findOrCreate({where: {username: data.username}})
        .then(function(user){
          callback();
        })
    }
  }
};
