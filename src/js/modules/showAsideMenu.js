// Выезжающее меню сбоку от родителя  

const showAsideMenu = () => {
    // Меню, которые выезжают
    const asideMenuDrawings = document.querySelectorAll('.aside-menu__drawing'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        asideMenuDrawing = document.querySelector('.aside-menu__drawing'),
        // Получаю ширину одного из них. По умолчанию в css ширина их 0px
        widthAsideMenuDrawing = getComputedStyle(asideMenuDrawing).width,
        // Ссылки родителя меню, при нажатии которых выезжают asideMenuDrawings 
        asideMenuLinks = document.querySelector('.aside-menu__links');

    // Функции выезда меню:
    // 1. При нажатии на активированную ссылку (меню выехало) - выехавшее 
    // меню сворачивается).
    // 2. При нажитии на не активную ссылку, но которая может задействовать 
    // выезд другого меню, то активное меню (п.1) сворачивается, и выезжает новое 
    // меню.
    // 3. При нажии на любую другу ссылку (не активирующее меню) выехавшее меню сворачивается


    //  Событие ссылки родителя меню
    asideMenuLinks.addEventListener("click", (e) => {
        asideMenuDrawings.forEach((item, i) => {
            // Скрываю все выезжающие меню, присваивая им ширину 0px
            item.style.width = widthAsideMenuDrawing;
            // К каждой ссылке присвоил дата атрибут (не все должны вызывать выезжающее
            //     меню)
            if ((e.target.getAttribute('data-arrow') ||
                    e.target.parentNode.getAttribute('data-arrow')) == i) {
                        // Если у выезжающего меню ширина 0px, то присваиваю
                        // к нему ширину для выезда - 281px
                        // setTimeout - чтобы дать возможность активному меню скрыться. 
                if (getComputedStyle(item).width == widthAsideMenuDrawing) {
                    setTimeout(() => {
                        item.style.width = "281px";
                    }, 300);
                }
            }
        });
    });
};

export default showAsideMenu;