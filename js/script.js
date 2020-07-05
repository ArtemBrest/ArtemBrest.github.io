$(document).ready(function () {
    $('.sliderMain').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.popularModel_cards').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.otherModel_cards').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".portfolio_slider").not(":first").hide();
    $(".wrapper .portfolio_nav_li").click(function() {
        $(".wrapper .portfolio_nav_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".portfolio_slider").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $('.portfolio_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.portfolio_sl_nav'
    });
    $('.portfolio_sl_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_nav_top_arrow"><img class="up_slick" src="img/png/up.png" alt="" ></div>',
        nextArrow: '<div class="sl_nav_bottom_arrow"><img class="down_slick" src="img/png/down.png" alt="" ></div>  ',
        asNavFor: '.portfolio_sl',
        focusOnSelect: true,
        vertical:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    vertical:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    vertical:false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    vertical:false
                }
            }
        ]
    });
    $('.comments_item').slick({
        dots: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.documents_cards').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var accord = $(".menu_li");
    var up = $(".icon");
    accord.find(".line:not(.active)").siblings("ul").slideUp();
    accord.find(".line").on("click", function () {
        $(this).siblings("ul").stop().slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".icon").hasClass("icon_active")) {
            $(this).find(".icon").removeClass("icon_active");
        } else {
            $(this).find(".icon").addClass("icon_active");
        }
    });


    $('.model_card_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.model_card_sl_nav'
    });
    $('.model_card_sl_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_nav_top_arrow"><img class="up_slick" src="img/png/up.png" alt="" ></div>',
        nextArrow: '<div class="sl_nav_bottom_arrow"><img class="down_slick" src="img/png/down.png" alt="" ></div>  ',
        dots: false,
        asNavFor: '.model_card_sl',
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    vertical:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    vertical:false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    vertical:false
                }
            }
        ]
    });


    $(".main_text").not(":first").hide();
    $(".wrapper .model_tabs_ul_li").click(function() {
        $(".wrapper .model_tabs_ul_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".main_text").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");




    var accord = $(".header_mobile_menu_li");
    var up = $(".header_mobile_menu_group");
    accord.find(".header_mobile_menu_group:not(.active)").siblings("ul").slideUp();
    accord.find(".header_mobile_menu_group").on("click", function () {
        $(this).siblings("ul").stop().slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    $('.header_mobile_menu_line').click(function () {
        $('.header_mobile_menu_overlay').slideToggle(500);
    })


});
