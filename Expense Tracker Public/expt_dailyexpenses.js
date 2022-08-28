const loginbtn = document.getElementById('loginto');
const logincont = document.getElementById('login-id-container');
loginbtn.addEventListener('click', () => {
    window.location.replace("file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_login.html");
});

var forms = document.getElementById("myform");

forms.addEventListener('submit', (e) => {
    e.preventDefault();
    let expenseAmount = e.target.expenseAmount.value;
    let description = e.target.description.value;
    let categoryDetail = e.target.categoryDetail.value;

    let obj3 = {
        expenseAmount,
        description,
        categoryDetail
    };
    console.log(obj3);
    const token = sessionStorage.getItem('token');
    axios.post('http://localhost:5739/dailyExpensesData', obj3, { headers: {"Authorization" : token} }).then((response) =>{
            console.log(response);
            printDetailsOnScreen(response.data);
        }).catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
        });
});

window.addEventListener("DOMContentLoaded", () => {
    const token = sessionStorage.getItem('token');
    axios.get("http://localhost:5739/domDailyExpenses", { headers: {"Authorization" : token} }).then((response) => {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            printDetailsOnScreen(response.data[i]);
        }
    }).catch((err) => console.log(err));
});

function printDetailsOnScreen(det) {
    let parentNode = document.getElementById('div-id');
    parentNode.innerHTML = parentNode.innerHTML + `<li id='${det.id}' style="text-align:left;"><pre style="font-size:15px;"><b>Amount:</b> <i>${det.expenseAmount}</i>,        <b>Description:</b><i style="position:relative;width:15px;height:2px;">${det.description}</i>,        <b>Category:</b><i>${det.categoryDetail}</i>        <button id="del" onclick=deleteUser('${det.id}') style="background-color:blue; border:1px black solid; border-radius:5px;color:white;">Delete expense</button>  <button id="edit" onClick=editUserDetails('${det.expenseAmount}','${det.description}','${det.categoryDetail}','${det.id}') style="background-color:blue; border:1px black solid; border-radius:5px;color:white;">Edit expense</button>.</pre></li>`
}
function editUserDetails(eval, dval, cvalue, ivalue) {
    document.getElementById('number').value = eval;
    document.getElementById('text').value = dval;
    document.getElementById('list').value = cvalue;
    deleteUser(ivalue);
}
function deleteUser(ivalue){
    const token = sessionStorage.getItem('token');
    axios.delete(`http://localhost:5739/deleteExpenseFromDatabase/${ivalue}`, { headers: {"Authorization" : token} }).then((response) => console.log("Successful" + response)).catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
        console.log(err);
    });
    removeFromScreen(ivalue);
}
function removeFromScreen(ivalue) {
    let parentNode = document.getElementById('div-id');
    let childnode = document.getElementById(ivalue);
    parentNode.removeChild(childnode);
}
function clearDetails() {
    document.getElementById('number').value = " ";
    document.getElementById('text').value = " ";
    document.getElementById('list').value = " ";
}




