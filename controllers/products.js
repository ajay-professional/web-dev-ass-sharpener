const path = require('path');

const rootDir = require('../Util/path');


exports.getAddProduct = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

};

exports.getContactDetails = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
};

exports.getShopDetails = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.getSuccessMsg=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}