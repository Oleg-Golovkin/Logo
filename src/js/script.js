"use strict";
import showHeaderMenu from "./modules/showHeaderMenu";
import showAsideMenu from "./modules/showAsideMenu";
import turnAsideMenu from "./modules/turnAsideMenu";
import sliderСompanies from "./modules/sliderСompanies";


document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */
    showHeaderMenu(); 
    showAsideMenu();  
    turnAsideMenu();
    sliderСompanies();
});