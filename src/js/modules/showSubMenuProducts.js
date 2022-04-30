const showSubMenuProducts = () => {
    const products = document.querySelectorAll('.product_products'),
        backgroundProducts = document.querySelectorAll('.background-products__wrapper'),
        basketProducts = document.querySelectorAll('.basket_products'),
        basketImgProducts = document.querySelectorAll('.basket__img_products'),
        productTitleProducts = document.querySelectorAll('.product__title_products'),
        productStockProducts = document.querySelectorAll('.product__stock_products'),
        productWrapperProducts = document.querySelectorAll('.product__wrapper_products'),
        productPriceBackground = document.querySelectorAll('.product__price_products'),
        main = document.querySelector('main');




    function activationBackgroundProducts(index) {
        backgroundProducts[index].classList.add('background-products__wrapper_active');
        // Пермещение отдельных элементов из меню в подменю
        backgroundProducts[index].append(basketProducts[index]);
        basketImgProducts[index].classList.add('basket__img_products-background');
        backgroundProducts[index].append(productWrapperProducts[index]);
        backgroundProducts[index].prepend(productTitleProducts[index]);
        productTitleProducts[index].classList.add('product__title_background');
        productTitleProducts[index].children[0].classList.add('product__span_background');
        productPriceBackground[index].classList.add('product__price_background');
        productStockProducts[index].classList.add('showFlex');
    }

    function deactivationBackgroundProducts(index) {
        backgroundProducts[index].classList.remove('background-products__wrapper_active');
        // Возвращение отдельных элементов из подменю обратно в меню
        basketImgProducts[index].classList.remove('basket__img_products-background');
        productWrapperProducts[index].prepend(basketProducts[index]);
        products[index].append(productTitleProducts[index]);
        products[index].append(productWrapperProducts[index]);
        productStockProducts[index].classList.remove('showFlex');
        productTitleProducts[index].classList.remove('product__title_background');
        productTitleProducts[index].children[0].classList.remove('product__span_background');
        productPriceBackground[index].classList.remove('product__price_background');
    }


    function showBackgroundProducts(index) {
        // Активация подменю    
        if (!backgroundProducts[index].matches('.background-products__wrapper_active')) {
            activationBackgroundProducts(index);
            // Скрытие подменю
        }
    }


    main.addEventListener('pointerdown', (e) => {
        products.forEach((product, i) => {
            deactivationBackgroundProducts(i);
            if (e.target.closest(".product_products") && e.target == product) {
                showBackgroundProducts(i);
            }
            if (!e.target.closest(".product_products")) {
                deactivationBackgroundProducts(i);
            }
        });

    });
    main.addEventListener('pointermove', (e) => {
        if (e.pointerType == "mouse") {
            products.forEach((product, i) => {
                if (e.target.closest(".product_products") && e.target == product) {
                    showBackgroundProducts(i);
                }
                if (!e.target.closest(".product_products")) {
                    deactivationBackgroundProducts(i);
                }
            });
        }
        console.log('pointermove');
    });



    // backgroundProducts[i].addEventListener('mouseout', (e) => {
    //     if (!e.target.closest('.background-products__wrapper')) {
    //         deactivationBackgroundProducts(i);
    //     }

    // });













};


export default showSubMenuProducts;