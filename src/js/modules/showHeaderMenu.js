const showHeaderMenu = () => {

    const hamburger = document.querySelector("#header"),
        menu = document.querySelector(".menu"),
        menuBackground = document.querySelector(".menu__background"),
        // Перемещение блоков
        headerMain = document.querySelector(".header__main"),
        headerContentUl = document.querySelector(".header__content-ul"),
        headerSecondary = document.querySelector(".header__secondary"),
        headerSubSecondary = document.querySelectorAll(".header__sub-secondary");

    function activeHamburger() {
        hamburger.classList.add("is-active");
        hamburger.childNodes[0].classList.add("hamburger-box_background");
    }    

    function deactivationHamburger() {
        hamburger.classList.remove("is-active");
        hamburger.childNodes[0].classList.remove("hamburger-box_background");
    }

    function activeReplacement() {
        menu.append(headerContentUl);
        headerSubSecondary.forEach(item => {
            menu.append(item);
        });
    }

    function deactivationReplacement() {
        headerMain.prepend(headerContentUl);
        headerSubSecondary.forEach(item => {
            headerSecondary.append(item);
        });
    }

    function showMenu() {
        activeHamburger();
        activeReplacement();
        menu.style.left = "0px";
        menuBackground.style.visibility = "visible";
        menuBackground.style.opacity = "1";
    }

    function hideMenu() {
        deactivationHamburger();
        setTimeout(() => deactivationReplacement(), 900);
        menu.style.left = "-200px";
        menuBackground.style.visibility = "hidden";
        menuBackground.style.opacity = "0";
    }

    hamburger.addEventListener("click", (e) => {
        showMenu();
    });

    menuBackground.addEventListener("click", (e) => {
        hideMenu();
    });   
};

export default showHeaderMenu;