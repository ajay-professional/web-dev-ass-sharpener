let form=document.getElementById('my-form')
form.addEventListener('submit', localprint);
function localprint(e){
    e.preventDefault();
    let namevalue=e.target.username.value;
    let emailvalue=e.target.email.value;
    //localStorage.setItem('Name',namevalue);
    //localStorage.setItem('Email',emailvalue);
    let obj={
        namevalue,
        emailvalue
    };
    localStorage.setItem(obj.emailvalue, JSON.stringify(obj));
    printDetailsOnScreen(obj);
}
function printDetailsOnScreen(det){
    let parentNode= document.getElementById('users');
    parentNode.innerHTML=parentNode.innerHTML + `<li>${det.namevalue}  -  ${det.emailvalue}</li>`;
}

