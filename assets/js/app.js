const menulist = document.querySelector(".menulist");
const menuicon = document.querySelector(".menuicon");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})


document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
})