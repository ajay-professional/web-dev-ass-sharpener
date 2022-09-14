const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const groupChatMsgs = sequelize.define('groupChatMsgs', {
    msgs: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type:Sequelize.STRING,
        allowNull:false
    },
    signupEmail:{
        type: Sequelize.STRING,
        allowNull:false
    }
});
module.exports = groupChatMsgs;
