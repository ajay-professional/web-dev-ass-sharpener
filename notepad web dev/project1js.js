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
function printDetailsOnScreen(det){
    let parentNode=document.getElementById('div-id');
    parentNode.innerHTML=parentNode.innerHTML + `<li id="${det.expensevalue}">${det.expensevalue}-${det.descvalue}-${det.catvalue}<button onclick=deleteUser('${det.expensevalue}')>Delete expense</button><button onclick=editUserDetails('${det.expensevalue}','${det.descvalue}','${det.catvalue}')>Edit expense</button>.</li>`
}
function editUserDetails(eval,dval,cvalue){
    document.getElementById('number').value=eval;
    document.getElementById('text').value=dval;
    document.getElementById('list').value=cvalue;
    deleteUser(eval);
}
function deleteUser(expvalue){
    console.log(expvalue);
    localStorage.removeItem(expvalue);
    removeFromScreen(expvalue);
}
function removeFromScreen(expvalue){
    let parentNode=document.getElementById('div-id');
    let childnode=document.getElementById(expvalue);
    parentNode.removeChild(childnode);
}