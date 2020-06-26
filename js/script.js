$(document).ready(function () {
    $('.sliderMain').slick({
        dots: true,
        slidesToShow: 1,
    });
    $('.popularModel_cards').slick({
        dots: true,
        slidesToShow: 4,

    });
    $(".tab_content_box").not(":first").hide();
    $(".wrapper .portfolio_nav_li").click(function() {
        $(".wrapper .portfolio_nav_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_content_box").hide().eq($(this).index()).fadeIn();

    }).eq(0).addClass("active");
    $('.portfolio_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio_sl_nav'
    });
    $('.portfolio_sl_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_nav_top_arrow"><img class="up_slick" src="img/png/up.png" alt="" ></div>',
        nextArrow: '<div class="sl_nav_bottom_arrow"><img class="down_slick" src="img/png/down.png" alt="" ></div>  ',
        asNavFor: '.portfolio_sl',
        vertical: true,
    });
    $('.comments_item').slick({
        dots: true,
        slidesToShow: 2,
    });
    $('.documents_cards').slick({
        dots: true,
        slidesToShow: 5,
    });

});
