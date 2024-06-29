

document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navMenu = document.querySelector(".nav-items");

    const navbarHeight = 100;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );


    if (navMenu.classList.contains('clicked')) {
        navbar.classList.add("fixed-top");
        document.getElementById("nav-brand").style.fontSize = "35px";
        document.getElementById("nav-brand").style.padding = "10px 0 0 15px";
        document.querySelector(".hamburger-menu").style.padding = "15px 15px 0 0";

    }
    else if (distanceFromTop >= navbarHeight) {
        navbar.classList.add("fixed-top");
        document.getElementById("nav-brand").style.fontSize = "35px";
        document.getElementById("nav-brand").style.padding = "10px 0 0 25px";
        document.querySelector(".hamburger-menu").style.padding = "15px 15px 0 0";
        document.getElementById("nav-brand").style.transition = "transition: all 1s ease-out";
        document.querySelector(".nav-items").style.padding = "15px 0 0 0px";

    } else {
        navbar.classList.remove("fixed-top");
        document.getElementById("nav-brand").style.fontSize = "50px";
        document.getElementById("nav-brand").style.padding = "25px 0 0 35px";
        document.querySelector(".hamburger-menu").style.padding = "40px 35px 0 0";
        document.getElementById("nav-brand").style.transition = "transition: all 1s ease-out";
        document.querySelector(".nav-items").style.padding = "48px 0 0 0px";




    }
});

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-items");
const navBar = document.querySelector(".navbar");
hamburger.addEventListener("click", function () {
    document.getElementById("nav-brand").style.fontSize = "35px";
    document.getElementById("nav-brand").style.transition = "none";
    document.getElementById("nav-brand").style.padding = "10px 0 0 15px";
    document.querySelector(".hamburger-menu").style.padding = "15px 15px 0 0";
    document.querySelector(".nav-items").style.padding = "0px";

    navMenu.classList.toggle("clicked");
    navBar.classList.toggle("clicked");


})

const guideBtn = document.querySelector(".menu-btn");

guideBtn.addEventListener("click", function () {
    hiddenLinks = document.querySelectorAll(".under");
    hiddenLi = document.querySelectorAll(".hiddenLi");
    hiddenLi.forEach(x => x.classList.toggle("under-guide"));
    hiddenLinks.forEach(x => x.classList.toggle("hidden"));

})



var biggerScreen = window.matchMedia("(min-width: 801px");
window.addEventListener("resize", function () {
    if (navMenu.classList.contains('clicked') && biggerScreen.matches) {
        navMenu.classList.remove('clicked');
        navBar.classList.remove('clicked');
        document.querySelector(".nav-items").style.padding = "15px 0 0 80px";

    }
});

const links = document.querySelectorAll(".links");

links.forEach(x => x.addEventListener("click", function () {
    if (biggerScreen.matches) {
        return
    }
    navMenu.classList.toggle('clicked');
    navBar.classList.toggle('clicked');
}));
