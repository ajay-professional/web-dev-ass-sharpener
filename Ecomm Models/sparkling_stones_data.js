const Sequelize = require('sequelize');
const sequelize = require('../util/Database');
const sparkling_stones_data = sequelize.define('sparkling_stones_data', {
  s_no: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productPrice: {
    type: Sequelize.STRING,
    allowNull: false
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = sparkling_stones_data;