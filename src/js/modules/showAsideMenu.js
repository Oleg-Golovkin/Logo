// Выезжающее меню сбоку от родителя  

const showAsideMenu = () => {
    // Меню, которые выезжают
    const asideMenuDrawings = document.querySelectorAll('.aside__menu-drawing'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        // Получаю ширину одного из них. По умолчанию в css ширина их 0px     
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
            item.classList.remove("aside__menu-drawing_active"); 
            if ((e.target.getAttribute('data-arrow') ||
                    e.target.parentNode.getAttribute('data-arrow')) == i) {
                console.log(e.target.getAttribute('data-arrow'));                  
                item.classList.toggle("aside__menu-drawing_active");       
            }
            // при нажатии на свободное пространство все закрывается
            if (!e.target.matches('.aside__menu-link') &&
                !e.target.parentNode.matches('.aside__menu-link')) {
                disactiveClassView();
                
            }
        });
    });
};

export default showAsideMenu;