var forms = document.getElementById("myform");
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    let expensevalue = e.target.expenseamount.value;
    let description_value = e.target.description.value;
    let category_value = e.target.catdetails.value;
    let obj = { expensevalue, description_value, category_value };
    async function axios_post() {
        try {
            let response = await axios.post("https://crudcrud.com/api/3c282100558b4e8e82f77d2a5abbf3ef/expensetrackerdata", obj);
            printDetailsOnScreen(response.data);

        } catch (err) {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
        }
    }
    axios_post();
});
window.addEventListener("DOMContentLoaded", () => {
    async function wind_axios() {
        try {
            let response2 = await axios.get("https://crudcrud.com/api/3c282100558b4e8e82f77d2a5abbf3ef/expensetrackerdata");
            for (let i = 0; i < response2.data.length; i++) {
                printDetailsOnScreen(response2.data[i]);
            }

        } catch (error) {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(error);
        }
    }
    wind_axios();
});

function printDetailsOnScreen(det) {
    let parentNode = document.getElementById('div-id');
    parentNode.innerHTML = parentNode.innerHTML + `<li id='${det._id}'>Rupees:${det.expensevalue},  Description:${det.description_value},  Category:${det.category_value}   <button id="del" onclick=deleteUser('${det._id}')>Delete expense</button>   <button id="edit" onClick=editUserDetails('${det.expensevalue}','${det.description_value}','${det.category_value}','${det._id}')>Edit expense</button>.</li>`
}
function editUserDetails(eval, dval, cvalue, ivalue) {
    document.getElementById('number').value = eval;
    document.getElementById('text').value = dval;
    document.getElementById('list').value = cvalue;
    deleteUser(ivalue);
}
function deleteUser(ivalue) {
    console.log(ivalue);
    async function del_axios() {
        try {
            let response3 = await axios.delete(`https://crudcrud.com/api/3c282100558b4e8e82f77d2a5abbf3ef/expensetrackerdata/${ivalue}`);
            console.log("Successful" + response3);
        } catch (error) {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(error);
        }
    }
    del_axios();
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

