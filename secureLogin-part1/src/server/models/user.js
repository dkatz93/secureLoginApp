const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password_hash: {
  	type: Sequelize.STRING
  },
  cookie: {
  	type: Sequelize.STRING
  }
},

{
	hooks: {
		beforeCreate: function(user){
			const email = user.getDataValue('email');
			user.setDataValue('cookie', email.slice(0,4));
		}
	}
}


);

