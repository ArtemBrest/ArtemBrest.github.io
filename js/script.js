$(document).ready(function () {
    $('.association_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.calendar_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    var btnMenu = $(".header_mobile_top_block");
    var menu = $(".header_mobile_menu");
    var overlay = $(".menu-overlay");
    btnMenu.click(function () {
        if (btnMenu.hasClass("active")){
            btnMenu.removeClass("active");
            menu.hide(350);
            overlay.hide(350);
        }
        else{
            btnMenu.addClass("active");
            menu.show(350);
            overlay.show(350);
        }
    });
    overlay.click(function () {
        menu.hide(350);
        btnMenu.removeClass("active");
        overlay.hide(350);
    })


    $(function () {
        $('.main_form-btn').on("click", function () {
            $('.main_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    email: {
                        required: true,
                        email: true,
                    },

                },
                messages: {
                    name: {
                        required: ' ',
                        minlength: ' '
                    },
                    email: {
                        required: ' ',
                        email: ' '
                    },

                },
                submitHandler: (function (form) {
                    var name = $(".main_form_item-input-name").val(),
                        email = $('.main_form_item-input-email').val(),
                        message = $(".main_form_item-textarea").val()
                    var options = {
                        success: function (form) {
                            $('.main_form')[0].reset();
                            $(".modal").fadeIn(350);
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
        /*$('.header_btn_link').on("click", function () {
            $(".fade").fadeIn(350);
            $(".modal1").fadeIn(350);
            $('.modal1_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    email: {
                        required: true,
                        email: true,
                    },

                },
                messages: {
                    name: {
                        required: ' ',
                        minlength: ' '
                    },
                    email: {
                        required: ' ',
                        email: ' '
                    },

                },
                submitHandler: (function (form) {
                    var name = $("modal1_form-input-name").val(),
                        email = $('modal1_form-input-email').val(),
                        message = $(".modal1_form-textarea").val()
                    var options = {
                        success: function (form) {
                            $('.modal1_form')[0].reset();
                            $(".modal").show(350);
                            $(".modal1").fadeOut(350);
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
        });*/
    });


    $(".modal-btn-close").click(function () {
        $(".fade").hide(350);
        $("#mainModal").hide(350);
    });
    $(".fade").click(function () {
        $(".fade").hide(350);
        $("#mainModal").hide(350);
        $("#mainModal1").hide(350);
    });
    $(".mainModal-close").click(function () {
        $(".fade").hide(350);
        $("#mainModal").hide(350);
    });
    $(".modal1-close").click(function () {
        $(".fade").hide(350);
        $("#mainModal1").hide(350);
    })

});
