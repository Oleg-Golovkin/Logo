const chekedFindDrowing = () => {
    const contentFindLinks = document.querySelectorAll(".content__find-link"),
        everywhere = document.querySelector(".content__find-btn-everywhere span"),
        btn = document.querySelector('.content__find-btn-everywhere'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        asideMenuDrawing = document.querySelector('.content__find-drawing');
    // Получаю ширину одного из них. По умолчанию в css ширина их 0px


    contentFindLinks.forEach((contentFindLink, i) => {        
        contentFindLink.addEventListener("click", ()=> countingCounter(contentFindLink));
        btn.addEventListener("click", ()=> knockingСounter(contentFindLink));
    });

   

    function countingCounter(item) {
        item.classList.toggle("content__find-link_active");
        let contentFindLinkActive = document.querySelectorAll(".content__find-link_active");
        if(contentFindLinkActive.length > 0) {
            everywhere.textContent = `Везде ${contentFindLinkActive.length}`;
        } else {
            everywhere.textContent = `Везде`;
        }
    } 
    function knockingСounter(item) {
        asideMenuDrawing.classList.toggle('content__find-drawing-active');  
        everywhere.textContent = `Везде`;
        item.classList.remove("content__find-link_active");
    } 

    
};



export default chekedFindDrowing;