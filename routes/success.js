const productLogics = require('../controllers/products');

const express = require('express');

const router = express.Router();

router.use('/success', productLogics.getSuccessMsg);

module.exports = router;