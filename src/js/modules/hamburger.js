const hamburger = () => {
    const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        close = document.querySelector(".close"),
        menuBackground = document.querySelector(".menu__background"),
        headerContent = document.querySelector(".header__content-ul"),        
        headerMain = document.querySelector(".header__main");

    function hideHeaderContent(){
        headerMain.prepend(headerContent);
        headerContent.classList.remove('header__content-ul_menu');
       
    }

    function showHeaderContent(){        
        menu.prepend(headerContent);
        headerContent.classList.add('header__content-ul_menu');  
    }

    function hideMenu() {
        hamburger.classList.remove("is-active");
        menu.style.left = "-200px";
        hamburger.parentElement.classList.remove("is-active");
        menuBackground.style.visibility = "hidden";
        menuBackground.style.opacity = "0";
        hideHeaderContent();        
    }

    function showMenu() {
        hamburger.classList.add("is-active");
        menu.style.left = "0px";
        menuBackground.style.visibility = "visible";
        menuBackground.style.opacity = "1";
        showHeaderContent();  
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