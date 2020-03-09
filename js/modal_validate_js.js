$(document).ready(function () {
    var link = $('.header_contact_btn');
    var modal = $('.modal1');
    var close = $('.modal1-close');
    var fade = $('.fade1');
    var close_btn = $('.btn-close');
    link.click(function () {
        modal.show();
        fade.show();
    })
    close.click(function () {
        modal.hide();
        fade.hide();
    })
    fade.click(function () {
        modal.hide();
        fade.hide();
    })
    close_btn.click(function () {
        modal.hide();
        fade.hide();
    })


    var link_2 = $('.left_btn_2');
    var modal_2 = $('.modal2');
    var close_2 = $('.modal2-close');
    var fade_2 = $('.fade2');
    var close_btn_2 = $('.btn-close_2');
    link_2.click(function () {
        modal_2.show();
        fade_2.show();
    })
    close_2.click(function () {
        modal_2.hide();
        fade_2.hide();
    })
    fade_2.click(function () {
        modal_2.hide();
        fade_2.hide();
    })
    close_btn_2.click(function () {
        modal_2.hide();
        fade_2.hide();
    })


    var link_3 = $('.form_btn');
    var link_btn_3 = $('.contact_form_btn');
    var modal_3 = $('.modal3');
    var close_3 = $('.modal3-close');
    var fade_3 = $('.fade3');
    var close_btn_3 = $('.btn-close_3');
    link_3.click(function () {
        modal_3.show();
        fade_3.show();
    })
    link_btn_3.click(function () {
        modal_3.show();
        fade_3.show();
    })
    close_3.click(function () {
        modal_3.hide();
        fade_3.hide();
    })
    fade_3.click(function () {
        modal_3.hide();
        fade_3.hide();
    })
    close_btn_3.click(function () {
        modal_3.hide();
        fade_3.hide();
    })


    var link_4 = $('.left_btn');
    var modal_4 = $('.modal4');
    var close_4 = $('.modal4-close');
    var fade_4 = $('.fade4');
    var close_btn_4 = $('.btn-close_4');
    link_4.click(function () {
        modal_4.show();
        fade_4.show();
    })
    close_4.click(function () {
        modal_4.hide();
        fade_4.hide();
    })
    fade_4.click(function () {
        modal_4.hide();
        fade_4.hide();
    })
    close_btn_4.click(function () {
        modal_4.hide();
        fade_4.hide();
    })


    var link_5 = $('.portfolio_btn');
    var modal_5 = $('.modal5');
    var close_5 = $('.modal5-close');
    var fade_5 = $('.fade5');
    var close_btn_5 = $('.btn-close_5');
    link_5.click(function () {
        modal_5.show();
        fade_5.show();
    })
    close_5.click(function () {
        modal_5.hide();
        fade_5.hide();
    })
    fade_5.click(function () {
        modal_5.hide();
        fade_5.hide();
    })
    close_btn_5.click(function () {
        modal_5.hide();
        fade_5.hide();
    })


    var link_6 = $('.experience_btn');
    var modal_6 = $('.modal6');
    var close_6 = $('.modal6-close');
    var fade_6 = $('.fade5');
    var close_btn_6 = $('.btn-close_6');
    link_6.click(function () {
        modal_6.show();
        fade_6.show();
    })
    close_6.click(function () {
        modal_6.hide();
        fade_6.hide();
    })
    fade_6.click(function () {
        modal_6.hide();
        fade_6.hide();
    })
    close_btn_6.click(function () {
        modal_6.hide();
        fade_6.hide();
    })


    var link_7 = $('.card_btn');
    var modal_7 = $('.modal7');
    var close_7 = $('.modal7-close');
    var fade_7 = $('.fade4');
    var close_btn_7 = $('.btn-close_7');
    link_7.click(function () {
        modal_7.show();
        fade_7.show();
    })
    close_7.click(function () {
        modal_7.hide();
        fade_7.hide();
    })
    fade_7.click(function () {
        modal_7.hide();
        fade_7.hide();
    })
    close_btn_7.click(function () {
        modal_7.hide();
        fade_7.hide();
    })


    var link_8 = $('.seo_btn');
    var modal_8 = $('.modal8');
    var close_8 = $('.modal8-close');
    var fade_8 = $('.fade8');
    var close_btn_8 = $('.btn-close_8');
    link_8.click(function () {
        modal_8.show();
        fade_8.show();
    })
    close_8.click(function () {
        modal_8.hide();
        fade_8.hide();
    })
    fade_8.click(function () {
        modal_8.hide();
        fade_8.hide();
    })
    close_btn_8.click(function () {
        modal_8.hide();
        fade_8.hide();
    })


    var link_9 = $('.advantages_btn');
    var link_10 = $('.box-btn');
    var link_11 = $('.progress_btn');
    var link_12 = $('.instrument_btn');
    var modal_9 = $('.modal9');
    var close_9 = $('.modal9-close');
    var fade_9 = $('.fade4');
    var close_btn_9 = $('.btn-close_9');
    link_9.click(function () {
        modal_9.show();
        fade_9.show();
    })
    link_10.click(function () {
        modal_9.show();
        fade_9.show();
    })
    link_11.click(function () {
        modal_9.show();
        fade_9.show();
    })
    link_12.click(function () {
        modal_9.show();
        fade_9.show();
    })
    close_9.click(function () {
        modal_9.hide();
        fade_9.hide();
    })
    fade_9.click(function () {
        modal_9.hide();
        fade_9.hide();
    })
    close_btn_9.click(function () {
        modal_9.hide();
        fade_9.hide();
    })

    $('.modal1_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
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
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },

        }
    });
    $('.modal2_form').validate({
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


        },
        messages: {
            name: {
                required: '*',
                minlength: '',
            },
            email: {
                required: '*',
                minlength: ' ',
                email: " "
            },

        }
    });
    $('.modal4_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            tel: {
                required: true,
                minlength: 2,
                tel: true
            },
            address: {
                required: true,
                minlength: 2,
            },


        },
        messages: {
            name: {
                required: '*',
                minlength: '',
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },
            address: {
                required: '*',
                minlength: ' ',
            },

        }

    });
    $('.modal5_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
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
                minlength: '',
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },


        }

    });
    $('.modal6_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            tel: {
                required: true,
                minlength: 2,
                tel: true
            },
            address: {
                required: true,
                minlength: 2,
            },


        },
        messages: {
            name: {
                required: '*',
                minlength: '',
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },
            address: {
                required: '*',
                minlength: ' ',
            },

        }

    });
    $('.modal7_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            tel: {
                required: true,
                minlength: 2,
                tel: true
            },
            address: {
                required: true,
                minlength: 2,
            },


        },
        messages: {
            name: {
                required: '*',
                minlength: '',
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },
            address: {
                required: '*',
                minlength: ' ',
            },

        }

    });
    $('.modal8_form').validate({
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
                minlength: '',
            },

            email: {
                required: '*',
                minlength: ' ',
            },

        }

    });
    $('.modal9_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
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
                minlength: '',
            },
            tel: {
                required: '*',
                minlength: ' ',
                tel: ''
            },

        }

    });
});