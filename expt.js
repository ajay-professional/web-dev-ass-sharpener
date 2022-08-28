const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database');

const SignUp = require('./Expense Tracker Models/signupData.js');

const DailyExpenses= require('./Expense Tracker Models/dailyExpensesData.js');

const expRoutes = require('./Expense Tracker Routes/routesExpense.js');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(expRoutes);

DailyExpenses.belongsTo(SignUp);
SignUp.hasMany(DailyExpenses);

sequelize.sync({ force: true }).then(result => {
    console.log(result);
    app.listen(5739);
}).catch(err => console.log(err));