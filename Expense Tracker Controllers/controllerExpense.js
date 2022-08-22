const SignUp = require('../Expense Tracker Models/signupData.js');


exports.addSignUpDetailsInDatabase = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    SignUp.create({
        username,
        email,
        phone,
        password
    }).then(result => {
        console.log('Added Product to the database');
    }).catch(err => {
        console.log(err);
        console.log('Error in controller');
    });
};
