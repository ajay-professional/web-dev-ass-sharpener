const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        const data = fs.readFileSync('message.txt', { encoding: 'utf8', flag: 'r' });
        res.write('<html>');
        res.write('<head><title>Your Form</title></head>');
        res.write(`<body><h1>${data}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();

    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My NodeJS content.</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);
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