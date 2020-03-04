
$(document).ready(function () {
    $('.sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sl-nav'
    });
    $('.sl-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sl',
        prevArrow: '<img class="left_slick" src="img/png/left.png" alt="" >',
        nextArrow: '<img class="right_slick" src="img/png/right.png" alt="" >  ',
        dots: false,
        centerMode: true,
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



    jQuery(function($){
        $("#tel").mask("+375(99) 999-99-99");
        $("#telephone").mask("+375(99) 999-99-99");
    });




    $('#form').validate({
        rules:{
            name:{
                required: true,
                minlength:2
            },
            email:{
                required: true,
                minlength:2,
                email:true
            },
            address:{
                required: true,
                minlength:2,
                email:true
            },

        },
        messages:{
            name:{
                required: '*',
                minlength: 'Минимум 2 символа'
            },
            email:{
                required: '*',
                email: 'Ведите коректный email'
            },
            address:{
                required: '*',
                email: 'Ведите коректный address'
            },

        }
    });

    $(".contact_form_btn").click(function () {
        if( $('#contact_form').validate){
            $(".form_text_error").show();
        }

    })

    $('#contact_form').validate({

        rules:{
            name:{
                required: true,
                minlength:2
            },
            email:{
                required: true,
                minlength:2,
                email:true
            },
            tel:{
                required: true,
                minlength:2,
                tel:true
            },

        },
        messages:{
            name:{
                required: '*',
                minlength: 'Минимум 2 символа'
            },
            email:{
                required: '*',
                email: 'Ведите коректный email'
            },
            tel:{
                required: '*',
                tel: 'Ведите коректный телефон'
            },

        }

    });

    $('#disadvantages_form').validate({

        rules:{
            name:{
                required: true,
                minlength:2
            },
            address:{
                required: true,
                minlength:2,
                email:true
            },
            tel:{
                required: true,
                minlength:2,
                tel:true
            },

        },
        messages:{
            name:{
                required: '*',
                minlength: 'Минимум 2 символа'
            },
            address:{
                required: '*',
                email: 'Ведите коректный email'
            },
            tel:{
                required: '*',
                tel: 'Ведите коректный телефон'
            },

        }

    });

    var link  = $('.menu-link');
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