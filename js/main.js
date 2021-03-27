$(document).ready(function () {
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_left_arrow"><img src="img/svg/reviews_top.svg" alt="" class="sl_left_arrow-icon"></div>',
        nextArrow: '<div class="sl_right_arrow"><img src="img/svg/reviews_bottom.svg" alt="" class="sl_right_arrow-icon"></div>  ',
        dots: true,
    });
    var accord = $(".head_content_course_mob .course_item");
    accord.find(".course_item_name:not(.active)").siblings("div").slideUp();
    accord.find(".course_item_name").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".course_item-icon").hasClass("icon_active")) {
            $(this).find(".course_item-icon").removeClass("icon_active");
        } else {
            $(this).find(".course_item-icon").addClass("icon_active");
        }
    });


    var btnMenu = $(".header_btn");
    var menu = $(".header_menu");
    var overlay = $(".menu-overlay");
    btnMenu.click(function () {
        menu.show(350);
        overlay.show(350);
    });
    $(".header_menu-close").click(function () {
        menu.hide(350);
        overlay.hide(350);
    })
    overlay.click(function () {
        menu.hide(350);
        btnMenu.removeClass("active");
        overlay.hide(350);
    });

    $('.Form_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 10,
            },

        },
        messages: {
            name: {
                required: 'Это поле являеться обязательным',
                minlength: ' '
            },
            email: {
                required: 'Это поле являеться обязательным'
            },
            phone: {
                required: 'Это поле являеться обязательным',
                minlength: 'Не вірно введено номер. Номер має містити 10 цифр.'
            },

        }
    });
    $('.registration_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 10,
            },

        },
        messages: {
            name: {
                required: 'Это поле являеться обязательным',
                minlength: ' '
            },
            email: {
                required: 'Это поле являеться обязательным'
            },
            phone: {
                required: 'Это поле являеться обязательным',
                minlength: 'Не вірно введено номер. Номер має містити 10 цифр.'
            },

        }
    });
    jQuery(function ($) {
        $(".Form_form_input_phone").mask("+3 8(999) 999 99 99");
    });

    var accord = $(".course_accordion .accordion");
    accord.find(".accordion_top:not(.active)").siblings("div").slideUp();
    accord.find(".accordion_top").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".course_item-icon").hasClass("icon_active")) {
            $(this).find(".course_item-icon").removeClass("icon_active");
        } else {
            $(this).find(".course_item-icon").addClass("icon_active");
        }
    });
});