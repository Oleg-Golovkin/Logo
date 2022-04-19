const sliderSale = () => {
    const slide = document.querySelectorAll(".slider-content__slide"),
        slider = document.querySelector(".slider-content__wrapper"),
        nextSlide = document.querySelector(".slider-content__next"),
        prevSlide = document.querySelector(".slider-content__prev"),
        sliderWrapper2 = document.querySelector(".slider-content__subWrapper"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        width = window.getComputedStyle(slider).width;
    let offset;
    
        nextSlide.addEventListener("click", (e) => {
            // offset = typeof(+width);/* .replace(/\w/g, ""); */
            offset = width.replace(/[^0-9.]/g, "");         
            console.log(offset);
            sliderWrapper2.style.transform = `translateX(-687px)`;
          

            // console.log("fs");
        });


};


export default sliderSale;