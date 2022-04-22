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
    sliderSale({
        slideSelector: ".slider-content__slide",
        sliderParentSelector: ".slider-content",
        sliderSelector:".slider-content__wrapper" ,
        subWrapperSelector: ".slider-content__subWrapper",        
        totalSelector: ".slider-content__total",
        currentSelector: ".slider-content__current",
        nextSlideSelector: ".slider-content__next-img",        
        prevSlideSelector: ".slider-content__prev", 
        tabs: true,
        counter: false
             
    });
   
    sliderSale({
        slideSelector: ".slider-content__slide_products",
        sliderParentSelector: ".slider-content_products",
        sliderSelector:".slider-content__wrapper_products" ,
        subWrapperSelector: ".slider-content__subWrapper_products",        
        totalSelector: ".slider-content__total_products",
        currentSelector: ".slider-content__current_products",
        nextSlideSelector: ".slider-content__next-img_products",        
        prevSlideSelector: ".slider-content__prev_products",        
        tabs: false  
    });
    
});