const menulist = document.querySelector(".menulist");
const menuicon = document.querySelector(".menuicon");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})