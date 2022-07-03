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
    axios.post("https://crudcrud.com/api/ad65e080ba8c4f1fa9cb469b71f1d978/appointmentData", obj)
    .then((response)=>{
    printDetailsOnScreen(response.data);
    })
    .catch((err)=> {
        document.body.innerHTML=  document.body.innerHTML + "<h4>Something went wrong.</h4>";
        console.log(err)});
    //localStorage.setItem(obj.emailvalue, JSON.stringify(obj));
    //printDetailsOnScreen(obj);
}
window.addEventListener("DOMContentLoaded", ()=>{
    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj)

    for(var i=0; i<localStoragekeys.length;i++){
        const key = localStoragekeys[i];
        const userDetailsString=localStorageObj[key];
        const userDetailsObj=JSON.parse(userDetailsString);
        printDetailsOnScreen(userDetailsObj);
    }
})
function printDetailsOnScreen(det){
    let parentNode= document.getElementById('users');
    parentNode.innerHTML=parentNode.innerHTML + `<li id=${det.emailvalue}>${det.namevalue}  -  ${det.emailvalue}<button onclick=editUser('${det.emailvalue},${det.namevalue}')>Edit</button><button onclick=deleteUser('${det.emailvalue}')>Delete User</button></li>`;
}
function editUser(emailvalue, namevalue){
    document.getElementById('name').value=namevalue;
    document.getElementById('email').value=emailvalue;
    deleteUser(em);
}
function deleteUser(em){
    localStorage.removeItem(em);
    removeUserFromScreen(em);
}
function removeUserFromScreen(em){
    const parentNode=document.getElementById('users');
    const childDel=document.getElementById(em);
    parentNode.removeChild(childDel);
}