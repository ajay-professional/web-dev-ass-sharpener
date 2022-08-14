const sparkling_stones_data = require('../Ecomm Models/sparkling_stones_data');
const grandTotal_data = require('../Ecomm Models/grandTotal_data');

exports.showProductsOnScreen = (req, res, next) => {
    res.json({
        products1:
            [{ id: "item1", btn_id: "Fuchsite Natural Single Gemstone Rs.1399", productName: "Fuchsite Natural Single Gemstone", productPrice: "Rs 1,399/-", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.yS_3usllFbfNbyF-ZqfS_QHaJ4&pid=Api&P=0", count: 1 },
            { id: "item2", btn_id: "single stone Selenite Rs.699", productName: "single stone Selenite", productPrice: "Rs.699/-", imageUrl: "https://thumbs.dreamstime.com/z/isolated-image-single-stone-selenite-yellow-66023790.jpg", count: 1 },
            { id: "item3", btn_id: "Sparkling Fairy Amethyst Stone Rs.1499", productName: "Sparkling Fairy Amethyst Stone", productPrice: "Rs.1,499/-", imageUrl: "https://s.ecrater.com/stores/361937/5626534ccd32d_361937b.jpg", count: 1 },
            { id: "item4", btn_id: "Fluorite Rough Gemstone Solid Rs.1700", productName: "Fluorite Rough Gemstone Solid", productPrice: "Rs.1,700/-", imageUrl: "https://www.laurelnymph.com/wp-content/uploads/2018/09/DSCF9147-768x576.jpg", count: 1 }],
        products2:
            [{ id: "item1", btn_id: "Indian Apophyllite Crystal Rs.1200", productName: "Indian Apophyllite Crystal", productPrice: "Rs.1,200/-", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.vty7MC8m3H5ChKIelllUGQHaHY&pid=Api&P=0", count: 1 },
            { id: "item2", btn_id: "Apophyllite Crystal Point Pyramid Rs.999", productName: "Apophyllite Crystal Point Pyramid", productPrice: "Rs.999/-", imageUrl: "https://i.pinimg.com/736x/fc/63/67/fc63675cfc849a136b75cb07b7147bbb.jpg", count: 1 },
            { id: "item3", btn_id: "Ruby Zoisite (Anyolite) Rs.1600", productName: "Ruby Zoisite (Anyolite)", productPrice: "Rs.1,600/-", imageUrl: "https://the-crystal-council.sfo2.digitaloceanspaces.com/prod/167/responsive-images/Ruby-Zoisite___list_600_400.jpg", count: 1 },
            { id: "item4", btn_id: "Shattuckite Rs.1800", productName: "Shattuckite", productPrice: "Rs.1,800/-", imageUrl: "https://the-crystal-council.sfo2.digitaloceanspaces.com/prod/133/responsive-images/shattuckite-3-%282500px%29___list_351_234.jpg", count: 1 }],
        success:
            true
    });
}

exports.addProdDetailsInDatabase = (req, res, next) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const count = req.body.count;
    const grandTotal = req.body.grandTotal;
    sparkling_stones_data.create({
        productName,
        productPrice,
        count
    }).then(result => {
        console.log('Added Product to the database');
    }).catch(err => {
        console.log(err);
        console.log('Error in controller');
    });

    grandTotal_data.create({
        grandTotal
    }).then(result => {
        console.log('total added to the database');
    }).catch(err => {
        console.log(err);
        console.log('Error in controller grandtotal');
    });
};

exports.deleteProduct = (req, res, next) => {
    const prodval = req.params.dat;
    sparkling_stones_data.destroy({
        where: {
            productName: prodval
        }
    }).then(result => {
        console.log('DESTROYED & Deleted PRODUCT');
    }).catch(err => console.log(err));
};
// exports.delFromGrandTotal = (req, res, next) => {
//     grandTotal_data.destroy({
//         where: {
            
//         }
//     }).then(result => {
//         console.log('DESTROYED & Deleted PRODUCT');
//     }).catch(err => console.log(err));
// };

exports.addGrandTotalInDatabase = (req, res, next) => {
    const grandTotal = req.body.grandTotal;
    console.log(grandTotal);
    grandTotal_data.create({
        grandTotal
    }).then(result => {
        console.log('total added to the database');
        console.log(grandTotal);
    }).catch(err => {
        console.log(err);
        console.log('Error in controller grandtotal');
    })
};

exports.domLoaded = (req, res, next) => {
    sparkling_stones_data.findAll()
        .then(products => {
            console.log(products);
            res.json(products);
        }).catch(err => {
            console.log(err);
        })
};

exports.grandTotal = (req, res, next) => {
    grandTotal_data.findAll()
        .then(products => {
            console.log(products);
            res.json(products);
        }).catch(err => {
            console.log(err);
        })
};