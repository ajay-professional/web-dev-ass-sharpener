const express = require('express');

const router = express.Router();

const signupController = require('../Group Chat Controller/controllerGroupChat.js');
router.post('/addSignUpDetailsInDatabase', signupController.addSignUpDetailsInDatabase);
router.post('/groupChatMessage', signupController.authenticateUser, signupController.groupChatMessage);
router.post('/loginByUser', signupController.loginByUser);
router.get('/domValidateEmailId', signupController.authenticateUser, signupController.domValidateEmailId);
router.get('/domChatMessage', signupController.authenticateUser, signupController.domChatMessage);
router.get('/domAllChatMessages', signupController.authenticateUser, signupController.domAllChatMessages);
module.exports = router;