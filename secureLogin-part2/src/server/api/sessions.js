const router = require('express').Router();
const User = require('../models/user');
const Session = require('../models/session');
const bcrypt = require('bcrypt-nodejs');

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/sessions routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

// login
router.post('/', (req, res, next) => {
  // @todo security issue
  

  return User.findOne({ where: {
    email: req.body.email
  }})
  .then(user => {
    if(!user) {
      var err = new Error('Unauthorized');
      err.status = 401;
      throw err;
    }
    else {

      return new Promise(function(resolve, reject){

        bcrypt.compare(req.body.password, user.password, function(err, same){
          if(same)
             resolve(Session.add(user.id));
          else {
            var err = new Error('Unauthorized');
            err.status = 401;
            reject(err);
          }
        })
      })
    }
  })
  .then(sessionId => {
    res.cookie('sessionId', sessionId);
    res.json({});
  })
  .catch(next)
})






