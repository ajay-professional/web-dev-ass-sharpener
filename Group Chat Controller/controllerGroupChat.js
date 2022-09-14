const SignUp = require('../Group Chat Models/signupData.js');
let dotenv = require('dotenv');
dotenv.config();
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
                password: hash
            }).then((result) => {
                console.log('Added Product to the database');
                console.log(result);
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