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
    if($(".intro_src").hasClass("left")){
        $(".screen_compact").hide();
        $(".screen_center").hide();
    }
    else if($(".intro_src").hasClass("compact")){
        $(".screen_center").hide();
        $(".screen_left").hide();
    }
    else{
        $(".screen_left").hide();
        $(".screen_compact").hide();
    }
    $(window).resize(function() {
        if($(window).width() <= 845 ){
            if($(".intro_src").hasClass("left")){
                $(".screen_compact").hide();
                $(".screen_left").hide();
                $(".screen_center").show();
                $(".intro_src").removeClass("left");
            }
            else if($(".intro_src").hasClass("compact")){
                $(".screen_compact").hide();
                $(".screen_left").hide();
                $(".screen_center").show();
                $(".intro_src").removeClass("compact");
            }
            $('.pagesSlider').slick('slickSetOption', 'adaptiveHeight', true, true);
        }
    });
    if($(window).width() <= 845 ){
        if($(".intro_src").hasClass("left")){
            $(".screen_compact").hide();
            $(".screen_left").hide();
            $(".screen_center").show();
            $(".intro_src").removeClass("left");
        }
        else if($(".intro_src").hasClass("compact")){
            $(".screen_compact").hide();
            $(".screen_left").hide();
            $(".screen_center").show();
            $(".intro_src").removeClass("compact");
        }
        $('.pagesSlider').slick('slickSetOption', 'adaptiveHeight', true, true);
    }
});