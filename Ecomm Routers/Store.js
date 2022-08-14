const express = require('express');

const router = express.Router();

const productsController = require('../Ecomm Controllers/products');

router.get('/showData', productsController.showProductsOnScreen);

router.delete('/delFromDatabase/:dat', productsController.deleteProduct);

router.post('/grandTotal/grand', productsController.addGrandTotalInDatabase);

router.post('/addProdDetailsInDatabase', productsController.addProdDetailsInDatabase);

router.get('/domloaded', productsController.domLoaded);

router.get('/grandTotal', productsController.grandTotal);

module.exports = router;

