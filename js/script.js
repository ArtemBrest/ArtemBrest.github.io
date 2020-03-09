$(document).ready(function () {
    $('.sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sl-nav'
    });
    $('.sl-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sl',
        prevArrow: '<img class="left_slick" src="img/png/left.png" alt="" >',
        nextArrow: '<img class="right_slick" src="img/png/right.png" alt="" >  ',
        dots: false,
        focusOnSelect: true
    });


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


    jQuery(function ($) {
        $("#tel").mask("+375(99) 999-99-99");
        $("#telephone").mask("+375(99) 999-99-99");
        $("#input_modal_tel").mask("+375(99) 999-99-99");
        $("#modal4_tel").mask("+375(99) 999-99-99");
        $("#modal5_tel").mask("+375(99) 999-99-99");
        $("#modal6_tel").mask("+375(99) 999-99-99");
    });


    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 2,
                email: true
            },
            address: {
                required: true,
                minlength: 4,
                // address:true
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            email: {
                required: '*',
                email: ' ',
                minlength: ' '
            },
            address: {
                required: '*',
                minlength: ' ',
                address: ' '
            },

        }
    });

    $(".contact_form_btn").click(function () {
        if ($('#contact_form').validate) {
            $(".form_text_error").show();
        }

    })
    $(".form_btn_top").click(function () {
        if ($('#form').validate){
            $(".form_text_error").show();
        }
    })
    $(".form_disAdv_btn").click(function () {
        if ($('#disadvantages_form').validate){
            $(".form_text_error").show();
        }
    })

    $('#contact_form').validate({

        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 4,
                email: true
            },
            tel: {
                required: true,
                minlength: 2,
                tel: true
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            email: {
                required: '*',
                minlength: ' ',
                email: ' '
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ' '
            },

        }

    });

    $('#disadvantages_form').validate({

        rules: {
            name: {
                required: true,
                minlength: 2
            },
            address: {
                required: true,
                minlength: 4,
                address: true
            },
            tel: {
                required: true,
                minlength: 2,
                tel: true
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' ',
                name: ' '
            },
            address: {
                required: '*',
                minlength: ' ',
                address: ''
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },

        }

    });

    var link = $('.menu-link');
    var menu = $('.menu');
    var nav = $('.menu a');
    link.click(function () {
        link.toggleClass("menu-link_active")
        menu.toggleClass("menu_active")
    })
    nav.click(function () {
        link.toggleClass("menu-link_active")
        menu.toggleClass("menu_active")
    })
});