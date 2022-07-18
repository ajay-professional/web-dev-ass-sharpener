const express = require('express');

const app = express();

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('Enter your product details.');
    res.send('<form action="/product" method="POST"><label>Details:</label><input type="text" name="detail" required><br/><label>Product size:</label><input type="text" name="size"><br/><button type="submit">Add Product</button></form>');

});

app.use('/product', (req, res, next)=>{
   console.log(req.body);
   res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express JS</h1>');
    
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