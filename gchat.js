const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database');

//const SignUp = require('./Group Chat Models/signupData.js');

const expRoutes = require('./Group Chat Routers/routesGroupChat.js');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(expRoutes);

// monthlyExpenseData.belongsTo(SignUp);
// SignUp.hasMany(monthlyExpenseData);

// DailyExpenses.belongsTo(SignUp);
// SignUp.hasMany(DailyExpenses);

// SignUp.hasMany(forgotPasswordRequests);
// forgotPasswordRequests.belongsTo(SignUp, { constraints: true, onDelete: 'CASCADE' });

// SignUp.hasMany(Order);
// Order.belongsTo(SignUp);

// SignUp.hasOne(totalExpenseData);
// totalExpenseData.belongsTo(SignUp);

sequelize.sync({force:true}).then(result => {
    console.log(result);
    app.listen(5040);
}).catch(err => console.log(err));