const hamburger = () => {
    const hamburger = document.querySelector(".hamburger-box"),
        menu = document.querySelector(".menu"),
        close = document.querySelector(".close"),
        menuBackground = document.querySelector(".menu__background");

    function hideMenu() {
        hamburger.classList.remove("is-active");
        menu.style.left = "-200px";
        hamburger.parentElement.classList.remove("is-active");
        menuBackground.style.visibility = "hidden";
        menuBackground.style.opacity = "0";
    }

    function showMenu() {
        hamburger.parentElement.classList.add("is-active");
        menu.style.left = "0px";
        menuBackground.style.visibility = "visible";
        menuBackground.style.opacity = "1";
    }

    hamburger.addEventListener("click", (e) => {
        showMenu();        
    });

    menuBackground.addEventListener("click", (e) => {
        hideMenu();
    });

    close.addEventListener("click", (e) => {
        hideMenu();
    });    
};

export default hamburger;