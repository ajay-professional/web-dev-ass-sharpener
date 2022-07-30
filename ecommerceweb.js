const ham=document.getElementById('ham');
const nav = document.getElementById('nav');

ham.addEventListener("click", () => {
    nav.classList.toggle("active");
    ham.classList.toggle("active");
});