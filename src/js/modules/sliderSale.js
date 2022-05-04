// Кнопки + Табы + Сенсор

// Блоки (их можно удалять):
// счетчик
// кнопки,
// табы
// сенсорное взаимодействие

// Не обязательный блок - если его убрать, остальные блоки работают.
const sliderSale = ({
    slideSelector,
    sliderParentSelector,
    sliderSelector,
    subWrapperSelector,
    totalSelector = null,
    currentSelector = null,
    nextSlideSelector = null,
    prevSlideSelector = null,
    // Вкл/откл. табов через присваивание true/false
    tabs,
    // Вкл/откл. счетчика
    counter,
    // Вкл/откл. кнопок переключения
    btn,
    // Вкл/откл. переключения слайдов сенсором        
    touch,
}) => {
    /* Слайды */
    const slide = document.querySelectorAll(slideSelector),
        // Оболочка слайдов, табло счетчика и кнопок
        sliderParent = document.querySelector(sliderParentSelector),
        // Родитель сладов с фиксированной шириной
        slider = document.querySelector(sliderSelector),
        //Непосредственный родитель сладов с ширинной, умноженной на количество
        // слайдов    
        subWrapper = document.querySelector(subWrapperSelector),
        total = document.querySelector(totalSelector),
        current = document.querySelector(currentSelector),
        nextSlide = document.querySelector(nextSlideSelector),
        prevSlide = document.querySelector(prevSlideSelector),
        widthSlideString = window.getComputedStyle(slider).width,
        // В widthString  получается строка “560px”
        // В некоторых случаях ширина изменяется на, например, 559,1px
        //  и возникает ошибка.
        // Поэтому в коде ниже превращаем widthSlideString в цифру + и округляем
        //  до целых Math.round , получается число 560 или 559
        // Только так, поскольку при адаптации размер слайдера меняется
        widthSlide = Math.round(+widthSlideString.replace(/[^0-9,.]/g, ""));



    //1.------------------------Обязательные переменные---------------------//
    //  счетчик смещенения +560px Использую для смещения слайдов 
    // в кнопках, табах, свайпах
    let offset = 0,
        //   счетчик слайдов. Использую в табло. 
        index = 1,
        // Табы создал через цикл. Все табы загнал в этот массив,
        // чтобы иметь возможность работать с ними через их индекс
        liArrey = [],

        //----------------------Переменные для сенсорного взаимодействия---------------/

        // Координаты касания пальца однажды
        offsetStatick = 0,
        // Координаты движения пальца
        offsetDinamic = 0,
        // движения - касания = расстояние, пройденное пальцем 
        setStatickDinamic = 0,
        // расстояние, пройденное пальцем, + последнее значение offset
        // чтобы движение слайда начиналось с последнего значения
        offsetTouch = 0;


    //-------Слайдер адаптивный----------Обязательный блок----------//
    //   равна сумме ширин всех его слайдов
    subWrapper.style.width = `${slide.length * 100}% `;





    //-------------------Счетчик----------Не обязательный блок---//
    //Необязательный блок. Табло счетчика слайдеров в формате 01.
    function counterPlusZero(i) {
        if (counter) {
            if (i < 10) {
                // Если слайдов на табло меньше 10, то формат 01 
                current.textContent = `0${i}`;
                // Исключение для общего количетсва слайдов, чтобы не было
                // например, 016.
                if (slide.length > 9) {
                    total.textContent = `${slide.length}`;
                } else {
                    total.textContent = `0${slide.length}`;
                }
                // В остальных случаях формат 1 без нуля
            } else {
                current.textContent = `${i}`;
                total.textContent = `${slide.length}`;
            }
        }
    }
    // Сразу отображается на странице
    counterPlusZero(index);
    // Изменение табло счетчика слайдов. Подставил везде, 
    // где изменяется index слайдов или аналогичные цифры (пункт 4), 
    // чтобы была синхронность подсчета
    function counterPlus(i) {
        if (counter) {
            if (i > slide.length) {
                index = 1;
                current.textContent = `${index}`;
            }
            if (i < 1) {
                index = slide.length;
                current.textContent = `0${slide.length}`;
            }
        }
    }




    //2.---------------------------Кнопки-------Не--обязательный блок-----------//
    if (btn) {
        //Движение слайдов вперед. Содержит необязательные элементы.
        nextSlide.addEventListener("click", (e) => {
            // Переключение слайдов
            offset += widthSlide;
            //   Ограничитель движения слайда. +width.replace(/\D/g, "")
            //  это превращает 560px строка в 560 число
            if (offset > (widthSlide *
                    slide.length - 1)) {
                offset = 0;
            }
            //   При листании вперед к offset прибавляется ширина следующего блока width.
            //   В width защита ширна слайда в виде строки “560px”, а нужно 
            //     цифрой 560 без px. Поэтому offset //преобразую 
            //     из строки в число (+whith) и отнимаю у этого числа
            //      два последних символа 
            subWrapper.style.transform = `translateX(-${offset}px)`;
            if (counter) {
                // Переключение счетчика слайдов
                index++;
                counterPlus(index);
                // Формат счетчика 01 или 1
                counterPlusZero(index);
            }
            if (tabs) {
                // Снятие активности со всех табов
                liArrey.forEach((item) => {
                    item.style.opacity = '0.5';
                });
                // Подсветка активного таба
                liArreyAddOpacity(index - 1);
            }
        });
        // Кнопка движения назад. Действия аналогичны движению вперед.
        prevSlide.addEventListener("click", (e) => {
            // Переключение слайдов
            offset -= widthSlide;
            if (offset < 0) {
                offset = widthSlide * slide.length - 1;
            }
            subWrapper.style.transform = `translateX(-${offset}px)`;
            if (counter) {
                // Переключение счетчика слайдов
                index--;
                counterPlus(index);
                // Формат счетчика 01 или 1
                counterPlusZero(index);
            }
            if (tabs) {
                // Снятие активности со всех табов
                liArrey.forEach((item) => {
                    item.style.opacity = '0.5';
                });
                // Подсветка активного таба
                liArreyAddOpacity(index - 1);
            }
        });
    }



    //3.-----------------Табы--------Не обязательный блок----------------//

    // Подсветка активного таба листания слайда. Подставил везде,
    // где есть переборы с задействованием активного слайда
    function liArreyAddOpacity(i) {
        if (tabs) {
            liArrey[i].style.cssText = `background: url(../icons/slider-sale/${i + 1}.png) center center/cover no-repeat;`;
            liArrey[i].textContent = ``;
        }
    }


    // Все  табы слайдов прозрачные. Подставил везде,
    // где есть переборы, чтобы охватить все табы
    function liArreyRemoveOpacity(i) {
        if (tabs) {
            liArrey[i].style.cssText = `background: url(../icons/slider-sale/${0}.png) center center/cover no-repeat;`;
            liArrey[i].textContent = `${i + 1}`;
        }
    }
    if (tabs) {
        //3. Все, что ниже - это относится к создаюнию табов, нажатию на них и показу //соответствующего слайда, синхронизации счетчика слайдов и переменению слайдов не //через нажатия на соответствующие кнопки, а нажатию на таб. 
        //Загорание табов прописал в событии движений слайдов выше.

        // Создание индикаторов перелистывания
        // Создание ol
        //    3.1. Создаю список
        const ol = document.createElement("ol");
        sliderParent.append(ol);
        ol.classList.add("slider-content__dots");
        // Создание li
        //   3.2. Элементы списка создаю через цикл, заканчивающийся
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

        const list = document.querySelectorAll("#slider-content .slider-content__dot");

        // Не обязательный блок. Чтобы первый таб сразу был активным
        //  offset = 1
        liArreyAddOpacity(offset);


        //   3.3 Смещение слайда на тот, который по порядку
        //  соответствует нажимаемому индикатору.
        // Особенность листания слайдов! 
        //  Выше, при нажатии на кнопку - ширина
        // добаляется постеменно, суммируясь сама на себя!
        // Сдесь же смещаю присваиванием ширины слайда умноженную на индекс
        // нажимаего таба, который соответствует общему количству слайдов! 
        // Т.е. нажимаю на третий таб, в итоге `translateX(-${560px * 3}px)`;
        // и сразу перемещаемся на третий слайд.   
        list.forEach((item, num) => {
            //   Событие на каждый элемент списка            
            item.addEventListener('click', (e) => {

                offset = widthSlide;
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
                        if (counter) {
                            counterPlus(index);
                            // Формат счетчика 01 или 11
                            counterPlusZero(index);
                        }
                        if (tabs) {
                            liArreyAddOpacity(b);
                        }

                    }
                });
            });
        });
    }


    //4----------------------Сенсорное взаимодействие-------Свайпы--------touch----//
    // Вкл/откл. сенсора    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        touch = true;

    } else {
        touch = false;
    }

    if (touch) {
        //---При касании пальцем----//
        slider.addEventListener("pointerdown", (e) => {
            e.preventDefault();
            // Чтобы срабатывало только при касании с одного пальца и без мыши
            // Если второе касание, то e.isPrimary = false    
            if (e.isPrimary && e.pointerType != "mouse") {
                // 4.1. Только в момент касания получаем начальную точку 
                // отсчета касания польца, чтобы
                // динамически в пунктах 4.2 - 4.3 получать пройденный путь пальца
                offsetStatick = e.clientX;
            }
        });

        //---При движении пальцем----//
        slider.addEventListener("pointermove", (e) => {
            e.preventDefault();
            // Чтобы срабатывало только при касании с одного пальца и без мыши
            // Если второе касание, то e.isPrimary = false 
            if (e.isPrimary && e.pointerType != "mouse") {
                // 4.2. Постоянно получаем пройденный путь
                offsetDinamic = e.clientX;
                // 4.3 Расстояние, пройденное польцем в пикселях
                // (отнимаем от координат начальной точки координаты
                // пройденной точки). Влево свайп число с плюсом,
                // вправо - отрицательное значение 
                setStatickDinamic = offsetStatick - offsetDinamic;
                //  4.4. когда еще раз двигаем пальцем, то прибавляем к пройденному
                //  пути offset. При первом косании offset = 0, а далее -
                // при нажатии на кнопку, таб, сенсорно offset перезаписывается.
                // Таким образом, мы двигаем слайд от offset - последнего положения
                offsetTouch = offset + setStatickDinamic;
               // если -${10} (свайп вперед), то translateX воспринимает эти данные, а если 
                //-${-10} (свайп назад), то слайд не двигается. Поэтому в else записал 
                //-offsetTouch   фактически тоже самое.               
                if (offsetTouch > 0) {
                    subWrapper.style.transform = `translateX(-${offsetTouch}px)`;
                } else {
                    subWrapper.style.transform = `translateX(${-offsetTouch}px)`;
                }
            }
        });

        // Если просто касаемся пальцем, слайды не листаются.        
        slider.addEventListener('pointerdown', (e) => {
            if (e.isPrimary && e.pointerType != "mouse") {
                setStatickDinamic = 0;
            }
        });


        //---Палец убрали----//        
        slider.addEventListener("pointerleave", (e) => {
            e.preventDefault();
            // Чтобы срабатывало только при касании с одного пальца и без мыши
            // Если второе касание, то e.isPrimary = false 
            if (e.isPrimary && e.pointerType != "mouse") {
                // 4.5. Если пальцем провели больше 1/5 ширины слайда слайда - он перелистывается
                // (если ширина пройденного пути равна 1/5 ширине слайда). Особенность!
                // Если один раз свайпнули вперед, а далее нажимаем, то будет листать вперед.
                // Также назад. Это связано с тем, что в setStatickDinamic сохраняется длинна
                // последнего свайпа, соответственно будет срабатывать тот if в какую сторону
                // листали. Короче, чем выше цифра, тем меньше надо провести пальцем, чтобы
                // автоматически перелистнуть слайд
                if (setStatickDinamic > widthSlide / 5) {
                    // К семещению прибавляем ширину слайда
                    offset += widthSlide;
                    // Перезаписываем пройденный путь пальца, иначе смещение будет 
                    // пройденный путь + ширина слайда - не ровно встанет. Нужно, чтобы
                    // была только ширина offset слайда           
                    subWrapper.style.transform = `translateX(-${offset}px)`;
                } else {
                    // В остальных случаях немоного двигаем слайд и возвращаем в первоначальное
                    // положение offset Без прибавления к нему ширины
                    subWrapper.style.transform = `translateX(-${offset}px)`;
                    //    Счетчик табов  
                }
                // В обратную сторону
                if (setStatickDinamic < ((widthSlide / 5) * -1)) {
                    offset -= widthSlide;
                    subWrapper.style.transform = `translateX(-${offset}px)`;
                } else {
                    subWrapper.style.transform = `translateX(-${offset}px)`;
                }

                // Переполнение листаний вперед
                if (offset > (widthSlide *
                        slide.length - 1)) {
                    offset = 0;
                    subWrapper.style.transform = `translateX(-${offset}px)`;
                }

                // Переполнение листаний назад
                if (offset < 0) {
                    offset = widthSlide *
                        (slide.length - 1);
                    subWrapper.style.transform = `translateX(-${offset}px)`;
                }

                if (tabs) {
                    // Снятие активности со всех табов
                    slide.forEach((item, i) => {
                        liArreyRemoveOpacity(i);

                    });
                    // Подсветка активного таба
                    // Получаю индекс таба не черзе index, а
                    //  через деление прокрученной ширины на начальную 
                    // ширину каждого слайда Итог. 1 2 3 4
                    liArreyAddOpacity(offset / widthSlide);
                }

                if (counter) {
                    //    Счетчик табов. 
                    counterPlus((offset / widthSlide) + 1);
                    // Формат счетчика 01 или 1
                    counterPlusZero((offset / widthSlide) + 1);
                    // Чтобы там, где счетчик считает через index была
                    // синхронность подсчета
                    index = (offset / widthSlide) + 1;
                }
            }
        });
    }
};
export default sliderSale;