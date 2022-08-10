const Sequelize = require('sequelize');
const sequelize = require('../util/Database');
const sparkling_stones_data = sequelize.define('sparkling_stones_data', {
  s_no: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  item_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
module.exports = sparkling_stones_data;