// Выезжающее меню сбоку от родителя  

const showAsideMenu = () => {
    // Меню, которые выезжают
    const asideMenuDrawings = document.querySelectorAll('.aside__menu-drawing'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
         // Получаю ширину одного из них. По умолчанию в css ширина их 0px     
        widthAsideMenuDrawing = getComputedStyle(document.querySelector('.aside__menu-drawing')).width,
        asideMenuLink = document.querySelectorAll('.aside__menu-link_main'),
        asideMenuLinks = document.querySelector('.aside__menu-links');

    // Функции выезда меню:
    // 1. При нажатии на активированную ссылку (меню выехало) - выехавшее 
    // меню сворачивается).
    // 2. При нажитии на не активную ссылку, но которая может задействовать 
    // выезд другого меню, то активное меню (п.1) сворачивается, и выезжает новое 
    // меню.
    // 3. При нажии на любую другу ссылку (не активирующее меню) выехавшее меню сворачивается

    function disactiveClassView() {
        asideMenuLink.forEach(item => {
            item.classList.remove("aside__menu-link_main-view");
        });
    }

    // 1. Подсвечивание фона на нажимаемых элементах меню и
    // убирание фона при повторном нажатии на сам элемент, или последующем
    // нажитии на другой элемент меню
    asideMenuLinks.addEventListener("click", (e) => {
        asideMenuLink.forEach((item) => {
            if (e.target == item || e.target.parentNode == item) {
                if (!e.target.matches('.aside__menu-link_main-view') &&
                    !e.target.parentNode.matches('.aside__menu-link_main-view')) {
                    disactiveClassView();
                    item.classList.add("aside__menu-link_main-view");
                } else {
                    disactiveClassView();
                }
            }
        });
    });

    // Скрытие и подказ подменю.
    // Событие на window, чтобы иметь возможность закрывать ссылки при 
    // нажатии на свободное пространство
    window.addEventListener("click", (e) => {
        asideMenuDrawings.forEach((item, i) => {
            // Скрываю все выезжающие меню, присваивая им ширину 0px
            item.style.width = widthAsideMenuDrawing;
            setTimeout(() => {
                item.style.display = "none";
            }, 100);
            // К каждой ссылке присвоил дата атрибут (не все должны вызывать выезжающее
            //     меню)
            if ((e.target.getAttribute('data-arrow') ||
                    e.target.parentNode.getAttribute('data-arrow')) == i) {
                // Если у выезжающего меню ширина 0px, то присваиваю
                // к нему ширину для выезда - 281px
                // setTimeout - чтобы дать возможность активному меню скрыться. 
                if (getComputedStyle(item).width == widthAsideMenuDrawing) {
                    setTimeout(() => {
                        item.style.display = "block";
                    }, 150);
                    setTimeout(() => {
                        item.style.width = "281px";
                    }, 300);
                }
            }
            // при нажатии на свободное пространство все закрывается
            if (!e.target.matches('.aside__menu-link') &&
                !e.target.parentNode.matches('.aside__menu-link')) {
                disactiveClassView();
                item.style.width = widthAsideMenuDrawing;
                setTimeout(() => {
                    item.style.display = "none";
                }, 100);
            }
        });
    });
};

export default showAsideMenu;