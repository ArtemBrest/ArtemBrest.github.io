$(document).ready(function () {

    /*Mob menu*/
    $(".menu-link").click(function() {
        $(".headerMenu_mobile").slideDown(300);
    });
    $(".menu-link-active").click(function() {
        $(".headerMenu_mobile").slideUp(300);
    });
    /* end Mob menu*/


    /*Mob menu*/


    var Mob_menu = $(".MobMenu_li_top");
    Mob_menu.find(".MobMenu_link:not(.active)").siblings("div").slideUp();
    Mob_menu.find(".MobMenu_link").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".icon_up").hasClass("icon_up_active")) {
            $(this).find(".icon_up").removeClass("icon_up_active");
        } else {
            $(this).find(".icon_up").addClass("icon_up_active");
        }
    });
    /* end Mob menu*/


    /* big menu slider*/
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
         $(".sum").html(v1 + v2 + v3 + v4 +" p.");
         $('.modal_input1').val(v1);
         $('.modal_input2').val(v2);
         $('.modal_input3').val(v3);
         $('.modal_input4').val(v4);

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
        $(".sum").html(v1 + v2 + v3 + v4 +" p.");
        $('.modal_input1').val(v1);
        $('.modal_input2').val(v2);
        $('.modal_input3').val(v3);
        $('.modal_input4').val(v4);
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
        $(".sum").html(v1 + v2 + v3 + v4 +" p.");
        $('.modal_input1').val(v1);
        $('.modal_input2').val(v2);
        $('.modal_input3').val(v3);
        $('.modal_input4').val(v4);
        return false;
    });
    var v1 = parseFloat($(".value1").val());
    var v2 = parseFloat($(".value2").val());
    var v3 = parseFloat($(".value3").val());
    var v4 = parseFloat($(".value4").val());
    $(".sum").html(v1 + v2 + v3 + v4 +" p.");
    $('.modal_input1').val(v1);
    $('.modal_input2').val(v2);
    $('.modal_input3').val(v3);
    $('.modal_input4').val(v4);






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
        focusOnSelect: true,
        responsive: [
            {
                breakpoint:  768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
            /*{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }*/
        ]
    });
    /* end comment slider*/


    $("#tabs").tabs({
        active: 0
    });

    /* comment*/
    var description = $(".priew_description");
    description.find(".description_table_link:not(.active)").siblings(".ul").slideUp();
    description.find(".description_table_link").on("click", function () {
        $(this).siblings(".ul").stop().slideToggle(500);

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
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    /* end lamp slider*/



    jQuery(function ($) {
        $("#telephone").mask("+375(99) 999-99-99");
        $("#phone_calculator").mask("+375(99) 999-99-99");
        $("#phone_modal1").mask("+375(99) 999-99-99");
        $("#phone_modal2").mask("+375(99) 999-99-99");
        $("#assortment_phone").mask("+375(99) 999-99-99");

    });



    /* Modal validate*/
    $('.form_assort').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7,
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            phone: {
                required: '*',
                minlength: ' '
            },

        }
    });
    $('.form-contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7,
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            phone: {
                required: '*',
                minlength: ' '
            },

        }
    });
    $('.calcul_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7,
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            phone: {
                required: '*',
                minlength: ' '
            },

        }
    });
    $('.mainModal1_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7,
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            phone: {
                required: '*',
                minlength: ' '
            },

        }
    });
    $('.mainModal2_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7,
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            phone: {
                required: '*',
                minlength: ' '
            },

        }
    });


    $('.price_btn').click(function () {
        $(".form_h1").html("Заказать потолок");
        var link_2 = $('.price_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
            modal_2.show(350);
            fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.sale_card-btn').click(function () {
        $(".form_h1").html("Получить скидку 5%");
        var link_2 = $('.sale_card-btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
            modal_2.show(350);
            fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.description_table_btn').click(function () {
        $(".form_h1").html("Получить скидку 10%");
        var link_2 = $('.description_table_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
            modal_2.show(350);
            fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.stage_btn').click(function () {
        $(".form_h1").html("Вызвать замерщика");
        var link_2 = $('.stage_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
            modal_2.show(350);
            fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.stage_foot_btn').click(function () {
        $(".form_h1").html("Вызвать замерщика");
        var link_2 = $('.stage_foot_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
            modal_2.show(350);
            fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.sale_banner_info_btn').click(function () {
        $(".form_h1").html("Получить скидку 15%");
        var link_2 = $('.sale_banner_info_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
            modal_2.show(350);
            fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.cat_banner_btn').click(function () {
        $(".form_h1").html("Получить скидку 15% на вид потолка");
        var link_2 = $('.cat_banner_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
        modal_2.show(350);
        fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.portfolio_btn').click(function () {
        $(".form_h1").html("Оставить заявку");
        var link_2 = $('.portfolio_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
        modal_2.show(350);
        fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.cat_price_btn').click(function () {
        $(".form_h1").html("Оставить заявку");
        var link_2 = $('.cat_price_btn');
        var modal_2 = $('.modal1');
        //var close_2 = $('.modal3-close');
        var close_btn_2 = $('.form_btn-close');
        var fade_2 = $('.fade1');
        modal_2.show(350);
        fade_2.show(350);
        /*close_btn_2.click(function () {
            modal_2.hide();
            fade_2.hide();
        })*/
        fade_2.click(function () {
            modal_2.hide(350);
            fade_2.hide(350);
        })
    })
    $('.form_cal_btn').click(function () {
        $(".form_h1").html("Заявка на потолок");
        //var link_2 = $('.form_cal_btn');
        var modal_3 = $('.modal2');
        //var close_2 = $('.modal3-close');
        var close_btn_3 = $('.form_btn-close');
        var fade_3 = $('.fade2');
        modal_3.show(350);
        fade_3.show(350);
        /*close_btn_3.click(function () {
            modal_3.hide();
            fade_3.hide();
        })*/
        fade_3.click(function () {
            modal_3.hide(350);
            fade_3.hide(350);
        })
    })





    /* end  Modal validate*/


})
