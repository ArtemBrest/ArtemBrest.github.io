$(document).ready(function () {

    /* calculator*/
   /* $('body').on("keyup", 'input[type=text]', function (event) {
        var v1 = parseFloat($(".value1").val());
        var v2 = parseFloat($(".value2").val());
        console.log(v1+ "  +  "+v2);
        $(".sum").html(v1 + v2);

    });*/
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        var v1 = parseFloat($(this).prev(".value1").val());
        var v2 = parseFloat($(this).prev(".value2").val());
        console.log(v1+ "  -  "+v2);
        $(".sum").html(v1 + v2);
        return false;

    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        var v1 = parseFloat($(this).next(".value1").val());
        var v2 = parseFloat($(this).next(".value2").val());
        console.log(v1+ "  +  "+v2);
        $(".sum").html(v1 + v2);
        return false;
    });
    var v1 = parseFloat($(".value1").val());
    var v2 = parseFloat($(".value2").val());
    $(".sum").html(v1 + v2);




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
        asNavFor: '.sl-nav'
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
    $(".description_table_link").click(function () {
        var block =$(".hide_description");
        if(block.hasClass("active")){
            block.removeClass("active");
            block.slideToggle(500);
        }
        else{
            block.addClass("active");
            block.slideToggle(500);
        }
    })
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




})
