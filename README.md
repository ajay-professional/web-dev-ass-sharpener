# web-dev-ass-sharpener
let form = document.querySelector('#addForm');
let items=document.getElementById('items');
let listli=document.querySelectorAll('li');
form.addEventListener('submit', addprint);
items.addEventListener('click',removeitem);
let edit=document.createElement('button');
edit.className="btn btn-danger btn-sm float-right edit";
edit.appendChild(document.createTextNode("Edit"));
for(let i=0;i<listli.length;i++){
    listli[i].appendChild(edit);
}
function addprint(e){
    e.preventDefault();
    let abc=document.getElementById('item').value;
    let li=document.createElement('li');
    li.className="newlist";
    li.appendChild(document.createTextNode(abc));
    items.appendChild(li);
    let delbtn=document.createElement('button');
    delbtn.className="btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("X"));
    li.appendChild(delbtn);
    li.appendChild(edit);
}
function removeitem(e){
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        items.removeChild(li);
    }
}
