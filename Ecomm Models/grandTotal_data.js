const Sequelize = require('sequelize');
const sequelize = require('../util/Database');
const grandTotal_data = sequelize.define('grandTotal_data', {
  grandTotal: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
module.exports = grandTotal_data;
