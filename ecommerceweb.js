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