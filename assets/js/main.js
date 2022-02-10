$ (function () {

    // Слайдер

    $('.slider').slick({
        // prevArrow: '<button class="slider__arrow slider__arrow_prev"></button>',
        nextArrow:'<button class="slider__arrow slider__arrow_next"></button>' ,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


    // Cпойлер
    
    $('.reference__btn').click(function() {
        if($('.reference__list').hasClass('one')){
            $('.reference__btn').not($(this)).removeClass('active');
            $('.reference__content').not($(this).next()).slideUp(500);
        }
        $(this).toggleClass('active').next().slideToggle(500);
    })

    




























}) // End JQ