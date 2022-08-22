const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database');

const storeRoutes = require('./Ecomm Routers/Store');

const cors = require('cors');

const sparkling_stones_data = require('./Ecomm Models/sparkling_stones_data');

const grandTotal_data = require('./Ecomm Models/grandTotal_data');

const User = require('./Ecomm Models/user');

const Cart = require('./Ecomm Models/cart');

const Order = require('./Ecomm Models/order');

const CartItem = require('./Ecomm Models/cart-item');

let i = 0;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    User.findByPk(1).then(user => {
        req.user = user;
        next();
    }).catch(err => console.log(err));
});

app.use((req, res, next) => {
    sparkling_stones_data.findByPk(1).then(sparkling_stones_data => {
        req.sparkling_stones_data = sparkling_stones_data;
        next();
    }).catch(err => console.log(err));
});

app.use((req, res, next) => {
    Cart.findByPk(1).then(cart => {
        req.cart = cart;
        next();
    }).catch(err => console.log(err));
});

app.use((req, res, next) => {
    Order.findByPk(1).then(order => {
        req.order = order;
        next();
    }).catch(err => console.log(err));
});

app.use(storeRoutes);

sparkling_stones_data.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(sparkling_stones_data);
User.hasOne(Cart);
Cart.belongsTo(User);
User.hasOne(grandTotal_data);
grandTotal_data.belongsTo(User);
Cart.belongsToMany(sparkling_stones_data, { through: CartItem });
sparkling_stones_data.belongsToMany(Cart, { through: CartItem });
User.belongsToMany(Order, { through: CartItem });
Order.belongsToMany(User, { through: CartItem });
Order.belongsToMany(sparkling_stones_data, { through: CartItem });
sparkling_stones_data.belongsToMany(Order, { through: CartItem });
//  .sync({ force: true })
sequelize.sync({ force: true }).then(result => {
    return User.findByPk(1);
    // console.log(result);
}).then(user => {
    if (!user) {
        return User.create({ name: 'Ajay', email: 'ajay_testing@gmail.com' });
    }
    return user;
}).then(user => {
    // console.log(user);
    return user.createCart();
}).then(cart => {
    app.listen(6999);
}).catch(err => {
    console.log(err);
});

// sequelize.sync().then(result => {
//     console.log(result);
//     app.listen(6999);
// }).catch(err => console.log(err));
