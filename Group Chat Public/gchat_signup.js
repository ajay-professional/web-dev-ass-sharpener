const signbtn = document.getElementById('signup');
const signupcont = document.getElementById('signup-id-container');
signbtn.addEventListener('click', () => {
    signupcont.classList.toggle('signupActive');
});

const loginbtn = document.getElementById('loginto');
const logincont = document.getElementById('login-id-container');
loginbtn.addEventListener('click', () => {
    window.location.replace("file:///C:/Users/gulshan/Desktop/Group%20Chat%20Views/gchat_login.html");
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
    
    axios.post('http://localhost:5040/addSignUpDetailsInDatabase', obj).then((response) => {
        console.log(response);
        console.log('Successfully added signup details');
        let parEle = document.getElementById('signupnotice');
        let childEle = document.createElement('p');
        childEle.innerHTML = '<h3 style="color:green;"><i><ins>Successfully added signup details. Loading to login page....</ins></i></h3>';
        parEle.appendChild(childEle);
        setTimeout(() => {
            childEle.remove();
            window.location.replace("file:///C:/Users/gulshan/Desktop/Group%20Chat%20Views/gchat_login.html");
        }, 3000);
    }).catch(err => {
        console.log(err);
        console.log('Failed to add signup details');
    });
});