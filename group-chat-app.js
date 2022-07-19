const express = require('express');

const fs = require('fs');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res, next) => {
    res.send('<form action="/" method="POST" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><label>Username:</label><input type="text" id="username" name="username" required><button type="submit">Submit</button></form>');
});

app.post('/', (req, res, next) => {
    res.send('<form action="/home" method="POST" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)"><label>Send Message:</label><input type="text" name="message" required><input type="hidden" name="username" id="username"><button type="submit">Submit</button></form>');

});

app.post('/home', (req, res, next) => {

    console.log(`${req.body.username}:${req.body.message}`);

    res.send('<h1>Welcome to the group chat app</h1>');
})

app.use((req, res, next) => {
    res.status(404).send('<h2>Page not found</h2>');
});

app.listen(5678);
