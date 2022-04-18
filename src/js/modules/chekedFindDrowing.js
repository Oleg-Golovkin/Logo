const chekedFindDrowing = () => {
    const contentFindLinks = document.querySelectorAll(".content__find-link"),
        everywhere = document.querySelector(".content__find-btn-everywhere span");


    contentFindLinks.forEach((contentFindLink, i) => {
        contentFindLink.addEventListener("click", (e) => {
            contentFindLink.classList.toggle("content__find-link_active");
            let contentFindLinkActive = document.querySelectorAll(".content__find-link_active");
            everywhere.textContent = `Везде ${contentFindLinkActive.length}`;
        });
    });
};



export default chekedFindDrowing;