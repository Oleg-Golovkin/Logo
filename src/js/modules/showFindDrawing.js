const showFindDrawing = () => {
    const btn = document.querySelectorAl('.content__find-btn-everywhere'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        asideMenuDrawing = document.querySelector('.content__find-drawing');
    // Получаю ширину одного из них. По умолчанию в css ширина их 0px

    btn.addEventListener("click", function (e) {
        asideMenuDrawing.classList.toggle('content__find-drawing-active');      

    });

};

export default showFindDrawing;