$(document).ready(function () {

    $('.icon_open').click(function () {
        //$(".header-mobile").addClass('header-mobile_active');
        $(".header-mobile").slideDown(300);
        $('body').addClass('body_overlay');
    });
    $('.icon-close').click(function () {
        //$(".header-mobile").removeClass('header-mobile_active');
        $(".header-mobile").slideUp(100);
        $('body').removeClass('body_overlay');
    });
    $('.icon_bottom.first').click(function () {
        $(this).siblings(".first_lvl_mob").stop().slideToggle(500);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    })
    $('.icon_bottom.second').click(function () {
        $(this).siblings(".second_lvl_mob").stop().slideToggle(500);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    })
    $('.sl_main').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        prevArrow: '<div class="sl_slider_item_left_arrow"><span class="icon-arrow-left"></span></div>',
        nextArrow: '<div class="sl_slider_item_right_arrow"><span class="icon-arrow-right"></span></div>  ',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 669,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $("#lightgallery").lightGallery();
})
