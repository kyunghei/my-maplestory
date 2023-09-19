document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = 100;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );

    if (distanceFromTop >= navbarHeight) {
        navbar.classList.add("fixed-top");
        document.getElementById("nav-brand").style.fontSize = "35px";
        document.getElementById("nav-brand").style.letterSpacing = "0px";
        // document.getElementByClass("nav-end").style.letterSpacing = "0px";
    } else {
        navbar.classList.remove("fixed-top");
        document.getElementById("nav-brand").style.fontSize = "50px";
        document.getElementById("nav-brand").style.letterSpacing = "5px";
    }
});