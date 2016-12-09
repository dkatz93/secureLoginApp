const router = require('express').Router();
const User = require('../models/user');


module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/users routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

router.get('/', (req, res, next) => {
  return User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

//sign up user
router.post('/', (req, res, next)=> {
	User.create({
		email: req.body.email,
		password_hash: req.body.password
	})
	.then((user)=> {
		res.cookie('authentication-token', user.cookie)
		res.send(user)
	})
	.then((res)=>{
		res.send('http://localhost:3001');
	})
})

//login user
router.get('/:userEmail/:password', (req, res, next)=>{

	console.log('COOKIES', req.cookies);
	
	User.findOne({
		where:{
			email: req.params.userEmail,
			password_hash: req.params.password 
		}
	})
	.then(user=>{
		res.redirect('/');
	});


});
