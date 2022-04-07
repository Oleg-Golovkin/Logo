const hamburger = () => {

    const hamburger = document.querySelectorAll(".hamburger.hamburger--3dx"),
        menu = document.querySelector(".menu"),
        menuBackground = document.querySelector(".menu__background"),
        // Перемещение блоков
        headerMain = document.querySelector(".header__main"),
        headerContentUl = document.querySelector(".header__content-ul"),
        headerSecondary = document.querySelector(".header__secondary"),
        headerSubSecondary = document.querySelectorAll(".header__sub-secondary");

    function activeHamburger() {
        hamburger.forEach(item => {
            item.classList.add("is-active");
        });
    }

    function deactivationHamburger() {
        hamburger.forEach(item => {
            item.classList.remove("is-active");
        });
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
        setTimeout(()=> deactivationReplacement(), 400);
        menu.style.left = "-200px";
        menuBackground.style.visibility = "hidden";
        menuBackground.style.opacity = "0";
    }

    hamburger.forEach(item => {
        item.addEventListener("click", (e) => {
            console.log('fsdf');
            showMenu();
        });
    });


    menuBackground.addEventListener("click", (e) => {
        hideMenu();
    });


    hamburger.forEach(item => {
        item.addEventListener("click", (e) => {
            showMenu();
        });
    });
};

export default hamburger;