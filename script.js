//menuMobile//

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    
})

//scroll//

window.addEventListener("scroll",function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
    
    window.addEventListener("scroll",function(){
        var logo = document.querySelector("logo");
        logo.classList.toggle("sticky", window.scrollY > 0);
    })
    
    