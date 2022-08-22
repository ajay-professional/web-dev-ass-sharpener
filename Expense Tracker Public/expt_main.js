const signbtn=document.getElementById('signup');
const signupcont=document.getElementById('signup-id-container');
signbtn.addEventListener('click', ()=>{
    signupcont.classList.toggle('signupActive');
})