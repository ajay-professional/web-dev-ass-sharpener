const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/Database');

const storeRoutes=require('./Ecomm Routers/Store');

const cors = require('cors');

let i=0;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(storeRoutes);

sequelize.sync().then(result=>{
    console.log(result);
    app.listen(6999);
}).catch(err=>console.log(err));
