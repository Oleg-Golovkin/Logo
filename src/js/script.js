"use strict";
import showHeaderMenu from "./modules/showHeaderMenu";
import showAsideMenu from "./modules/showAsideMenu";
import turnAsideMenu from "./modules/turnAsideMenu";
import sliderСompanies from "./modules/sliderСompanies";
import chekedFindDrowing from "./modules/chekedFindDrowing";
import sliderSale from "./modules/sliderSale";
import showSubMenuProducts from "./modules/showSubMenuProducts";
import Swiper from "./modules/swiper-bundle.min";

document.addEventListener("DOMContentLoaded", () => {
        /* После полной загрузки HTML выполняется JS */
        showHeaderMenu();
        showAsideMenu();
        turnAsideMenu();
        sliderСompanies();
        chekedFindDrowing();
        sliderSale({
                slideSelector: "#slider-content .slider-content__slide",
                sliderParentSelector: ".slider-content#slider-content",
                sliderSelector: "#slider-content .slider-content__wrapper",
                subWrapperSelector: "#slider-content .slider-content__subWrapper",
                tabs: true,
                counter: false,
                btn: false,
        });

        showSubMenuProducts();

        const swiper = new Swiper('.swiper', {
                navigation: {
                        prevEl: '.slider-content__prev_products',
                        nextEl: '.slider-content__next_products',

                },
                pagination: {
                        type: 'fraction',

                        el: ".slider-content__сounter_products-wpapper",
                },
                spaceBetween: 28,
                rewind: true,
                breakpoints: {
                        // when window width is >= 320px
                        320: {
                                slidesPerView: 1,
                                grid: {
                                        rows: 2,
                                },
                        },
                        // when window width is >= 480px
                        632: {
                                slidesPerView: 2,
                                grid: {
                                        rows: 2,
                                },
                        },
                        // when window width is >= 640px
                        992: {
                                grid: {
                                        rows: 2,
                                },
                                slidesPerView: 3,
                        }
                },
        });
});