const signbtn = document.getElementById('signup');
const signupcont = document.getElementById('signup-id-container');
signbtn.addEventListener('click', () => {
    signupcont.classList.toggle('signupActive');
});

const loginbtn = document.getElementById('loginto');
const logincont = document.getElementById('login-id-container');
loginbtn.addEventListener('click', () => {
    window.location.replace("file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_login.html");
});


const formSignup = document.getElementById('signUpForm');
formSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const obj = {
        username,
        email,
        phone,
        password
    }
    
    axios.post('http://localhost:5739/addSignUpDetailsInDatabase', obj).then((response) => {
        console.log(response);
        console.log('Successfully added signup details');
        window.location.replace("file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_login.html");
    }).catch(err => {
        console.log(err);
        console.log('Failed to add signup details');
    });
});

