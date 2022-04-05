const hamburger = () => {
    const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        close = document.querySelector(".close"),
        menuBackground = document.querySelector(".menu__background"),
        headerContent = document.querySelector(".menu .header__content-ul"),
        headerMain = document.querySelector(".header__main");

    function hideMenu() {
        hamburger.classList.remove("is-active");
        menu.style.left = "-200px";
        hamburger.parentElement.classList.remove("is-active");
        menuBackground.style.visibility = "hidden";
        menuBackground.style.opacity = "0";
        // hideHeaderContent();
        // headerMain.prepend(headerContent);
        // headerContent.style.display = "none";
    }

    headerContent.style.display = "block";
    function hideHeaderContent(){
        headerContent.remove();       
    }

    function showHeaderContent(){
        // menu.prepend(headerContent);
        // headerContent.style.display = "block";
    }

    function showMenu() {
        hamburger.classList.add("is-active");
        menu.style.left = "0px";
        menuBackground.style.visibility = "visible";
        menuBackground.style.opacity = "1";
        // hideHeaderContent();
        // showHeaderContent();  
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