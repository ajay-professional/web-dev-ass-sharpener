const ham = document.getElementById('ham');
const nav = document.getElementById('nav');

ham.addEventListener("click", () => {
    nav.classList.toggle("active");
    ham.classList.toggle("active");
});
const cont = document.getElementById('container');
document.getElementById('btn1').addEventListener('click', () => {
    showNotification();
});
function showNotification() {
    const dev = document.createElement('p');
    dev.classList.add('toast');
    dev.innerHTML = 'This challenge is crazy !';
    cont.appendChild(dev);
    setTimeout(() => {
        dev.remove();
    }, 3000);
}

const autotext='Welcome to one of fast growing ecommerce coorporation of India!                ';
let idx=0;
function autoText(){
    document.getElementById('autotext').innerHTML=autotext.slice(0, idx);
    idx++;
    if(idx>autotext.length-1){
        idx=0;
    }
}
setInterval(autoText, 100);

const open = document.getElementById("open");
const close = document.getElementById("close");
const container2 = document.getElementById("container2");

open.addEventListener("click", () => {
    container2.classList.add("active");
});

close.addEventListener("click", () => {
    container2.classList.remove("active");
});
