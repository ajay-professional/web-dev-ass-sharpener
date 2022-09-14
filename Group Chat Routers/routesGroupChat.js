const express = require('express');

const router = express.Router();

const signupController = require('../Group Chat Controller/controllerGroupChat.js');
router.post('/addSignUpDetailsInDatabase', signupController.addSignUpDetailsInDatabase);
router.post('/groupChatMessage', signupController.authenticateUser, signupController.groupChatMessage);
router.post('/loginByUser', signupController.loginByUser);
module.exports = router;