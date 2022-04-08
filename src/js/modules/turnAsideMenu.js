const turnAsideMenu = () => {

    const hamburger = document.querySelector("#aside"),
        menu = document.querySelector(".aside-menu")
        // asideMenuLink = document.querySelectorAll('.aside-menu__link');

    // function disactiveClassView() {
    //     asideMenuLink.forEach(item => {
    //         item.classList.remove("aside-menu__link_main_view");
    //     });
    // }

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
        menu.classList.add("aside-menu_activation");
    }

    function hideMenu() {
        deactivationHamburger();
        menu.classList.remove("aside-menu_activation");
    }
    window.addEventListener("click", (e) => {
        if ((e.target && e.target.closest('#aside')) &&
            menu.matches('.aside-menu_activation')) {
            hideMenu();
            // disactiveClassView();
        } else if ((e.target && e.target.closest('#aside')) &&
            !menu.matches('.aside-menu_activation')) {
            showMenu();
        }

        if (!(e.target && e.target.closest('#aside')) &&
            !(e.target && e.target.closest('.aside-menu'))) {
            hideMenu();
            // disactiveClassView();
        }
    });

};

export default turnAsideMenu;