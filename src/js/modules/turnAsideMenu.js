const turnAsideMenu = () => {

    const hamburger = document.querySelector("#aside"),
        menu = document.querySelector(".aside__menu"),
        menuWidth = getComputedStyle(menu).width;
    let i = 90;

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

        function animate({
            timing,
            draw,
            duration
        }) {

            let start = performance.now();

            requestAnimationFrame(function animate(time) {
                // timeFraction изменяется от 0 до 1
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1) timeFraction = 1;

                // вычисление текущего состояния анимации
                let progress = timing(timeFraction);

                draw(progress); // отрисовать её

                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }

            });
        }

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                menu.style.maxHeight = progress * 701 + 'px'               
            }
        });
    }

    function hideMenu() {
        deactivationHamburger();
        // menu.classList.remove("aside__menu-activation");        
        function myAnimation() {
            i -= 40;
            menu.style.maxHeight = `${i}px`;
            console.log(i);
            if (i > 90) {
                requestAnimationFrame(myAnimation);

            }
        }
        myAnimation();

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