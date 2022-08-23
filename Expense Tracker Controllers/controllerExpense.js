const SignUp = require('../Expense Tracker Models/signupData.js');

let already_present;

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
        already_present=false;
        res.send("Successfully signed up");
    }).catch(err => {
        console.log(err);
        console.log('Error in controller');
        already_present=true;
        res.send('This user is already present. Please Login !');
    });
};
exports.signupnotice = (req, res, next) => {
    if(already_present==true){
        res.send('This user is already present !');
    }
    else{
        res.send("Successfully signed up");
    }
};
