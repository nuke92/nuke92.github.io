// $(function () {
//     $("#header").load("header.html");
// });

$(function () {
    $("#nav").load("nav.html");
});

function navFloatIn() {
    document.getElementById("nav").classList.toggle("nav__show");
}

function hamburgerBtn() {
    document.getElementById("hamburgerBtn").classList.toggle("hamburger__show");
}