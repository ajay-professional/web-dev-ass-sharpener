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
    }).then(() => {
        console.log('Added Product to the database');
        res.send("Successfully signed up");
    }).catch(err => {
        console.log(err);
        console.log('Error in controller');
        res.send('This user is already present. Please Login !');
    });
};

exports.loginByUser = (req, res, next) => {
    const email2 = req.body.email2;
    const password2 = req.body.password2;
    SignUp.findByPk(email2).then((user) => {
        if (user.password == password2) {
            res.send({
                username: `${user.username}`,
                email: `${user.email}`,
                phone: `${user.phone}`,
                password: `${user.password}`,
                status:"Login Successful"
            });
        }else {
            res.send({
                status:"Incorrect password !"
            });
        }
    }).catch(err => {
        console.log(err);
        console.log('Error in controller login');
        res.send({
            status:"This user is not registered. Please sign up first !"
        });
    });
};


