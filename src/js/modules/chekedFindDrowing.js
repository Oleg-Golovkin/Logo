const chekedFindDrowing = () => {
    const contentFindLinks = document.querySelectorAll(".content__find-link"),
        everywhere = document.querySelector(".content__find-btn-everywhere span");


    contentFindLinks.forEach((contentFindLink, i) => {
        contentFindLink.addEventListener("click", (e) => {
            contentFindLink.classList.toggle("content__find-link_active");
            let contentFindLinkActive = document.querySelectorAll(".content__find-link_active");
            if(contentFindLinkActive.length > 0) {
                everywhere.textContent = `Везде ${contentFindLinkActive.length}`;
            } else {
                everywhere.textContent = `Везде`;
            }
            
            
        });
    });
};



export default chekedFindDrowing;