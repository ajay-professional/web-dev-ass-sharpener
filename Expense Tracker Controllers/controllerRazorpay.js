const SignUp = require('../Expense Tracker Models/signupData.js');
const Razorpay = require('razorpay');
const Order = require('../Expense Tracker Models/orders.js')
let dotenv = require('dotenv');
let mymail;
dotenv.config();
var jwt = require('jsonwebtoken');

const purchasepremium = (req, res) => {
    var instance = new Razorpay({
        key_id: process.env.YOUR_KEY_ID,
        key_secret: process.env.YOUR_KEY_SECRET
    });

    var options = {
        amount: "39900",  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcpt1"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        if (err) {
            throw new Error(err);
        }
        Order.create({ orderid: order.id, status: 'PENDING' }).then(() => {
            res.status(201).json({ orderId: order.id, key_id: instance.key_id });
        }).catch((err) => {
            throw new Error(err);
        })
    });
}

//     rzp.orders.create({ amount, currency: "INR" }, (err, order) => {
//         if (err) {
//             throw new Error(err);
//         }
//         req.user.createOrder({ orderid: order.id, status: 'PENDING' }).then(() => {
//             return res.status(201).json({ order, key_id: rzp.key_id });

//         }).catch(err => {
//             throw new Error(err)
//         })
//     })
// } catch (err) {
//     console.log(err);
//     res.status(403).json({ message: 'Sometghing went wrong', error: err })
// }


const updateTransactionStatus = (req, res) => {
    try {
        const { payment_id, order_id } = req.body;
        Order.findOne({ where: { orderid: order_id } }).then(order => {
            order.update({ paymentid: payment_id, status: 'SUCCESSFUL' }).then(() => {
                const token = req.header('authorization');
                const userDet = jwt.verify(token, process.env.SECRET_KEY);
                mymail=userDet.email;
                SignUp.findOne({ where: { email: mymail } }).then(user => {
                    user.update({ ispremiumuser: true }).then(() => {
                        return res.status(202).json({ sucess: true, message: "Transaction Successful" });
                    }).catch((err) => {
                        console.log(err);
                        console.log('Error in signup premium');
                        });
                }).catch(err => console.log('Error in signup findone'))
            }).catch((err) => {
                throw new Error(err);
            })
        }).catch(err => {
            throw new Error(err);
        })
    } catch (err) {
        console.log(err);
        res.status(403).json({ error: err, message: 'Something went wrong' });

    }
}

module.exports = {
    purchasepremium,
    updateTransactionStatus
}