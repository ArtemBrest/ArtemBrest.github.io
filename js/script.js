$(document).ready(function () {
    $('.pagesSlider').slick({
        dots: false,
        infinite: false,
        speed: 600,
        arrows: false,
        draggable: false,
        slidesToShow: 1,
        swipe: false,
        slidesToScroll: 1
    });

    $('.page_slider1 .intro-btn').on('click', function() {
        $('.pagesSlider').slick('slickNext');
    });

    $('.arrow-next').on('click', function() {
        $('.pagesSlider').slick('slickNext');
    });
    $(".finish-btn").on('click', function() {
        $('.pagesSlider').slick('slickNext');
    });

    $('.arrow-prev').on('click', function() {
        $('.pagesSlider').slick('slickPrev');
    });
    if($(".intro_src").hasClass("center")){
        console.log('1')
        $(".screen_compact").hide();
        $(".screen_left").hide();
    }
    else if($(".intro_src").hasClass("compact")){
        console.log('2')
        $(".screen_center").hide();
        $(".screen_left").hide();
    }
    else{
        $(".screen_compact").hide();
        $(".screen_center").hide();
    }
});