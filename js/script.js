$(document).ready(function () {

    /* calculator*/
    $('body').on("keyup", 'input[type=text]', function (event) {
        var v1 = parseFloat($(".value1").val());
        var v2 = parseFloat($(".value2").val());
        console.log(v1+ "  +  "+v2);
        $(".sum").html(v1 + v2);

    });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        var v1 = parseFloat($(".value1").val());
        var v2 = parseFloat($(".value2").val());
        console.log(v1+ "  -  "+v2);
        $(".sum").html(v1 + v2);
        return false;

    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        var v1 = parseFloat($(".value1").val());
        var v2 = parseFloat($(".value2").val());
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


    $('.fixtures_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
    });

})