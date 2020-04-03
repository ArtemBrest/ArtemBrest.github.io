$(document).ready(function () {
     /*Mob menu*/
    $(".menu-link").click(function() {
        $(".headerMenu_mobile").slideDown(300);
    });
    $(".menu-link_active").click(function() {
        $(".headerMenu_mobile").slideUp(300);
    });
    /* end Mob menu*/

    /*validate form*/
    $('.modal2_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 2,
            },

        },
        messages: {
            name: {
                required: '*',
                minlength: ' '
            },
            email: {
                required: '*',
                minlength: ' '
            },
        }
    });
    $('.modal3_form').validate({
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
    /* end validate form*/


    /* modal windows*/
    var link = $('.header_desktop_email_link');
    var modal = $('.modal2');
    var close = $('.modal2-close');
    var close_btn = $('.modal2_form_btn');
    var fade = $('.fade2');
    link.click(function () {
        modal.show();
        fade.show();
    })
    close.click(function () {
        modal.hide();
        fade.hide();
    })
   /* close_btn.click(function () {
        modal.hide();
        fade.hide();
    })*/
    fade.click(function () {
        modal.hide();
        fade.hide();
    })
    var link_2 = $('.header_desktop_mobile_link');
    var modal_2 = $('.modal3');
    var close_2 = $('.modal3-close');
    var close_btn_2 = $('.modal3_form_btn');
    var fade_2 = $('.fade3');
    link_2.click(function () {
        modal_2.show();
        fade_2.show();
    })
    close_2.click(function () {
        modal_2.hide();
        fade_2.hide();
    })
    /*close_btn_2.click(function () {
        modal_2.hide();
        fade_2.hide();
    })*/
    fade_2.click(function () {
        modal_2.hide();
        fade_2.hide();
    })
    /* end modal windows*/


    /*maska*/
    jQuery(function ($) {
        $("#modal3_tel").mask("+375(99) 999-99-99");
    });
    /* end maska*/




});