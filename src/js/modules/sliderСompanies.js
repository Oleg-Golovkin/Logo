const sliderСompanies = () => {   
        
        const nextSlide = document.querySelectorAll(".slider-companies__next"),
        // Родитель слайдеров
       perantSlides = document.querySelector(".slider-companies__labels-wrapper"),
        // Все слайды
       slides = perantSlides.childNodes,
        // Кнопка назад
       previousSlide = document.querySelectorAll(".slider-companies__previous");
    

    // Весь механизм слайдера в этой функции. Без счетчика
    // Механизм следующий.
    function plusSlide() {
        nextSlide.forEach(nextSlide => {
            nextSlide.addEventListener('click', () => {
                // При нажатии кнопки вперед первый слайдер становится
                // назад и т.д. Каждый раз первый слайдер разный и который
                // становится назад и т.д. по очереди.
                // Для этого у родителя perantSlides добаляем назад append
                // его первый элемент slides[0]
                perantSlides.append(slides[0]);
            });
        });

        previousSlide.forEach(previousSlide => {
            previousSlide.addEventListener('click', () => {
                console.log("fsdfa");
                // При нажатии кнопки назад последний слайдер становится
                // вперед и т.д. Каждый раз последний слайдер будет новый.
                perantSlides.prepend(slides[slides.length - 1]);
            });
        });
    }
    plusSlide()
}
export default sliderСompanies