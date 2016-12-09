const db = require('./src/server/models');

const User = db.models.user;
db.sync({ force: true })
  .then(() => {
    console.log('Creating User\n');
    return User.create(
      {
        email: 'bob@loblaw.law.blog',
        password: '123456',
      });
  })
  .then(() => {
    console.log('DB synced with one user');
    process.exit(1);
  });
