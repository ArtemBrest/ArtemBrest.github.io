$(document).ready(function () {
    jQuery(function ($) {
        $("#phone").mask("+375(99) 999-99-99");
        $(".modal1_form-input-phone").mask("+375(99) 999-99-99");
    });
    $('.portfolio_sl').slick({
        centerMode: true,
        variableWidth: true,
        prevArrow: '<div class="sl_left_arrow"><img src="img/svg/left.svg" alt="" class="sl_left_arrow-icon"></div>',
        nextArrow: '<div class="sl_right_arrow"><img src="img/svg/right.svg" alt="" class="sl_right_arrow-icon"></div>  ',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });

    var btn = $(".partners_mob-btn");
    var ul = $(".partners_mob_ul");
    btn.click(function () {
        if (btn.hasClass("active")){
            btn.removeClass("active");
            btn.html("Показать всех заказчиков");
            ul.slideToggle(700);
        }
        else{
            btn.addClass("active");
            btn.html("Свернуть");
            ul.slideToggle(700);
        }
    })
});