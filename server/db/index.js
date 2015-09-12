var config = require('../../node_modules/config.js');
console.log("password ", config.password); 
var mysql = require('mysql');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", config.password);
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
 /*
var User = sequelize.define('User', {
  username: Sequelize.STRING
});
*/

var Message = sequelize.define('message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
Message.sync().then(function() {
  console.log("Messages table synced"); 
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var databases = {
  messages: Message
  user: User
};

exports.get = function (db, callback) {
  databases[db].findAll().then(callback);
};

exports.post = function (db, data, callback) {

  databases[db].create(data).then(callback);
};
//each data property added individually,
//use underscore uniq
