const turnAsideMenu = () => {

    const hamburger = document.querySelector("#aside"),
        menu = document.querySelector(".aside__menu");
    let i = 90;

    function activeHamburger() {
        hamburger.classList.add("is-active");
        hamburger.childNodes[0].classList.add("hamburger-box_background");
    }

    function deactivationHamburger() {
        hamburger.classList.remove("is-active");
        hamburger.childNodes[0].classList.remove("hamburger-box_background");
    }

    function plusHeightMenu() {
        i += 40;
        if (i <= 703) {
            menu.style.maxHeight = `${i}px`;
            requestAnimationFrame(plusHeightMenu);
        } else {
            menu.style.maxHeight = `703px`;
        }
    }

    function minusHeightMenu() {
        i -= 40;
        if (i >= 90) {
            menu.style.maxHeight = `${i}px`;
            requestAnimationFrame(minusHeightMenu);
        } else {
            menu.style.maxHeight = `90px`;
        }
    }

    function showMenu() {
        menu.style.overflow = "visible";
        activeHamburger();
        plusHeightMenu();
    }

    function hideMenu() {
        deactivationHamburger();
        minusHeightMenu();
        menu.style.overflow = "hidden";
    }

    window.addEventListener("click", (e) => {
        if ((e.target && e.target.closest('#aside')) &&
            e.target.closest('.is-active')) {
            hideMenu();
        } else if ((e.target && e.target.closest('#aside')) &&
            !e.target.closest('.is-active')) {
            showMenu();
        }

        if (!e.target.closest('#aside') &&
            !e.target.closest('.aside__menu-links')) {
            hideMenu();
        }
    });
};

export default turnAsideMenu;