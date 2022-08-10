const sparkling_stones_data=require('../Ecomm Models/sparkling_stones_data');


exports.showProductsOnScreen = (req, res, next) => {
    res.json({
        products1:
            [{ id: "item1", btn_id: "Fuchsite Natural Single Gemstone Rs.1399", title: "Fuchsite Natural Single Gemstone", price: "Rs 1,399/-", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.yS_3usllFbfNbyF-ZqfS_QHaJ4&pid=Api&P=0" },
            { id: "item2", btn_id: "single stone Selenite Rs.699", title: "single stone Selenite", price: "Rs.699/-", imageUrl: "https://thumbs.dreamstime.com/z/isolated-image-single-stone-selenite-yellow-66023790.jpg" },
            { id: "item3", btn_id: "Sparkling Fairy Amethyst Stone Rs.1499", title: "Sparkling Fairy Amethyst Stone", price: "Rs.1,499/-", imageUrl: "https://s.ecrater.com/stores/361937/5626534ccd32d_361937b.jpg" },
            { id: "item4", btn_id: "Fluorite Rough Gemstone Solid Rs.1700", title: "Fluorite Rough Gemstone Solid", price: "Rs.1,700/-", imageUrl: "https://www.laurelnymph.com/wp-content/uploads/2018/09/DSCF9147-768x576.jpg" }],
        products2:
            [{ id: "item1", btn_id: "Indian Apophyllite Crystal Rs.1200", title: "Indian Apophyllite Crystal", price: "Rs.1,200/-", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.vty7MC8m3H5ChKIelllUGQHaHY&pid=Api&P=0" },
            { id: "item2", btn_id: "Apophyllite Crystal Point Pyramid Rs.999", title: "Apophyllite Crystal Point Pyramid", price: "Rs.999/-", imageUrl: "https://i.pinimg.com/736x/fc/63/67/fc63675cfc849a136b75cb07b7147bbb.jpg" },
            { id: "item3", btn_id: "Ruby Zoisite (Anyolite) Rs.1600", title: "Ruby Zoisite (Anyolite)", price: "Rs.1,600/-", imageUrl: "https://the-crystal-council.sfo2.digitaloceanspaces.com/prod/167/responsive-images/Ruby-Zoisite___list_600_400.jpg" },
            { id: "item4", btn_id: "Shattuckite Rs.1800", title: "Shattuckite", price: "Rs.1,800/-", imageUrl: "https://the-crystal-council.sfo2.digitaloceanspaces.com/prod/133/responsive-images/shattuckite-3-%282500px%29___list_351_234.jpg" }],
        success: 
            true
    });
}
exports.addProdDetailsInDatabase = (req, res, next) => {
    const item_name = req.body.productName;
    const price = req.body.productPrice;
    const quantity = req.body.count;
    sparkling_stones_data.create({
       item_name,
       price,
       quantity 
    }).then(result => {
        console.log('Added Product to the database');
    }).catch(err => {
        console.log(err);
        console.log('Error in controller');
    })
};