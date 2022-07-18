const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});


app.use((req, res, next) => {
    console.log('Second middleware');
    res.send('<h1>Hello from Express JS</h1>');
    res.send('{ key1: value }'); 
});

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