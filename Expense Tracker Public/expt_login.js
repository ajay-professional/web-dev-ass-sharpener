const loginbtn = document.getElementById('loginto');
const logincont = document.getElementById('login-id-container');
loginbtn.addEventListener('click', () => {
    window.location.replace("file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_login.html");
});

const signbtn = document.getElementById('signup');
const signupcont = document.getElementById('signup-id-container');
signbtn.addEventListener('click', () => {
    window.location.replace("file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_signup.html");
});

const pwdBtn = document.getElementById('forgotPassword');
const forgotPwdCont = document.getElementById('forgotPwd-id');
pwdBtn.addEventListener('click', () => {
    forgotPwdCont.classList.add('pwd-active');
});

const closeBtn = document.getElementById('closePwdCont');
closeBtn.addEventListener('click', () => {
    forgotPwdCont.classList.remove('pwd-active');
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
        sessionStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.userData));
        let parEle = document.getElementById('loginnotice');
        let childEle = document.createElement('p');
        childEle.innerHTML = '<h3 style="color:green;"><i><ins>Successfully added login details!</ins></i></h3>';
        parEle.appendChild(childEle);
        setTimeout(() => {
            childEle.remove();
            if (response.data.userData.ispremiumuser === true) {
                window.location.href = "../Expense Tracker Views/expt_home_premium.html"
            }
            else {
                window.location.href = "file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_home.html#";
            }
        }, 3000);
    }).catch(err => {
        console.log(err);
        if (err.response.status === 401) {
            alert("Incorrect password !");
        }
        if (err.response.status === 404) {
            alert("This user is not registered. Please sign up first !");
        }
        console.log('Failed to add login details');
    });
});

const pwdForm = document.getElementById('pwdForm');
pwdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let userEmail = e.target.askmail2.value;
    let objt = {
        userEmail
    };
    axios.post('http://localhost:5739/password/forgotpassword', objt).then((res) => {
        console.log(res);
        if(res.status===401){
            let parEle = document.getElementById('loginnotice');
            let childEle = document.createElement('p');
            childEle.innerHTML = '<h3 style="color:green;"><i><ins>User does not exists. Please sign up!</ins></i></h3>';
            parEle.appendChild(childEle);
            setTimeout(() => {
                childEle.remove();
            }, 3000);
        }
        if(res.status===201){
            let parEle = document.getElementById('loginnotice');
            let childEle = document.createElement('p');
            childEle.innerHTML = '<h3 style="color:green;"><i><ins>Reset password link sent to your email Id!</ins></i></h3>';
            parEle.appendChild(childEle);
            setTimeout(() => {
                childEle.remove();
            }, 3000);
        }
        if(res.status===500){
            let parEle = document.getElementById('loginnotice');
            let childEle = document.createElement('p');
            childEle.innerHTML = '<h3 style="color:green;"><i><ins>Reset password link not sent. Error has occured!</ins></i></h3>';
            parEle.appendChild(childEle);
            setTimeout(() => {
                childEle.remove();
            }, 3000);
        }
        if(res.status===403){
            let parEle = document.getElementById('loginnotice');
            let childEle = document.createElement('p');
            childEle.innerHTML = '<h3 style="color:green;"><i><ins>Error has occured in server side/database!</ins></i></h3>';
            parEle.appendChild(childEle);
            setTimeout(() => {
                childEle.remove();
            }, 3000);
        }
    }).catch((err) => {
        console.log(err);
        console.log("cannot sent api to the backend error");
    });
});
