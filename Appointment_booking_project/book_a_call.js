const myData = document.getElementById('my-form')
myData.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const phone_no = e.target.phone.value;
    const date = e.target.date.value;
    const time = e.target.time.value;

    const obj = {
        name,
        email,
        phone_no,
        date,
        time
    };

    axios.post('http://localhost:3031/addUser', obj).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
    print_details_on_screen(obj);
});

window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:3031/domloaded').then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            print_details_on_screen(response.data[i]);
        }
    }).catch((err) => console.log(err));
});

function print_details_on_screen(data) {
    let parentNode = document.getElementById('list_val');
    parentNode.innerHTML = parentNode.innerHTML + `<li id=${data.email}>${data.name} - ${data.email} - ${data.phone_no} - ${data.date} - ${data.time}<input type="button" class="btn-del" onClick=deleteClient('${data.email}') value="Delete"></li>`;
};

function deleteClient(dat) {
    let parentNode = document.getElementById('list_val');
    let childNode = document.getElementById(dat);
    parentNode.removeChild(childNode);
    axios.delete(`http://localhost:3031/${dat}`).then((response) => {
        console.log("Successful" + response);
    }).catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong.</h4>";
        console.log(err)
    });
}




















// function printuserdata() {
//     axios.post('http://localhost:3000/addnewusers', { name: 'yash', age: 25, mailid: 'yash@gmail.com'})







//     console.log(document.getElementById('username').value);
//     console.log(document.getElementById('email').value);
//     console.log(document.getElementById('phone').value);
//     console.log(document.getElementById('date').value);
//     console.log(document.getElementById('time').value);
// }