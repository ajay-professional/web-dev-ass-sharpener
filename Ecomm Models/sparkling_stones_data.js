const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const sparkling_stones_data = sequelize.define('sparkling_stones_data', {
  id: {
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