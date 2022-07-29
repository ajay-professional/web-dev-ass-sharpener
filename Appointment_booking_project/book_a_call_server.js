const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

const db = require('../util/Database');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/addUser', (req, res, next) => {
    const name2 = req.body.name;
    const email2 = req.body.email;
    const phone2 = req.body.phone_no;
    const date2 = req.body.date;
    const time2 = req.body.time;

    db.execute('INSERT INTO users(name, email, phone_no, date, time) VALUES(?, ?, ?, ?, ?)', [name2, email2, phone2, date2, time2]).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
});
app.get('/domloaded', (req, res, next)=>{
    db.execute('SELECT * FROM users').then((response) => {
        console.log(response[0]);
        res.send(response[0]);
    }).catch((err) => {
        console.log(err);
    });
});
app.use('/:dat', (req, res, next) => {
    let emval=req.params.dat;
    db.execute(`DELETE FROM users WHERE email='${emval}'`).then(() => {
        console.log('Successfully Deleted!');
    }).catch((err) => {
        console.log(err);
    });

});

app.listen(3031);
