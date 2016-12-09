const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/secureapp', {
  logging(query) {
    console.log('QUERY >>>>>>>\n', query, '\n-----------------\n');
  },
});

module.exports = db;
