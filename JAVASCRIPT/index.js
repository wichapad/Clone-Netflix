// background Navbar scroll
function changeBg() {
    var navbar = document.querySelector(".navbar-container");
    var scrollValue = window.scrollY;
    
    if(scrollValue < 50) {
        navbar.classList.remove("bgnavbar");
    } else {
        navbar.classList.add("bgnavbar");
    }
    
}
window.addEventListener('scroll',changeBg)

