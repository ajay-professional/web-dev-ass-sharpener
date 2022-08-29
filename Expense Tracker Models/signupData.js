const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const SignUp = sequelize.define('signup', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ispremiumuser:{
        type: Sequelize.BOOLEAN,
        allowNull:false
    } 
});

module.exports = SignUp;