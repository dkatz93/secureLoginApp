const crypto = require('crypto');
const sessionStore = {};

function randomString() {
  return new Promise(function(resolve, reject) {
    crypto.randomBytes(20, function(err, buffer) {
      if(err) { return reject(err); }
      resolve(buffer.toString('hex'))
    })
  });
}

module.exports = {
  add: function(userId) {
    return randomString()
      .then(gobeldygook => {
        sessionStore[gobeldygook] = userId;
        return gobeldygook;
      })
  },
  findUserId: function(gobeldygook) {
    return sessionStore[gobeldygook];
  },
  remove: function(gobeldygook) {
    delete sessionStore[gobeldygook];
  }
}





