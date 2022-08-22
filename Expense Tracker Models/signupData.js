const Sequelize = require('sequelize');

const sequel = require('../util/database');
const sequelize = sequel.second;
const SignUp = sequelize.define('signup', {
    username: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = SignUp;