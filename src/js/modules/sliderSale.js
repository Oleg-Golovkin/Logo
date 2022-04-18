const sliderSale = () => {
    const slide = document.querySelectorAll(".content__slide"),
        slider = document.querySelector(".content__slider"),
        nextSlide = document.querySelector(".content__slider-next"),
        prevSlide = document.querySelector(".content__slider-prev"),
        sliderWrapper2 = document.querySelector(".content__slider-wrapper-2"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        width = window.getComputedStyle(slider).width;

     // Табы создал через цикл. Все табы загнал в этот массив,
    // чтобы иметь возможность работать с ними через их индекс
    let liArrey = [];
    //1. Обязательные переменные
    let offset = 0,
        //  счетчик смещенения +560px Использую для смещения слайдов
        slideIndex = 1;
    //   счетчик слайдов. Использую в табло

    //Необязательный блок. Присваиваю стили
    slider.style.position = "relative";
    sliderWrapper2.style.width = `${slide.length * 100}%`;
    sliderWrapper2.style.transition = '0.5s all';

    //Необязательный блок. Табло счетчика слайдеров в формате 01.
    if (slide.length < 10) {
        //  Подставляет цифрцу к счетчику, чтобы формат 
        //  номера был 01
        total.textContent = `0${slide.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        //  Общее количество слайдов, через показ
        //   длины массива слайов
        total.textContent = slide.length;
        //   Номер текущего слайда
        current.textContent = slideIndex;
    }

    //2. Обязательный блок. Движение слайдов вперед. Содержит необязательные элементы.
    nextSlide.addEventListener('click', () => {
        //   Ограничитель движения слайда. +width.replace(/\D/g, "")
        //  это превращает 560px строка в 560 число
        if (offset == Math.round((+width.replace(/\D/g, "") * (slide.length - 1)))) {
            offset = 0;
        } else {
            //   При листании вперед к offset прибавляется ширина следующего блока width.
            //   В width защита ширна слайда в виде строки “560px”, а нужно цифрой 560 без px. Поэтому offset //преобразую из строки в число (+whith) и отнимаю у этого числа два последних символа 
            offset += Math.round(+width.replace(/\D/g, ""));
        }

        console.log(offset);
        console.log(+width.replace(/\D/g, ""));
        console.log(width);

        sliderWrapper2.style.transform = `translateX(-${offset}px)`;

        //Необязательный блок. Счетчик слайдов
        if (slideIndex == slide.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        //3. Порядковый таб загарается соответственно порядковому номеру показываемого слайда
        //   Механизм: перебором все стили едины. Переменная из счетчика подставляется 
        //   в качестве индекса загараемого таба.
        liArrey.forEach(li => li.style.opacity = "0.5");
        liArrey[slideIndex - 1].style.opacity = "1";

        //Необязательный блок если слайдов меньше 10, то формат номера
        //01
        if (slide.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    });

    //4. Кнопка движения назад. Действия аналогичны движению вперед.
    prevSlide.addEventListener('click', () => {
        if (offset == 0) {
            offset = Math.round((+width.replace(/\D/g, "") * (slide.length - 1)));
        } else {
            offset = Math.round((+width.replace(/\D/g, "")));
        }
        sliderWrapper2.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slide.length;
        } else {
            slideIndex--;
        }

        liArrey.forEach(li => li.style.opacity = "0.5");
        liArrey[slideIndex - 1].style.opacity = "1";

        if (slide.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    });


    //5. Все, что ниже - это относится к создаюнию табов, нажатию на них и показу //соответствующего слайда, синхронизации счетчика слайдов и переменению слайдов не //через нажатия на соответствующие кнопки, а нажатию на таб. 
    //Загорание табов прописал в событии движений слайдов выше.

    //    5.1. Создаю список
    const ol = document.createElement("ol");
    //    5.2. Присваиваю в нему класс
    ol.classList.add("carousel-indicators");
    //    5.3. Посмещаю в нужное место
    slider.append(ol);

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

    //     5.5 Смещение слайда на тот, который по порядку соответствует нажимаемому 
    // индикатору. 

    liArrey.forEach(li => {
        li.addEventListener('click', () => {
            //            Получаю атрибут каждого из индикаторов
            let Attribute = li.getAttribute("data-carousel-indicators");
            //            Присваиваю к уже созданной переменной slideIndex. Даты-атрибут начинаются
            //            с 1, как и переменная slideIndex, так что действия будут ожидаемы
            slideIndex = Attribute;
            //            Для получение слайда не по порядку, а мгновенно, умножаю ширину слайда на  
            //            slideIndex и таким образом получается ширина нужного для перемещения 
            //            слайда.
            offset = Math.round((+width.replace(/\D/g, "") * (Attribute - 1)));
            sliderWrapper2.style.transform = `translateX(-${offset}px)`;
            liArrey.forEach(li => li.style.opacity = "0.5");
            li.style.opacity = "1";
            if (slide.length < 10) {
                current.textContent = `0${+slideIndex}`;
            } else {
                current.textContent = +slideIndex;
            }
        });
    });
    


};


export default sliderSale;