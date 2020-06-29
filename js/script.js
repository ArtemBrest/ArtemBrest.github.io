$(document).ready(function () {
    $('.sliderMain').slick({
        dots: true,
        slidesToShow: 1,
    });
    $('.popularModel_cards').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
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

    });
    $(".tab_content_box").not(":first").hide();
    $(".wrapper .portfolio_nav_li").click(function() {
        $(".wrapper .portfolio_nav_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_content_box").hide().eq($(this).index()).fadeIn();
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
            vertical: true,
            focusOnSelect: true
        });
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
        vertical: true,
        focusOnSelect: true
    });
    $('.comments_item').slick({
        dots: true,
        slidesToShow: 2,
    });
    $('.documents_cards').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 3
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
        focusOnSelect: true,
        asNavFor: '.model_card_sl',
        vertical: true,
    });


    $(".main_text").not(":first").hide();
    $(".wrapper .model_tabs_ul_li").click(function() {
        $(".wrapper .model_tabs_ul_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".main_text").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

});
