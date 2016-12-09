const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');

router.use((req, res, next) => {
  console.log('got to the /api route');
  // you can use this for custome middleware
  next();
})

router.use('/users', usersRoutes);

module.exports = router;
