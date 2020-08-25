$(document).ready(function () {
    jQuery(function ($) {
        $("#phone").mask("+375(99) 999-99-99");
        $(".modal1_form-input-phone").mask("+375(99) 999-99-99");
    });
    $('.portfolio_sl').slick({
        centerMode: true,
        variableWidth: true,
        prevArrow: '<div class="sl_left_arrow"><img src="img/svg/left.svg" alt="" class="sl_left_arrow-icon"></div>',
        nextArrow: '<div class="sl_right_arrow"><img src="img/svg/right.svg" alt="" class="sl_right_arrow-icon"></div>  ',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });

    var btn = $(".partners_mob-btn");
    var ul = $(".partners_mob_ul");
    btn.click(function () {
        if (btn.hasClass("active")){
            btn.removeClass("active");
            btn.html("Показать всех заказчиков");
            ul.slideToggle(700);
        }
        else{
            btn.addClass("active");
            btn.html("Свернуть");
            ul.slideToggle(700);
        }
    })

    var modalClose = $(".mainModal-close");
    var modalFade = $(".fade");
    var modalThanks = $("#mainModal");
    var modalBtn = $(".modal-btn-close");

    modalClose.click(function () {
        modalClose.hide(350);
        modalFade.hide(350);
    });
    modalFade.click(function () {
        modalFade.hide(350);
        modalThanks.hide(350);
    });
    modalBtn.click(function () {
        modalThanks.hide(350);
        modalFade.hide(350);
    });
    $(function () {
        $('#form_box-btn').on("click", function () {
            // validate and process form here
            $('#mainForm').validate({
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
                    var name = $(".form_box_column-input-name").val(),
                        phone = $('.form_box_column-input-phone').val(),
                        address = $(".form_box_column-input-address").val()
                    var options = {
                        success: function (form) {
                            $('#mainForm')[0].reset();
                            $(".fade").show(350);
                            $(".modal").show(350);
                        },
                        type: "POST",
                        url: "post.php",
                        data: ({
                            action: 'plan_form',
                            name: name,
                            phone: phone,
                            address: address
                        }),
                    };
                    console.log(name + phone + address + "nen");
                    $(form).ajaxSubmit(options);
                })
            })
        });
    });
});
