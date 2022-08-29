const token = sessionStorage.getItem('token');
document.getElementById('buypremium').onclick = function (e) {
    try {
        axios.get('http://localhost:5739/purchase/premiummembership', { headers: { "Authorization": token } }).then((response) => {
            console.log(response);
            let options = {
                "key": response.data.key_id,
                "name": "Expense Tracker Premium",
                "order_id": response.data.orderId,
                "prefill": {
                    "name": "Test User",
                    "email": "test.user@example.com",
                    "contact": "7003442036"
                },
                "theme": {
                    "color": "#3399cc"
                },
                "handler": function (response) {
                    console.log(response);
                    axios.post('http://localhost:5739/purchase/updatetransactionstatus', {
                        order_id: options.order_id,
                        payment_id: response.razorpay_payment_id,
                    }, { headers: { "Authorization": token } }).then(() => {
                        alert('You are a Premium User Now')
                        document.getElementById('dailyExpenseId').style.background="red";
                    }).catch(() => {
                        alert('Something went wrong. Try Again!!!');
                        const paynotice = document.createElement('p');
                        paynotice.innerHTML = '<h3 style="color:red;"><i><ins>TRANSACTION FAILED! Try Again </ins></i></h3><button id="buypremium" style="background-color:blue; border:1px black solid; border-radius:5px;color:white;margin-left:370px;z-index:2;">Try Again?</button>';
                        document.getElementById('dailyexpensesnotice').appendChild(paynotice);
                        setTimeout(() => {
                            paynotice.remove();
                        }, 6000);
                    })
                }
            };
            const rzp1 = new Razorpay(options);
            rzp1.open();
            e.preventDefault();
    
            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
        }).catch((err) => {
            console.log(err);
            console.log('Hey error in daily expense');
            const paynotice = document.createElement('p');
            paynotice.innerHTML = '<h3 style="color:red;"><i><ins>TRANSACTION FAILED! Try Again </ins></i></h3><button id="buypremium" style="background-color:blue; border:1px black solid; border-radius:5px;color:white;margin-left:370px;z-index:2;">Try Again?</button>';
            document.getElementById('dailyexpensesnotice').appendChild(paynotice);
            setTimeout(() => {
                paynotice.remove();
            }, 6000);
        })
    } catch (err) {
        console.log(err);
        const paynotice = document.createElement('p');
        paynotice.innerHTML = '<h3 style="color:red;"><i><ins>TRANSACTION FAILED! Try Again </ins></i></h3><button id="buypremium" style="background-color:blue; border:1px black solid; border-radius:5px;color:white;margin-left:370px;z-index:2;">Try Again?</button>';
        document.getElementById('dailyexpensesnotice').appendChild(paynotice);
        setTimeout(() => {
            paynotice.remove();
        }, 6000);
    }
}


const logoutbtn = document.getElementById('logoutFrom');
logoutbtn.addEventListener('click', () => {
    window.location.replace("file:///C:/Users/gulshan/Desktop/Expense%20Tracker%20Views/expt_signup.html");
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
    axios.post('http://localhost:5739/dailyExpensesData', obj3, { headers: { "Authorization": token } }).then((response) => {
        console.log(response);
        printDetailsOnScreen(response.data);
    }).catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
        console.log(err);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const token = sessionStorage.getItem('token');
    axios.get("http://localhost:5739/domDailyExpenses", { headers: { "Authorization": token } }).then((response) => {
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
function deleteUser(ivalue) {
    const token = sessionStorage.getItem('token');
    axios.delete(`http://localhost:5739/deleteExpenseFromDatabase/${ivalue}`, { headers: { "Authorization": token } }).then((response) => console.log("Successful" + response)).catch((err) => {
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




