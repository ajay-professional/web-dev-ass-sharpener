const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const totalExpenseData = sequelize.define('totalexpense', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    totalexpense: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    signupEmail:{
        type: Sequelize.STRING,
        allowNull:false
    }
});
module.exports = totalExpenseData;