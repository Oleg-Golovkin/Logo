const turnAsideMenu = () => {

    const hamburger = document.querySelector("#aside"),
        menu = document.querySelector(".aside__menu");  

    function activeHamburger() {
        hamburger.classList.add("is-active");
        hamburger.childNodes[0].classList.add("hamburger-box_background");
    }

    function deactivationHamburger() {
        hamburger.classList.remove("is-active");
        hamburger.childNodes[0].classList.remove("hamburger-box_background");
    }

    function showMenu() {
        activeHamburger();
        menu.classList.add("aside__menu-activation");
    }

    function hideMenu() {
        deactivationHamburger();
        menu.classList.remove("aside__menu-activation");
    }
    window.addEventListener("click", (e) => {
        if ((e.target && e.target.closest('#aside')) &&
            menu.matches('.aside__menu-activation')) {
            hideMenu();
        } else if ((e.target && e.target.closest('#aside')) &&
            !menu.matches('.aside__menu-activation')) {
            showMenu();
        }

        if (!e.target.closest('#aside') &&
            !e.target.closest('.aside-menu') &&
            !e.target.matches('.aside__menu-link') &&
            !e.target.parentNode.matches('.aside__menu-link')) {
            hideMenu();
        }
    });
};

export default turnAsideMenu;