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
});