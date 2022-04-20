const sliderSale = () => {
    const slide = document.querySelectorAll(".slider-content__slide"),
        sliderParent = document.querySelector(".slider-content"),
        slider = document.querySelector(".slider-content__wrapper"),
        subWrapper = document.querySelector(".slider-content__subWrapper"),
        width = window.getComputedStyle(slider).width;
    //  Здесь получается строка “560px”
    // В некоторых случаях ширина изменяется на, например, 559,1px
    //  и возникает ошибка.
    // Поэтому в коде ниже превращаем ее в цифру + и округляем
    //  до целых Math.round 
    // Только так, поскольку при адаптации размер слайдера меняется

    //1. Обязательные переменные
    let offset = 0,
        //  счетчик смещенения +560px Использую для смещения слайдов
        index = 1,
        //   счетчик слайдов. Использую в табло.     
        liArrey = [];
    // Табы создал через цикл. Все табы загнал в этот массив,
    // чтобы иметь возможность работать с ними через их индекс


    //Обязательный блок. Чтобы ширина слайдера была равна сумме ширин всех его слайдов
    subWrapper.style.width = `${slide.length * 100}% `;
    

    // Подсветка активного таба листания слайда. Подставил везде,
    // где есть переборы с задействованием активного слайда
    function liArreyAddOpacity(i) {        
        liArrey[i].style.cssText = `background: url(../icons/slider-sale/${i + 1}.png) center center/cover no-repeat;`;
        liArrey[i].textContent = ``;
        
    }

    // Все  табы слайдов прозрачные. Подставил везде,
    // где есть переборы, чтобы охватить все табы
    function liArreyRemoveOpacity(i) {
        liArrey[i].style.cssText = `background: url(../icons/slider-sale/${0}.png) center center/cover no-repeat;`;     
        liArrey[i].textContent = `${i + 1}`;        
    }

    
    //4. Все, что ниже - это относится к создаюнию табов, нажатию на них и показу //соответствующего слайда, синхронизации счетчика слайдов и переменению слайдов не //через нажатия на соответствующие кнопки, а нажатию на таб. 
    //Загорание табов прописал в событии движений слайдов выше.

    // Создание индикаторов перелистывания
    // Создание ol
    //    4.1. Создаю список
    const ol = document.createElement("ol");
    sliderParent.append(ol);
    ol.classList.add("slider-content__dots");
    // Создание li
    //   4.2. Элементы списка создаю через цикл, заканчивающийся
    //    тогда, когда закончатся слайды i < slide.length. Это удобно, поскольку
    //   верстка эластична – в зависимости от количества слайдов.
    for (let i = 0; i < slide.length; i++) {
        const li = document.createElement("li");
        li.classList.add("slider-content__dot");        
        liArrey.push(li);
        ol.append(li);
        // Не обязательный блок. Чтобы все табы сразу были прозрачные
        liArreyRemoveOpacity(i);         
    }

    const list = document.querySelectorAll(".slider-content__dot");

    // Не обязательный блок. Чтобы первый таб сразу был активным
    //  offset = 1
    liArreyAddOpacity(offset);

    //   4.3 Смещение слайда на тот, который по порядку
    //  соответствует нажимаемому индикатору.
    // Особенность листания слайдов! 
    //  Выше, при нажатии на кнопку - ширина
    // добаляется постеменно, суммируясь сама на себя!
    // Сдесь же смещаю присваиванием ширины слайда умноженную на индекс
    // нажимаего таба, который соответствует общему количству слайдов! 
    // Т.е. нажимаю на третий таб, в итоге `translateX(-${560px * 3}px)`;
    // и сразу перемещаемся на третий слайд.   
    liArrey.forEach((item, num) => {
        //   Событие на каждый элемент списка            
        item.addEventListener('click', (e) => {
        
            offset = Math.round(+width.replace(/[^0-9,.]/g, ""));
//             Перебираю слайды для того, чтобы синхоизировать нажимаемый таб с
//  соответствющим слайдом
            slide.forEach((Slide, b) => {
    // При каждом нажатии удаляю со всех табов класс активности
                liArreyRemoveOpacity(b);
    // Если индекс нажимаегого таба равен индексу слайда
                if (num == b) {
    // Смещаю слайд по принципу, описанному в шапке пункта 4.
                    offset = offset * num;
                    subWrapper.style.transform = `translateX(-${offset}px)`;
    // Активирую таб соответствующему слайду
    // Присваиваю к index счетчика индекс нажатого таба, чтобы была
    // синхронность подсчета, поскольку эта переменная используется
    // при листании через кнопу. Следовательно, чтобы туда записался
    // синхронный номер подсчета
                    index = num + 1;
    // Присваиваю индекс нажатого таба, поскольку необходим подсчет,
    // начинающийся с цифры 0
                    liArreyAddOpacity(b);                  
                }
            });
        });
    });
};


export default sliderSale;