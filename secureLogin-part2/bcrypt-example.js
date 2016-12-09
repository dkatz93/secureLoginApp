const bcrypt = require('bcrypt-nodejs');

bcrypt.genSalt(4, function(err, salt) {
  console.log(salt);
  bcrypt.hash('super secret', salt, null, function(err, hash) {
    console.log(hash);
  })
})

bcrypt.compare(
  'super secrett',
  '$2a$04$6V5ZvUF.SBn9VcpEX0r1QOxCxw7cyBkaOq4m0q.HBTSV0PxS97a1y',
  function(err, same) { console.log(same) })