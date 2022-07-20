const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


const adminMiddleware = require('./routes/admin');
const shopMiddleware = require('./routes/shop');
const succMidd = require('./routes/success');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')));

app.use('/admin', adminMiddleware);

app.use(shopMiddleware);

app.use(succMidd);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'page-not-found.html'));
})

app.listen(3000);





























//res.setHeader('Content-Type', 'text/html');
    // console.log(req.url);
    // if (req.url == '/home') {
    //     res.write('<html>');
    //     res.write('<head><title>My NodeJS content.</title></head>');
    //     res.write('<body><h1>Welcome Home</h1></body>');
    //     res.write('</html>');
    // } else if (req.url == '/about') {
    //     res.write('<html>');
    //     res.write('<head><title>My NodeJS content.</title></head>');
    //     res.write('<body><h1>Welcome to "About us" page</h1></body>');
    //     res.write('</html>');
    // } else if (req.url == '/node') {
    //     res.write('<html>');
    //     res.write('<head><title>My NodeJS content.</title></head>');
    //     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    //     res.write('</html>');
    // }
/*res.write('Welcome to this page!');
res.end();*/
    //process.exit();