const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');
const postsRoutes = require('./posts');
const sessionsRoutes = require('./sessions');

router.use((req, res, next) => {
  console.log('got to the /api route');
  // you can use this for custome middleware
  next();
})

router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);

router.use('/posts', postsRoutes);


module.exports = router;
