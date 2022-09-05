const express = require('express');

const router = express.Router();

const signupController = require('../Expense Tracker Controllers/controllerExpense.js');
const razorpayController = require('../Expense Tracker Controllers/controllerRazorpay.js');
router.post('/addSignUpDetailsInDatabase', signupController.addSignUpDetailsInDatabase);
router.post('/loginByUser', signupController.loginByUser);
router.post('/dailyExpensesData', signupController.authenticateUser, signupController.dailyExpensesData);
router.get('/domDailyExpenses', signupController.authenticateUser, signupController.domDailyExpenses);
router.get('/domTotalExpenses', signupController.authenticateUser, signupController.domTotalExpenses);
router.delete('/deleteExpenseFromDatabase/:dat', signupController.authenticateUser, signupController.deleteExpense);
router.get('/purchase/premiummembership', signupController.authenticateUser, razorpayController.purchasepremium);
router.get('/leaderboardUserExpenses', signupController.authenticateUser, signupController.leaderboardUserExpenses);
router.get('/monthlyUserExpenses', signupController.authenticateUser, signupController.monthlyUserExpenses);
router.get('/leaderboardMonthlyExpenses', signupController.authenticateUser, signupController.leaderboardMonthlyExpenses);
router.post('/purchase/updatetransactionstatus', signupController.authenticateUser, razorpayController.updateTransactionStatus);
router.post('/password/forgotpassword', signupController.forgotPasswordController);
router.get('/password/resetpassword/:uuid', signupController.resetPasswordController);
router.get('/password/updatepassword/:uuid2', signupController.updatePasswordController);
router.post('/monthlyExpenseData', signupController.authenticateUser, signupController.monthlyExpenseData);
module.exports = router;