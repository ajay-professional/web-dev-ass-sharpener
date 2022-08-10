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

// app.use('/:dat', (req, res, next) => {
//     let prodval=req.params.dat;
//     db.execute(`DELETE FROM sparkling_stones_data WHERE item_name='${prodval}'`).then((response2) => {
//         console.log(response2);
//         i=i-1;
//     }).catch((err) => {
//         console.log(err);
//     });

// });
sequelize.sync().then(result=>{
    console.log(result);
    app.listen(6999);
}).catch(err=>console.log(err));
