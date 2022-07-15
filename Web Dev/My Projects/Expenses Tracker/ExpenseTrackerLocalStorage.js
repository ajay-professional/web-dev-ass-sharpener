//window.addEventListener('DOMContentLoaded', (response) => {
    /*console.log(response);
    userDetails = JSON.parse(localStorage.getItem('userDetails'));*/
    /*for(var i=0; i<response.length;i++){
        userDetails = JSON.parse(localStorage.getItem(response[i].key));
        printDetailsOnScreen(userDetails);
    }
});*/
var forms=document.getElementById("myform");
forms.addEventListener('submit', (e)=>{
    e.preventDefault();
    let expensevalue=e.target.expenseamount.value;
    let descvalue=e.target.description.value;
    let catvalue=e.target.catdetails.value;
    let obj={expensevalue,descvalue,catvalue};
    localStorage.setItem(obj.expensevalue, JSON.stringify(obj));
    /*localStorage.setItem("Expense",expensevalue);
    localStorage.setItem("Description",descvalue);
    localStorage.setItem("categoryDetails",catvalue);*/
    printDetailsOnScreen(obj);
});
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
    let parentNode=document.getElementById('div-id');
    parentNode.innerHTML=parentNode.innerHTML + `<li id="${det.expensevalue}">${det.expensevalue}-${det.descvalue}-${det.catvalue}<button onclick=deleteUser('${det.expensevalue}')>Delete expense</button><button onClick=editUserDetails('${det.expensevalue}','${det.descvalue}','${det.catvalue}')>Edit expense</button>.</li>`
}
function editUserDetails(eval,dval,cvalue){
    document.getElementById('number').value=eval;
    document.getElementById('text').value=dval;
    document.getElementById('list').value=cvalue;
    deleteUser(eval);
}
function deleteUser(eval){
    console.log(eval);
    localStorage.removeItem(eval);
    removeFromScreen(eval);
}
function removeFromScreen(eval){
    let parentNode=document.getElementById('div-id');
    let childnode=document.getElementById(eval);
    parentNode.removeChild(childnode);
}