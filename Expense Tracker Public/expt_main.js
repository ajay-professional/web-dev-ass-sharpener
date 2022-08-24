const signbtn = document.getElementById('signup');
const signupcont = document.getElementById('signup-id-container');
signbtn.addEventListener('click', () => {
    signupcont.classList.toggle('signupActive');
});

const loginbtn = document.getElementById('loginto');
const logincont = document.getElementById('login-id-container');
loginbtn.addEventListener('click', () => {
    logincont.classList.toggle('loginActive');
});

function ancSignin(){
    logincont.classList.toggle('loginActive');
};

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
        alert(response.data);
    }).catch(err => {
        console.log(err);
        console.log('Failed to add signup details');
    });
});

const formLogin = document.getElementById('loginForm');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email2 = e.target.email2.value;
    const password2 = e.target.password2.value;
    const obj2 = {
        email2,
        password2
    }
    axios.post('http://localhost:5739/loginByUser', obj2).then((response) => {
        console.log(response.data.status);
        console.log('Successfully added login details');
        alert(response.data.status);
    }).catch(err => {
        console.log(err);
        console.log('Failed to add login details');
    });
});