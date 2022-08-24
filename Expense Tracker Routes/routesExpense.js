const express = require('express');

const router = express.Router();

const signupController = require('../Expense Tracker Controllers/controllerExpense.js');

router.post('/addSignUpDetailsInDatabase', signupController.addSignUpDetailsInDatabase);
router.post('/loginByUser', signupController.loginByUser);

module.exports=router;