const router = require('express').Router();
const Post = require('../models/post');
const Session = require('../models/session');

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/posts routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

// signup
router.post('/', (req, res, next) => {
  // @todo security issue
  return Post.create(req.body)
    .then(post => res.json(post))
    .catch(next);
})

router.get('/', (req, res, next) => {
  return Post.findAll({
    where: {
      userId: Session.findUserId(req.cookies.sessionId)
    }
  })
    .then((posts) => {
      res.json(posts);
    })
    .catch(next);
});






