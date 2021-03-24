$(document).ready(function () {
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_left_arrow"><img src="img/svg/reviews_top.svg" alt="" class="sl_left_arrow-icon"></div>',
        nextArrow: '<div class="sl_right_arrow"><img src="img/svg/reviews_bottom.svg" alt="" class="sl_right_arrow-icon"></div>  ',
        dots: true,
    });
});