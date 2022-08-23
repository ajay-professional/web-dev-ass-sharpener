const signbtn = document.getElementById('signup');
const signupcont = document.getElementById('signup-id-container');
signbtn.addEventListener('click', () => {
    signupcont.classList.toggle('signupActive');
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
        axios.get('http://localhost:5739/signupnotice').then((data) => {
            console.log(data.data);
            // const cont = document.getElementById('signupnotice');
            // const dev = document.createElement('p');
            // dev.innerHTML= `<b><u>${data.data}</u></b>`;
            // cont.appendChild(dev);
            // setTimeout(() => {
            //     dev.remove();
            // }, 8000);
            alert(data.data);
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
        console.log('Failed to add signup details');
    });
});