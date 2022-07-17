const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method= req.method;
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
};

// module.exports=requestHandler;

// module.exports={
//     handler:requestHandler,
//     someText:'Hello Node JS'
// }

// module.exports.handler=requestHandler;
// module.exports.someText='Lets go to the market!';
  
//SHORTCUT

exports.handler=requestHandler;
exports.someText='You are joining software company this year';

