const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequel = require('./util/database');

const expRoutes = require('./Expense Tracker Routes/routesExpense.js');

const sequelize = sequel.second;


const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expRoutes);



sequelize.sync().then(result => {
    console.log(result);
    app.listen(5739);
}).catch(err => console.log(err));