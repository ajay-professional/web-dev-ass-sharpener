var forms=document.getElementById("myform");
forms.addEventListener('submit', (e)=>{
    e.preventDefault();
    let expensevalue=e.target.expenseamount.value;
    let description_value=e.target.description.value;
    let category_value=e.target.catdetails.value;
    let obj={expensevalue,description_value,category_value};
    
    axios.post("https://crudcrud.com/api/243ddb59ac3d4e8ea367e8f6155e3784/expensetrackerdata", obj)
    .then((response)=> printDetailsOnScreen(response.data))
    .catch((err)=>{
    document.body.innerHTML= document.body.innerHTML+ "<h4>Something went wrong</h4>";
    console.log(err);
    });
    //printDetailsOnScreen(obj);
});
window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/243ddb59ac3d4e8ea367e8f6155e3784/expensetrackerdata")
    .then((response)=>{
    for(var i=0; i<response.data.length;i++){
        printDetailsOnScreen(response.data[i]);
    }
    })
    .catch((err)=>console.log(err));
});

function printDetailsOnScreen(det){
    let parentNode=document.getElementById('div-id');
    parentNode.innerHTML=parentNode.innerHTML + `<li id='${det._id}'>Rupees:${det.expensevalue},  Description:${det.description_value},  Category:${det.category_value}   <button id="del" onclick=deleteUser('${det._id}')>Delete expense</button>   <button id="edit" onClick=editUserDetails('${det.expensevalue}','${det.description_value}','${det.category_value}','${det._id}')>Edit expense</button>.</li>`
}
function editUserDetails(eval,dval,cvalue,ivalue){
    document.getElementById('number').value=eval;
    document.getElementById('text').value=dval;
    document.getElementById('list').value=cvalue;
    deleteUser(ivalue);
}
function deleteUser(ivalue){
    console.log(ivalue);
    axios.delete(`https://crudcrud.com/api/243ddb59ac3d4e8ea367e8f6155e3784/expensetrackerdata/${ivalue}`)
    .then((response)=> console.log("Successful"+response))
    .catch((err)=>{
        document.body.innerHTML= document.body.innerHTML+ "<h4>Something went wrong</h4>";
        console.log(err);
    });
    removeFromScreen(ivalue);
}
function removeFromScreen(ivalue){
    let parentNode=document.getElementById('div-id');
    let childnode=document.getElementById(ivalue);
    parentNode.removeChild(childnode);
}
function clearDetails(){
    document.getElementById('number').value=" ";
    document.getElementById('text').value=" ";
    document.getElementById('list').value=" ";
}




