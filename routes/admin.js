const path = require('path');
const express = require('express');
const rootDir = require('../Util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
});

module.exports = router;
