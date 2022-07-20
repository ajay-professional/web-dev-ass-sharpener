const productLogics = require('../controllers/products');

const express = require('express');

const router = express.Router();



router.use('/shop', productLogics.getShopDetails);

module.exports = router;
