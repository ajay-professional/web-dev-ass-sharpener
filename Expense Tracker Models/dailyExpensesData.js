const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const dailyExpenses = sequelize.define('dailyExpenses', {
    id:{
        type: Sequelize.INTEGER,
        // allowNull:false,
        autoIncrement: true,
        primaryKey:true,
    },
    expenseAmount: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        // allowNull: false,
    },
    categoryDetail: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    signupEmail:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = dailyExpenses;