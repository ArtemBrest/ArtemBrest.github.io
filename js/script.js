$(document).ready(function () {
    $(".sum").html(parseFloat($(".value1").val()) + parseFloat($(".value2").val()) + parseFloat($(".value3").val()) + parseFloat($(".value4").val()));
    $('body').on("keyup", 'input[type=text]', function (event) {
        const step = 1;
        $('.minus').click(function () {
            var v1 = parseFloat($(".value1").val());
            var v2 = parseFloat($(".value2").val());
            var v3 = parseFloat($(".value3").val());
            var v4 = parseFloat($(".value4").val());
            var $input1 = $(this).parent().find('.value1');
            var $input2 = $(this).parent().find('.value2');
            var $input3 = $(this).parent().find('.value3');
            var $input4 = $(this).parent().find('.value4');
            var count1 = parseInt($input1.val()) - step;
            var count2 = parseInt($input2.val()) - step;
            var count3 = parseInt($input3.val()) - step;
            var count4 = parseInt($input4.val()) - step;
            //count = count < 1 ? 0 : count;
            $input1.val(count1);
            $input1.change();
            $input2.val(count2);
            $input2.change();
            $input3.val(count3);
            $input3.change();
            $input4.val(count4);
            $input4.change();
            $(".sum").html(v1 + v2 + v3 + v4);
            return false;
        });
        $('.plus').click(function () {
            var v1 = parseFloat($(".value1").val());
            var v2 = parseFloat($(".value2").val());
            var v3 = parseFloat($(".value3").val());
            var v4 = parseFloat($(".value4").val());
            var $input1 = $(this).parent().find('.value1');
            var $input2 = $(this).parent().find('.value2');
            var $input3 = $(this).parent().find('.value3');
            var $input4 = $(this).parent().find('.value4');
            var count1 = parseInt($input1.val()) + step;
            var count2 = parseInt($input2.val()) + step;
            var count3 = parseInt($input3.val()) + step;
            var count4 = parseInt($input4.val()) + step;
            $input1.val(count1);
            $input1.change();
            $input2.val(count2);
            $input2.change();
            $input3.val(count3);
            $input3.change();
            $input4.val(count4);
            $input4.change();
            $(".sum").html(v1 + v2 + v3 + v4);
            return false;

        });
        var v1 = parseFloat($("#value1").val());
        var v2 = parseFloat($("#value2").val());
        var v3 = parseFloat($("#value3").val());
        var v4 = parseFloat($("#value4").val());
        console.log(v1+v2+v3+v4);
        $(".sum").html(v1 + v2 + v3 + v4);

    })


    $('.sl').slick({
        dots: true
    });
})