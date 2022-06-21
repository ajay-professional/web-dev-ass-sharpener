/*//DOCUMENT OBJECT MODEL
//console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.domain);
//document.title="123";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);*/

/*//GETELEMENTBYID
console.log(document.getElementById("header-title"));
let head=document.getElementById("header-title");
head.textContent="UNIVERSE";
head.innerText="Cosmos";
head.style.borderBottom="solid 2px black";*/
let title=document.querySelectorAll(".title");
//console.log(title[0]);
title[0].style.fontWeight="bold";
title[0].style.color="green";
//GET ELEMENT BY CLASS NAME
let items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
