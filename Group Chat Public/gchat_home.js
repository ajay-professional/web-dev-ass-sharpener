const token = sessionStorage.getItem('token');
let formOfChat=document.getElementById('formOfChat');
formOfChat.addEventListener('click', (e)=>{
    e.preventDefault();
    let msgs=document.getElementById('textOfChat').value;
    let objt={
        msgs
    };
    axios.post('http://localhost:5040/groupChatMessage', objt, { headers: { "Authorization": token } }).then((response) => {
        console.log(response);
        document.getElementById('textOfChat').value="";
    }).catch(err => {
        console.log(err);
        if (err.response.status === 401) {
            alert("Incorrect password !");
        }
        if (err.response.status === 404) {
            alert("Please enter a message");
        }
        console.log('Failed to add login details');
    });
});
