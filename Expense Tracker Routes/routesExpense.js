const express = require('express');

const router = express.Router();

const signupController = require('../Expense Tracker Controllers/controllerExpense.js');

router.post('/addSignUpDetailsInDatabase', signupController);

module.exports=router;