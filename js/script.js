$(document).ready(function () {
    /* Mob menu */
    var btnMenu = $(".header_mob_top_left");
    var menu = $(".header_mob_menu");
    var search = $(".header_mob_search");
    var btnSearch = $(".header_mob_top_right");
    var overlay = $(".menu-overlay");
    btnMenu.click(function () {
        if (btnMenu.hasClass("active")){
            btnMenu.removeClass("active");
            menu.fadeOut(350);
            overlay.fadeOut(350);
        }
        else{
            btnMenu.addClass("active");
            menu.fadeIn(350);
            overlay.fadeIn(350);
        }
    });
    btnSearch.click(function () {
        if (btnSearch.hasClass("active")){
            btnSearch.removeClass("active");
            search.fadeOut(350);
            overlay.fadeOut(350);
        }
        else{
            btnSearch.addClass("active");
            search.fadeIn(350);
            overlay.fadeIn(350);
        }
    })
    overlay.click(function () {
        menu.fadeOut(350);
        btnMenu.removeClass("active");
        btnSearch.removeClass("active");
        overlay.fadeOut(350);
        search.fadeOut(350);
    });
    /* end Mob menu */

    /*masked input*/
    jQuery(function ($) {
        $(".modal1_form-input-phone").mask("+375(99) 999-99-99");
    });
    /* end masked input*/

    /* my jquery submit*/
    (function( $ ) {
        $.fn.myPlugin = function() {
            $("#fade").fadeIn(350);
            $("#mainModal1").fadeIn(350);
            $('#modal1_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    phone: {
                        required: true,
                        minlength: 10,
                    },

                },
                messages: {
                    name: {
                        required: ' ',
                        minlength: ' '
                    },
                    phone: {
                        required: ' ',
                        minlength: ' '
                    },

                },
                submitHandler: (function (form) {
                    var name = $(".modal1_form-input-name").val(),
                        phone = $('.modal1_form-input-phone').val(),
                        message = $(".modal1_form-textarea").val()
                    var options = {
                        success: function (form) {
                            $('#modal1_form')[0].reset();
                            $("#mainModal1").fadeOut(350);
                            $(".modal").fadeIn(350);
                        },
                        type: "POST",
                        url: "/wp-admin/admin-ajax.php",
                        data: ({
                            action: 'plan_form',
                            name: name,
                            phone: phone,
                            message: message
                        }),

                    };
                    $(form).ajaxSubmit(options);
                })
            })
        };
    })(jQuery);
    /* end my jquery submit*/

    $(function () {
        $('.banner-btn').on("click", function () {
            // validate and process form here
            $(this).myPlugin();
        });
        $('.banner_line_group-btn').on("click", function () {
            // validate and process form here
            $(this).myPlugin();
        });
        $('.step_cards .card-btn').on("click", function () {
            // validate and process form here
            $(this).myPlugin();
        });
    });
    $(".fade").click(function () {
        $(".modal").fadeOut(350);
        $(".modal1").fadeOut(350);
        $(".fade").fadeOut(350);
    })
    $(".modal-btn-close").click(function () {
        $(".modal").fadeOut(350);
        $(".fade").fadeOut(350);
    })
    $(".mainModal-close").click(function () {
        $(".modal").fadeOut(350);
        $(".modal1").fadeOut(350);
        $(".fade").fadeOut(350);
    })
    $("#mainForm-btn").click(function () {
        $('#mainForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                email: {
                    required: true,
                    minlength: 5,
                },

            },
            messages: {
                name: {
                    required: ' ',
                    minlength: ' '
                },
                email: {
                    required: ' ',
                    minlength: ' '
                },

            },
            submitHandler: (function (form) {
                var name = $(".form_group_line-input-name").val(),
                    email = $('.form_group_line-input-email').val(),
                    message = $(".form_group_line-textarea").val()
                var options = {
                    success: function (form) {
                        $('#mainForm')[0].reset();
                        $(".modal").fadeIn(350);
                        $("#fade").fadeIn(350);
                    },
                    type: "POST",
                    url: "/wp-admin/admin-ajax.php",
                    data: ({
                        action: 'plan_form',
                        name: name,
                        email: email,
                        message: message
                    }),

                };
                $(form).ajaxSubmit(options);
            })
        })
    });
    $(".banner_sl").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $(".about_group_sl").slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_left_arrow"><img class="left_slick" src="img/png/left.png" alt="" ></div>',
        nextArrow: '<div class="sl_right_arrow"><img class="right_slick" src="img/png/right.png" alt="" ></div>  ',

    });
    $('.model_card_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.model_card_sl_nav'
    });
    $('.model_card_sl_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.model_card_sl',
        focusOnSelect: true,
        vertical: true,
        responsive: [
            /*{
                breakpoint: 1330,
                settings: {
                    slidesToShow: 2,
                    vertical:false
                }
            },*/
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    vertical:false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    vertical:false
                }
            }
        ]
    });

    $("#model_other").slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_left_arrow model_other"><img class="left_slick" src="img/png/left.png" alt="" ></div>',
        nextArrow: '<div class="sl_right_arrow model_other"><img class="right_slick" src="img/png/right.png" alt="" ></div>  ',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

var accord = $(".header_mob_menu_li");
$(function() {
    $("li[class='header_mob_menu_li']").each(function(indx, el){
        $(el).has(".header_mob_menu_ul_sub").length || $(el).find(".header_mob_menu_li_icon").remove();
        //$(el).has("ul").length || $(el).find("span").addClass("menu_li_icon icon-down");
        //console.log($(el).has("menu_sub-ul").length || $(el));
    });
});
if (accord.find(".line").parent().is(':has(ul)')){
    accord.find(".line").parent(".header_mob_menu_li").addClass("has-child");
}
accord.find(".line:not(.active)").siblings("ul").slideUp();
accord.find(".line").on("click", function () {
    $(this).siblings("ul").stop().slideToggle(500);
    if ($(this).parent().is(':has(ul)')){
        $(this).parent(".header_mob_menu_li").addClass("has-child");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    }
    else
        console.log("not ul");
});