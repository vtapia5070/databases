var config = require('../../node_modules/config.js');
var mysql = require('mysql');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", config.password);

exports.User = sequelize.define('users', {
  username: Sequelize.STRING,
});
exports.Message = sequelize.define('messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

exports.User.hasMany(exports.Message);
exports.Message.belongsTo(exports.User);

exports.User.sync().then(function(){
  console.log("Users table has synced");
});

exports.Message.sync().then(function() {
  console.log("Messages table synced"); 
});

