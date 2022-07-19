const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><label>Details:</label><input type="text" name="detail" required><br/><label>Product size:</label><input type="text" name="size"><br/><button type="submit">Add Product</button></form>');

});

router.post('/product', (req, res, next)=>{
   console.log(req.body);
   res.redirect('/shop');
});

module.exports = router;
