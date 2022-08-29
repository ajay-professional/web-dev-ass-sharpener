const express = require('express');

const router = express.Router();

const signupController = require('../Expense Tracker Controllers/controllerExpense.js');
const razorpayController = require('../Expense Tracker Controllers/controllerRazorpay.js');
router.post('/addSignUpDetailsInDatabase', signupController.addSignUpDetailsInDatabase);
router.post('/loginByUser', signupController.loginByUser);
router.post('/dailyExpensesData', signupController.authenticateUser, signupController.dailyExpensesData);
router.get('/domDailyExpenses', signupController.authenticateUser, signupController.domDailyExpenses);
router.delete('/deleteExpenseFromDatabase/:dat', signupController.authenticateUser, signupController.deleteExpense);
router.get('/purchase/premiummembership', signupController.authenticateUser, razorpayController.purchasepremium);
router.post('/purchase/updatetransactionstatus', signupController.authenticateUser, razorpayController.updateTransactionStatus);
module.exports = router;