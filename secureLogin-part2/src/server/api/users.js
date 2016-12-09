const router = require('express').Router();
const User = require('../models/user');
const Session = require('../models/session');
const bcrypt = require('bcrypt-nodejs')

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/users routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

// signup
router.post('/', (req, res, next) => {
  // @todo security issue
  return new Promise(function(resolve, reject){
    bcrypt.genSalt(4, function(err, salt){
      bcrypt.hash(req.body.password, salt, null, function(err, hash){
        if(err) reject(err);
        resolve(hash)
      })
    })
  })
  .then((hash)=> {
    return User.create({
      email: req.body.email,
      password: hash
    })
  })
    .then(user => Session.add(user.id))
    .then(sessionId => {
      res.cookie('sessionId', sessionId);
      res.json({});
    })
    .catch(next);
})

router.get('/', (req, res, next) => {
  return User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

