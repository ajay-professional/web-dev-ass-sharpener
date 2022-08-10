const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'A4apple_mysql', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
