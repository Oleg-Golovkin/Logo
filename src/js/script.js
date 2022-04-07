"use strict";
import hamburger from "./modules/hamburger";
import showAsideMenu from "./modules/showAsideMenu";


document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */
    hamburger(); 
    showAsideMenu();  
});