const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    /*res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My NodeJS content.</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');*/
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if (req.url == '/home') {
        res.write('<html>');
        res.write('<head><title>My NodeJS content.</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
    } else if (req.url == '/about') {
        res.write('<html>');
        res.write('<head><title>My NodeJS content.</title></head>');
        res.write('<body><h1>Welcome to "About us" page</h1></body>');
        res.write('</html>');
    } else if (req.url == '/node') {
        res.write('<html>');
        res.write('<head><title>My NodeJS content.</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    }
    res.end();
    /*res.write('Welcome to this page!');
    res.end();*/
    //process.exit();
});
server.listen(4000);
