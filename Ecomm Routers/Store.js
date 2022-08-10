const express = require('express');

const router = express.Router();

const productsController = require('../Ecomm Controllers/products');

router.get('/showData', productsController.showProductsOnScreen);

router.post('/addProdDetailsInDatabase', productsController.addProdDetailsInDatabase);

module.exports = router;

