$(document).ready(function () {

    $("#project_cards_preview").lightGallery({
        selector: '.card'
    });

    /* accordion*/
    var accord = $(".accordion");
    var up = $(".icon");
    accord.find(".accordion_top:not(.active)").siblings($(".accordion_content")).slideUp();
    accord.find(".accordion_top").on("click", function () {
        $(this).siblings($(".accordion_content")).stop().slideToggle(500);
        //$(this).parent(accord).find(".accordion_content").addClass("active")
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".accordion_top-span").hasClass("active")) {
            $(this).find(".accordion_top-span").removeClass("active");
        } else {
            $(this).find(".accordion_top-span").addClass("active");
        }
    });
    /*end accordion*/

    /* Mob menu */
    var btnMenu = $(".header_top_mobile_block");
    var menu = $(".header_menu_mobile");
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
    overlay.click(function () {
        menu.fadeOut(350);
        btnMenu.removeClass("active");
        overlay.fadeOut(350);
    });
    /* end Mob menu */

    /*masked input*/
    jQuery(function ($) {
        $(".modal1_form-input-phone").mask("+1-999-999-9999");
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
    })
});