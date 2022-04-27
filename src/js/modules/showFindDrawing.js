const showFindDrawing = () => {
    const btn = document.querySelector('.content__find-btn-everywhere'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        asideMenuDrawing = document.querySelector('.content__find-drawing'),
    // Получаю ширину одного из них. По умолчанию в css ширина их 0px
    everywhere = document.querySelector(".content__find-btn-everywhere span"),
    contentFindLinks = document.querySelectorAll(".content__find-link");


    btn.addEventListener("click", function (e) {
        asideMenuDrawing.classList.toggle('content__find-drawing-active');  
        everywhere.textContent = `Везде`;
        contentFindLinks.classList.remove('');

    });

};

export default showFindDrawing;