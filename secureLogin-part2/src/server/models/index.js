const db = require('./db');

const User = require('./user');
const Post = require('./post');

User.hasMany(Post);
Post.belongsTo(User);
// add more model log (relationships) here

module.exports = db;