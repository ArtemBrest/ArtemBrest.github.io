$(document).ready(function () {

    /* big menu slider*/
    $('.column_menu_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.slider_calculator').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    /* end big menu slider*/
    /* calculator*/
     $('body').on("keyup", 'input[type=text]', function (event) {
         var v1 = parseFloat($(".value1").val());
         var v2 = parseFloat($(".value2").val());
         var v3 = parseFloat($(".value3").val());
         var v4 = parseFloat($(".value4").val());
         console.log(v1+ "  +  "+v2);
         $(".sum").val(v1 + v2 + v3 + v4 +" p.");

     });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        var v1 = parseFloat($(".value1").val());
        var v2 = parseFloat($(".value2").val());
        var v3 = parseFloat($(".value3").val());
        var v4 = parseFloat($(".value4").val());
        console.log(v1 + "  -  " + v2);
        $(".sum").val(v1 + v2 + v3 + v4 +" p.");
        return false;

    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        var v1 = parseFloat($(".value1").val());
        var v2 = parseFloat($(".value2").val());
        var v3 = parseFloat($(".value3").val());
        var v4 = parseFloat($(".value4").val());
        console.log(v1 + "  +  " + v2);
        $(".sum").val(v1 + v2 + v3 + v4 +" p.");
        return false;
    });
    var v1 = parseFloat($(".value1").val());
    var v2 = parseFloat($(".value2").val());
    var v3 = parseFloat($(".value3").val());
    var v4 = parseFloat($(".value4").val());
    $(".sum").val(v1 + v2 + v3 + v4 +" p.");


    /* banner slick*/
    $('.sl').slick({
        dots: true
    });
    /* end banner slick*/

    /* comment slider*/
    $('.sl_Main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sl_nav'
    });
    $('.sl_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sl_Main',
        prevArrow: '<div class="sl_nav_left_arrow"><img class="left_slick" src="img/png/left.png" alt="" ></div>',
        nextArrow: '<div class="sl_nav_right_arrow"><img class="right_slick" src="img/png/right.png" alt="" ></div>  ',
        dots: false,
        focusOnSelect: true
    });
    /* end comment slider*/

    /* comment*/
    var description = $(".priew_description");
    description.find(".description_table_link:not(.active)").siblings("div").slideUp();
    description.find(".description_table_link").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    /* end comment*/


    /* accordion*/
    var accord = $(".accordion");
    var up = $(".icon");
    accord.find(".title:not(.active)").siblings("div").slideUp();
    accord.find(".title").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);

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
    /*end accordion*/

    /* lamp slider*/
    $('.fixtures_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
    });
    /* end lamp slider*/



    jQuery(function ($) {
        $("#telephone").mask("+375(99) 999-99-99");
        $("#phone_calculator").mask("+375(99) 999-99-99");
        $("#phone_modal1").mask("+375(99) 999-99-99");
    });


})
