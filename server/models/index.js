var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      db.get('messages', callback);
    }, // a function which produces all the messages
    post: function (data, callback) {
      db.post('messages', data, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


