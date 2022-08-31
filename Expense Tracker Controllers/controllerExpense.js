const SignUp = require('../Expense Tracker Models/signupData.js');
const DailyExpenses = require('../Expense Tracker Models/dailyExpensesData.js');
const totalExpenseData= require('../Expense Tracker Models/totalExpenseData.js');
let mymail;
let myusername;
let dotenv=require('dotenv');
dotenv.config();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.addSignUpDetailsInDatabase = (req, res, next) => {
    const { username, email, phone, password } = req.body;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                console.log('Unable to create new user');
                return res.json({ message: 'Unable to create new user' });
            }
            SignUp.create({
                username,
                email,
                phone,
                password: hash,
                ispremiumuser:false
            }).then(() => {
                console.log('Added Product to the database');
                res.json({
                    status: "Successfully signed up"
                });
            }).catch(err => {
                console.log(err);
                console.log('Error in controller');
                res.json({
                    status: "User already exists, Please Login"
                });
            });
        });
    });
};

exports.loginByUser = (req, res, next) => {
    const email2 = req.body.email2;
    const password2 = req.body.password2;
    SignUp.findByPk(email2).then((user) => {
        bcrypt.compare(password2, user.password, function (err, result) {
            if (err) {
                console.log(err);
                res.json({ success: false, message: 'Something went wrong' });
            }
            if (result) {
                var token = jwt.sign({username:user.username, email:user.email}, process.env.SECRET_KEY, {
                     expiresIn: "2d"});
                res.json({status: "Login Successful", success:true, userData:{username:user.username, email:user.email, phone:user.phone, ispremiumuser:user.ispremiumuser}, token});
            } else {
                console.log('passwords do not match');
                res.sendStatus(401);
            }
        });
    }).catch(err => {
        console.log(err);
        console.log('Error in controller login');
        res.sendStatus(404);
    });
};

exports.dailyExpensesData = (req, res, next) => {
    console.log(req.body);
    console.log('Hi');
    console.log(req.user);
    const expenseAmount = req.body.expenseAmount;
    const description = req.body.description;
    const categoryDetail = req.body.categoryDetail;
    const finalTotalExpense=req.body.finalTotalExpense;
    console.log(finalTotalExpense);
    DailyExpenses.create({
        expenseAmount,
        description,
        categoryDetail,
        signupEmail:mymail
    }).then((response) => {
        console.log(response);
        res.json(response);
        console.log('Added dailyexpenses to the database');
        totalExpenseData.destroy({
            where: {
                signupEmail: mymail
            }
        }).then(result => {
            console.log('DESTROYED & Deleted total expenses');
            totalExpenseData.create({
              username:myusername,
              totalexpense:finalTotalExpense,
              signupEmail:mymail
            }).then(result => {
                console.log(result);
                console.log('created total expenses table');
            }).catch(err => {
                console.log('error in total expense creation');
                console.log(err)
            });
        }).catch(err => {
            console.log('error in total expense destroy process');
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
        console.log('Error in dailyexpenses creation');
    });
};

exports.authenticateUser = (req, res, next) => {

    try {
        const token = req.header('authorization');
        console.log(token);
        const userDet = jwt.verify(token, process.env.SECRET_KEY);
        console.log(JSON.stringify(userDet));
        myusername=userDet.username;
        mymail=userDet.email;
        next();
      } catch(err) {
        console.log(err);
        return res.status(401).json({success: false})
        // err
      }

};

exports.domDailyExpenses = (req, res, next) => {
    DailyExpenses.findAll({ where: { signupEmail: mymail }}).then(dailyExpense => {
        console.log(dailyExpense);
        res.json(dailyExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.domTotalExpenses = (req, res, next) => {
    totalExpenseData.findAll({ where: { signupEmail: mymail }}).then(totalExpense => {
        console.log(totalExpense);
        res.json(totalExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.leaderboardUserExpenses= (req, res, next) => {
    totalExpenseData.findAll().then(totalExpense => {
        res.json(totalExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.deleteExpense = (req, res, next) => {
    let delValue = req.params.dat;
    let arrDelVal=delValue.split('-');
    const expenseid=parseFloat(arrDelVal[0]);
    console.log('id is :'+ expenseid);
    const finalTotalExpense=parseFloat(arrDelVal[1]);
    DailyExpenses.destroy({
        where: {
            id: expenseid
        }
    }).then(result => {
        console.log('DESTROYED & Deleted expense');
        totalExpenseData.destroy({
            where: {
                signupEmail: mymail
            }
        }).then(result => {
            console.log('DESTROYED & Deleted total expenses');
            totalExpenseData.create({
              username:myusername,
              totalexpense:finalTotalExpense,
              signupEmail:mymail
            }).then(result => {
                console.log(result);
                console.log('created total expenses table');
            }).catch(err => {
                console.log('error in total expense creation');
                console.log(err)
            });
        }).catch(err => {
            console.log('error in total expense destroy process');
            console.log(err);
        });
    }).catch(err => console.log(err));
};

