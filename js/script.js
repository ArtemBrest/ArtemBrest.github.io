$(document).ready(function () {
    /* menu */
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
    });
    /*  end menu */


    jQuery(function ($) {
        $(".main_form_group_item-input-phone").mask("+375(99) 999-99-99");
        $(".form_group_item-input-phone").mask("+375(99) 999-99-99");
        $(".modal1_form-input-phone").mask("+375(99) 999-99-99");
    });

    $(function () {
        $('#main_form-btn').on("click", function () {
            $('#main_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    phone: {
                        required: true,
                        minlength: 7,
                    },
                    address: {
                        required: true,
                        minlength: 2,
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
                    address: {
                        required: ' ',
                        minlength: ' '
                    },

                },
                submitHandler: (function (form) {
                    var name = $(".main_form_group_item-input-name").val(),
                        phone = $(".main_form_group_item-input-phone").val(),
                        address = $('.main_form_group_item-input-address').val(),
                        message = $(".main_form_group_item-input-message").val()
                    var options = {
                        success: function (form) {
                            $('#main_form')[0].reset();
                            $(".modal").fadeIn(350);
                            $(".fade").fadeIn(350);
                        },
                        type: "POST",
                        url: "send.php",
                        data: ({
                            action: 'plan_form',
                            name: name,
                            phone: phone,
                            address: address,
                            message: message
                        }),
                    };
                    $(form).ajaxSubmit(options);
                })
            })
        });
        $('.form-btn').on("click", function () {
            $('#step_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    phone: {
                        required: true,
                        minlength: 7,
                    },
                    address: {
                        required: true,
                        minlength: 2,
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
                    address: {
                        required: ' ',
                        minlength: ' '
                    },

                },
                submitHandler: (function (form) {
                    var name = $(".form_group_item-input-name").val(),
                        phone = $(".form_group_item-input-phone").val(),
                        address = $('.form_group_item-input-address').val(),
                        message = $(".form_group_item-input-message").val()
                    var options = {
                        success: function (form) {
                            $('#step_form')[0].reset();
                            $(".modal").fadeIn(350);
                            $(".fade").fadeIn(350);
                        },
                        type: "POST",
                        url: "send.php",
                        data: ({
                            action: 'plan_form',
                            name: name,
                            phone: phone,
                            address: address,
                            message: message
                        }),
                    };
                    $(form).ajaxSubmit(options);
                })
            })
        });
        $('.header_btn').on("click", function () {
            // validate and process form here
            $(".fade").show(350);
            $("#mainModal1").show(350);
            $('#modal1_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    phone: {
                        required: true,
                        minlength: 7,
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
                            $("#mainModal1").hide(350);
                            $(".modal").show(350);
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
        });
        $('.header_mobile_menu_info-btn').on("click", function () {
            // validate and process form here
            $(".fade").show(350);
            $("#mainModal1").show(350);
            $('#modal1_form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                    },
                    phone: {
                        required: true,
                        minlength: 7,
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
                            $("#mainModal1").hide(350);
                            $(".modal").show(350);
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
        });
    });


    $(".project_cards").lightGallery({
        selector: '.card'
    });
    $("#lightgallery_project").lightGallery({
        selector: '.card'
    });


    $(".project_content_group").not(":first").hide();
    $(".project_nav_li").click(function() {
        $(".project_nav_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".project_content_group").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");


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
    });
});
