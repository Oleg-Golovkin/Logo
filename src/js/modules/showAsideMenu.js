// Выезжающее меню сбоку от родителя  

const showAsideMenu = () => {
    // Меню, которые выезжают
    const asideMenuDrawings = document.querySelectorAll('.aside__menu-drawing'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        // Получаю ширину одного из них. По умолчанию в css ширина их 0px     
        asideMenuLink = document.querySelectorAll('.aside__menu-link_main'),
        asideMenuLinks = document.querySelector('.aside__menu-links');
    let maxWidth1200px;
    const MediaQueryList = window.matchMedia("(max-width: 1200px)");


    function removeClassList(classList, ...rest) {
        asideMenuDrawings.forEach(item => {
            item.classList.remove(classList, ...rest);
        });
    }

    function handleMobilePhoneResize(e) {
        if (e.matches) {
            maxWidth1200px = true;
            // Стираю все классы для монитора свыше 1200px
            removeClassList("aside__menu-drawing_active");
        } else {
            maxWidth1200px = false;
            // стираю все классы, для понитора до 1200px
            removeClassList("animate__fadeInDown", "hide", "showBlock");
        }
    }
    // Настраиваем слушателя событий
    MediaQueryList.addEventListener("change", (e) => handleMobilePhoneResize(e));
    handleMobilePhoneResize(MediaQueryList);

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
            if (maxWidth1200px) {
                item.classList.remove("animate__fadeInDown");
                item.classList.add("hide");
            } else {
                 // Действия для размера монитора выше 1200px
                item.classList.remove("aside__menu-drawing_active");
            }
            if ((e.target.getAttribute('data-arrow') ||
                    e.target.parentNode.getAttribute('data-arrow')) == i) {
                if (maxWidth1200px) {
                    item.classList.toggle("animate__fadeInDown");
                    item.classList.add("showBlock");
                    item.classList.remove("hide");
                } else {
                    // Действия для размера монитора выше 1200px
                    item.classList.toggle("aside__menu-drawing_active");
                }
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