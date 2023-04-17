let menu = document.querySelector('menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
var swiper = new Swiper(".home-silder", {
    loop: true,
    navigation: {
        nextE1: ".swiper-btn-next",
        prev1: ".swiper-btn-prev",

    },
});