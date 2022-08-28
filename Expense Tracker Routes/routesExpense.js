const express = require('express');

const router = express.Router();

const signupController = require('../Expense Tracker Controllers/controllerExpense.js');

router.post('/addSignUpDetailsInDatabase', signupController.addSignUpDetailsInDatabase);
router.post('/loginByUser', signupController.loginByUser);
router.post('/dailyExpensesData', signupController.authenticateUser, signupController.dailyExpensesData);
router.get('/domDailyExpenses', signupController.authenticateUser, signupController.domDailyExpenses);
router.delete('/deleteExpenseFromDatabase/:dat', signupController.authenticateUser, signupController.deleteExpense);

module.exports=router;