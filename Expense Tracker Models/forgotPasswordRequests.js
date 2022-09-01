const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const forgotPasswordRequests = sequelize.define('forgotPasswordRequests', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    signupEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull:false
    }
});
module.exports = forgotPasswordRequests;