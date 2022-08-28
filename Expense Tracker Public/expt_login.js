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
        //window.location.href = "../Expense Tracker Views/expt_dailyexpenses.html"
        window.location.href="file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_dailyexpenses.html";
        console.log(response);
        console.log(response.data.status);
        console.log('Successfully added login details');
    }).catch(err => {
        console.log(err);
        if(err.response.status===401){
            alert("Incorrect password !");
        }
        if(err.response.status===404){
            alert("This user is not registered. Please sign up first !");
        }
        console.log('Failed to add login details');
    });
});

