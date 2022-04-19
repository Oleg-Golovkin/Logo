const sliderSale = () => {
    const slide = document.querySelectorAll(".slider-content__slide"),
        sliderParent = document.querySelector(".slider-content"),
        slider = document.querySelector(".slider-content__wrapper"),
        subWrapper = document.querySelector(".slider-content__subWrapper"),
        nextSlide = document.querySelector(".slider-content__next"),
        prevSlide = document.querySelector(".slider-content__prev"),        
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        width = window.getComputedStyle(slider).width;
    let offset = 0,
        index = 1,
        liArrey = [];
        

    subWrapper.style.width = `${slide.length * 100}% `;
    

    function counterPlusZero(i) {
        if (i < 10) {
            current.textContent = `0${i}`;
            if (slide.length > 9) {
                total.textContent = `${slide.length}`;
            } else {
                total.textContent = `0${slide.length}`;
            }
        } else {
            current.textContent = `${i}`;
            total.textContent = `${slide.length}`
        }
    }
    counterPlusZero(index);

    function counterPlus(i) {
        if (i > slide.length) {
            index = 1;
            current.textContent = `${index}`;
        }
        if (i < 1) {
            index = slide.length;
            current.textContent = `0${slide.length}`;
        }
    }

    nextSlide.addEventListener("click", (e) => {

        // Переключение слайдов
        offset += Math.round(+width.replace(/[^0-9,.]/g, ""));

        if (offset > (Math.round(+width.replace(/[^0-9,.]/g, "")) *
                slide.length - 1)) {
            offset = 0;
        };
        subWrapper.style.transform = `translateX(-${offset}px)`;

        // Переключение счетчика слайдов
        index++;
        counterPlus(index);
        // Формат счетчика 01 или 11
        counterPlusZero(index);

        liArrey.forEach(li => li.style.opacity = "0.5");
        liArrey[index - 1].style.opacity = "1";


    });

    prevSlide.addEventListener("click", (e) => {
        // Переключение слайдов
        offset -= Math.round(+width.replace(/[^0-9,.]/g, ""));
        if (offset < 0) {
            offset = Math.round(+width.replace(/[^0-9,.]/g, "")) *
                (slide.length - 1);
        };
        subWrapper.style.transform = `translateX(-${offset}px)`;
        // Переключение счетчика слайдов
        index--;
        counterPlus(index);
        // Формат счетчика 01 или 11
        counterPlusZero(index);
    });


    //5. Все, что ниже - это относится к создаюнию табов, нажатию на них и показу //соответствующего слайда, синхронизации счетчика слайдов и переменению слайдов не //через нажатия на соответствующие кнопки, а нажатию на таб. 
    //Загорание табов прописал в событии движений слайдов выше.

    //    5.1. Создаю список
    const ol = document.createElement("ol");
    //    5.2. Присваиваю в нему класс
    ol.classList.add("carousel-indicators");
    //    5.3. Посмещаю в нужное место
    sliderParent.append(ol);

    //    5.3. Элементы списка создаю через цикл, заканчивающийся
    //    тогда, когда закончатся слайды i < slide.length. Это удобно, поскольку
    //   верстка эластична – в зависимости от количества слайдов.
    for (let i = 0; i < slide.length; i++) {
        const li = document.createElement("li");
        //     Начальное значение индекса = 1, чтобы было единообразие,
        //     атрибуты также начинаются с 1, а не с цифры 0, поэтому i + 1
        li.setAttribute("data-carousel-indicators", i + 1);
        li.classList.add("dot");
        ol.append(li);
        if (i == 0) {
            li.style.opacity = "1";
        }
        //     5.4. Все элементы списка поместил в пустой массив, чтобы иметь возможность
        //     работать через их индекс с каждым элементом.   
        liArrey.push(li);
    }
    //     5.5 Смещение слайда на тот, который по порядку соответствует нажимаемому //индикатору. 

    liArrey.forEach(li => {
        li.addEventListener('click', () => {
            //            Получаю атрибут каждого из индикаторов
            let Attribute = li.getAttribute("data-carousel-indicators");
            //            Присваиваю к уже созданной переменной slideIndex. Даты-атрибут начинаются
            //            с 1, как и переменная slideIndex, так что действия будут ожидаемы
            index = Attribute;
            //            Для получение слайда не по порядку, а мгновенно, умножаю ширину слайда на  
            //            slideIndex и таким образом получается ширина нужного для перемещения 
            //            слайда.
            offset = +width.replace(/[^0-9,.]/g, "") * (Attribute - 1);
            subWrapper.style.transform = `translateX(-${offset}px)`;
            liArrey.forEach(li => li.style.opacity = "0.5");
            li.style.opacity = "1";
            if (slide.length < 10) {
                current.textContent = `0${+index}`;
            } else {
                current.textContent = +index;
            }
        });
    });




};


export default sliderSale;