// Выезжающее меню сбоку от родителя  

const showAsideMenu = () => {
    // Меню, которые выезжают
    const asideMenuDrawings = document.querySelectorAll('.aside__menu-drawing'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        // Получаю ширину одного из них. По умолчанию в css ширина их 0px     
        asideMenuLink = document.querySelectorAll('.aside__menu-link_main'),
        asideMenuLinks = document.querySelector('.aside__menu-links');
    let classActive;
    let maxWidth1200px;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1200) {
        classActive = "animate__fadeInDown";
        maxWidth1200px = true;
    } else {
        classActive = "aside__menu-drawing_active";
        maxWidth1200px = false;
    }

    const mQuery = window.matchMedia('(max-width: 1200px)');

    function handleMobilePhoneResize(e) {   
       // Проверяем, верен ли медиа-запрос
       if (e.target.matches) {     
            // Затем выводим в консоль следующее сообщение
            console.log('Media Query Matched!') ;  
       } 
    } 
    
    // Настраиваем слушателя событий
    mQuery.addEventListener("change", (e) => handleMobilePhoneResize(e));

    // mQuery.onchange = (e) => {
    //     if (e.matches) {
    //     /* the viewport is 600 pixels wide or less */
    //     console.log('This is a narrow screen — less than 600px wide.')
    //   } else {
    //     /* the viewport is more than 600 pixels wide */
    //     console.log('This is a wide screen — more than 600px wide.')
    //   }
    // }

    function mediaWidth(e) {
        e.stopPropagation();
        if (e.target.matchMedia("(max-width: 1200px)").matches) {
            classActive = "animate__fadeInDown";
            maxWidth1200px = true;
        } else if (e.target.matchMedia("(min-width: 1201px)").matches) {
            e.target.removeEventListener("resize", mediaWidth);
            classActive = "aside__menu-drawing_active";
            maxWidth1200px = false;
        }

    }

    window.addEventListener("resize", (e) => mediaWidth(e));

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
        e.stopPropagation();
        asideMenuDrawings.forEach((item, i) => {
            item.classList.remove(classActive);
            if (maxWidth1200px) {
                item.style.display = "none";
            }
            if ((e.target.getAttribute('data-arrow') ||
                    e.target.parentNode.getAttribute('data-arrow')) == i) {
                item.classList.toggle(classActive);
                if (maxWidth1200px) {
                    item.style.display = "block";
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