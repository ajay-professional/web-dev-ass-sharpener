
const express = require('express');

const productLogics = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productLogics.getAddProduct);



router.get('/contactus', productLogics.getContactDetails);

module.exports = router;
