const SignUp = require('../Expense Tracker Models/signupData.js');
const DailyExpenses = require('../Expense Tracker Models/dailyExpensesData.js');
const totalExpenseData = require('../Expense Tracker Models/totalExpenseData.js');
const monthlyExpenseData = require('../Expense Tracker Models/monthlyExpenseData.js');
const forgotPasswordRequests = require('../Expense Tracker Models/forgotPasswordRequests.js');
let mymail;
let myusername;
let monthNam;
let dotenv = require('dotenv');
dotenv.config();
const uuid = require('uuid');
const sgMail = require('@sendgrid/mail');
const sg_API_KEY = 'SG.vCdmNcDD@mu32%z90kk312.wVJHNJbnm.?nk_u3hejn.6g3gy'; //This is a fake api I created to give a demo look
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
                ispremiumuser: false
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
                var token = jwt.sign({ username: user.username, email: user.email }, process.env.SECRET_KEY, {
                    expiresIn: "2d"
                });
                res.json({ status: "Login Successful", success: true, userData: { username: user.username, email: user.email, phone: user.phone, ispremiumuser: user.ispremiumuser }, token });
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
    const dateOfExpense = req.body.dateOfExpense;
    const finalTotalExpense = req.body.finalTotalExpense;
    const finalMonthlyExpense = req.body.finalMonthlyExpense;
    const monthName = req.body.monthName;
    console.log(finalTotalExpense);
    DailyExpenses.create({
        expenseAmount,
        description,
        categoryDetail,
        dateOfExpense,
        monthName,
        signupEmail: mymail
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
                username: myusername,
                totalexpense: finalTotalExpense,
                finalMonthlyExpense: finalMonthlyExpense,
                monthName: monthName,
                signupEmail: mymail
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
        myusername = userDet.username;
        mymail = userDet.email;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ success: false })
    }
};

exports.domDailyExpenses = (req, res, next) => {
    DailyExpenses.findAll({ where: { signupEmail: mymail } }).then(dailyExpense => {
        console.log(dailyExpense);
        res.json(dailyExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.domTotalExpenses = (req, res, next) => {
    totalExpenseData.findAll({ where: { signupEmail: mymail } }).then(totalExpense => {
        console.log(totalExpense);
        res.json(totalExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.monthlyExpenseData = (req, res, next) => {
    const finalMonthlyExpense = req.body.finalMonthlyExpense;
    const monthName = req.body.monthName;
    const yearDigit = req.body.yearDigit;
    monthlyExpenseData.create({
        username: myusername,
        finalMonthlyExpense,
        monthName,
        yearDigit,
        signupEmail: mymail
    }).then(monthlyExpense => {
        console.log(monthlyExpense);
        res.json(monthlyExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.leaderboardUserExpenses = (req, res, next) => {
    totalExpenseData.findAll().then(totalExpense => {
        res.json(totalExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.monthlyUserExpenses = (req, res, next) => {
    monthlyExpenseData.findAll({ where: { signupEmail: mymail } }).then(totalExpense => {
        res.send(totalExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.leaderboardMonthlyExpenses = (req, res, next) => {
    totalExpenseData.findAll({ where: { monthName: monthNam } }).then(monthlyExpense => {
        console.log(monthlyExpense);
        res.json(monthlyExpense);
    }).catch(err => {
        console.log(err);
    });
};

exports.forgotPasswordController = (req, res, next) => {
    let userEmail = req.body.userEmail;
    SignUp.findAll({ where: { email: userEmail } }).then(user => {
        let uuidYours = uuid.v4();
        forgotPasswordRequests.create({
            id: uuidYours,
            signupEmail: userEmail,
            isactive: true
        }).then((response) => {
            console.log(response);
            console.log("before sendgrid");
            sgMail.setApiKey(sg_API_KEY);
            console.log("after sendgrid");
            const msgs = {
                to: 'aycompany@gmail.com',
                from: {
                    name: 'EXPENSES TRACKER',
                    email: 'akx4nine9@gmail.com',
                },
                subject: 'Hello from Expenses Tracker-made by Ajay Kumar',
                text: 'Reset your password by clicking on below link',
                html: `<a href="http://localhost:5739/password/resetpassword/${uuidYours}">Reset password</a>`,
            };
            sgMail.send(msgs).then((response) => {
                console.log('Email sent.....');
                res.status(201).send("Reset password link sent...");
            }).catch((err) => {
                console.log(err);
                console.log("password link not sent...Internal server error");
                res.status(500).send("password link not sent...");
            });
        }).catch(err => {
            console.log(err);
            console.log("Cannot create forgot password table in database...");
            res.status(403).send("Cannot create forgot password table in database...");
        });
    }).catch(err => {
        console.log(err);
        console.log("User does not exists. Please sign up!");
        res.status(404).send("User does not exists. Please sign up!");
    });
}

exports.resetPasswordController = (req, res, next) => {
    const uuid = req.params.uuid;
    forgotPasswordRequests.findOne({ where: { id: uuid } }).then(forgotpasswordrequest => {
        forgotpasswordrequest.update({ isactive: false });
        res.status(200).send(`<html>
                                    <script>
                                        function formsubmitted(e){
                                            e.preventDefault();
                                            console.log('called');
                                        }
                                    </script>
                                    <form action="/password/updatepassword/${uuid}" method="get">
                                        <label for="newpassword">Enter New password</label>
                                        <input name="newpassword" type="password" required></input>
                                        <button>reset password</button>
                                    </form>
                                </html>`
        );
    }).catch(err => {
        console.log(err);
        console.log("Error in resetting the password");
    });
};

exports.updatePasswordController = (req, res) => {
    const uuid2 = req.params.uuid2;
    const { newpassword } = req.query;
    forgotPasswordRequests.findOne({ where: { id: uuid2 } }).then(forgotpasswordrequest => {
        SignUp.findOne({ where: { email: forgotpasswordrequest.signupEmail } }).then(user => {
            const saltRounds2 = 10;
            bcrypt.genSalt(saltRounds2, function (err, salt) {
                if (err) {
                    console.log(err);
                    throw new Error(err);
                }
                bcrypt.hash(newpassword, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                        throw new Error(err);
                    }
                    user.update({ password: hash }).then(() => {
                        res.status(201).send('<h2>Successfuly update the new password</h2>');
                    }).catch(err => {
                        console.log('hash error');
                        console.log(err);
                    });
                });
            });
        }).catch(err => {
            res.status(404).json({ error: 'No user Exists', success: false });
            console.log("404--no user exists");
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
        console.log("403---not permitted---forbidden");
        res.status(403).json({ error, success: false });
    });
};

exports.deleteExpense = (req, res, next) => {
    let delValue = req.params.dat;
    let arrDelVal = delValue.split('-');
    const expenseid = parseFloat(arrDelVal[0]);
    console.log('id is :' + expenseid);
    const finalTotalExpense = parseFloat(arrDelVal[1]);
    let finalMonthlyExpense = parseFloat(arrDelVal[2]);
    let monthName = arrDelVal[3];
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
                username: myusername,
                totalexpense: finalTotalExpense,
                finalMonthlyExpense: finalMonthlyExpense,
                monthName: monthName,
                signupEmail: mymail
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

