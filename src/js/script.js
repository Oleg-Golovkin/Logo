"use strict";
import showHeaderMenu from "./modules/showHeaderMenu";
import showAsideMenu from "./modules/showAsideMenu";
import turnAsideMenu from "./modules/turnAsideMenu";
import sliderСompanies from "./modules/sliderСompanies";
import showFindDrawing from "./modules/showFindDrawing";
import chekedFindDrowing from "./modules/chekedFindDrowing";
import sliderSale from "./modules/sliderSale";



document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */
    showHeaderMenu(); 
    showAsideMenu();  
    turnAsideMenu();
    sliderСompanies();
    showFindDrawing();
    chekedFindDrowing();
    sliderSale();
});