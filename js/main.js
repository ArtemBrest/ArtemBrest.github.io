$(document).ready(function () {
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_left_arrow"><img src="img/svg/reviews_top.svg" alt="" class="sl_left_arrow-icon"></div>',
        nextArrow: '<div class="sl_right_arrow"><img src="img/svg/reviews_bottom.svg" alt="" class="sl_right_arrow-icon"></div>  ',
        dots: true,
    });
    var accord = $(".head_content_course_mob .course_item");
    accord.find(".course_item_name:not(.active)").siblings("div").slideUp();
    accord.find(".course_item_name").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".course_item-icon").hasClass("icon_active")) {
            $(this).find(".course_item-icon").removeClass("icon_active");
        } else {
            $(this).find(".course_item-icon").addClass("icon_active");
        }
    });


    var btnMenu = $(".header_btn");
    var btnMenuLess = $(".header_other_icon_mob");
    var btnMenuProf = $(".header_other_profile");
    var menu = $(".header_menu");
    var menuLes = $(".header_menu_lessons");
    var menuProf = $(".header_menu_card_profile");
    var overlay = $(".menu-overlay");
    btnMenu.click(function () {
        menu.show(350);
        overlay.show(350);
    });
    btnMenuLess.click(function () {
        menuLes.show(350);
        overlay.show(350);
    });
    btnMenuProf.click(function () {
        menuProf.show(350);
        overlay.show(350);
        console.log("13")
    });
    $(".header_menu-close").click(function () {
        menu.hide(350);
        menuLes.hide(350);
        menuProf.hide(350);
        overlay.hide(350);
    })
    overlay.click(function () {
        menu.hide(350);
        btnMenu.removeClass("active");
        menuLes.hide(350);
        btnMenuLess.removeClass("active");
        overlay.hide(350);
        menuProf.hide(350);
        btnMenuProf.removeClass("active");
    });

    $('.Form_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 10,
            },

        },
        messages: {
            name: {
                required: 'Это поле являеться обязательным',
                minlength: ' '
            },
            email: {
                required: 'Это поле являеться обязательным'
            },
            phone: {
                required: 'Это поле являеться обязательным',
                minlength: 'Не вірно введено номер. Номер має містити 10 цифр.'
            },

        }
    });
    $('.registration_form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 10,
            },

        },
        messages: {
            name: {
                required: 'Это поле являеться обязательным',
                minlength: ' '
            },
            email: {
                required: 'Это поле являеться обязательным'
            },
            phone: {
                required: 'Это поле являеться обязательным',
                minlength: 'Не вірно введено номер. Номер має містити 10 цифр.'
            },

        }
    });

    jQuery(function ($) {
        $(".Form_form_input_phone").mask("+3 8(999) 999 99 99");
    });

    var accord = $(".course_accordion .accordion");
    accord.find(".accordion_top:not(.active)").siblings("div").slideUp();
    accord.find(".accordion_top").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        if ($(this).find(".course_item-icon").hasClass("icon_active")) {
            $(this).find(".course_item-icon").removeClass("icon_active");
        } else {
            $(this).find(".course_item-icon").addClass("icon_active");
        }
    });



    $('.relative_x').click(function () {
        $(this).find('.polygon_x').toggleClass('rotateArrow');
        $(this).find('.select__gap').toggleClass('whiteSelect');
        $(this).toggleClass('whiteSelectBackground');
    });

    $(document).mouseup(function (e) {
        // событие клика по веб-документу
        var div = $('.select__list'); // тут указываем ID элемента
        var div1 = $('.relative_x');
        if (
            !div1.is(e.target) && // если клик был не по нашему блоку
            div1.has(e.target).length === 0
        ) {
            // и не по его дочерним элементам
            div.slideUp(250); // скрываем его
            $('.select__gap').removeClass('whiteSelect');
            $('.relative_x').removeClass('whiteSelectBackground');
            $('.select__gap').removeClass('on');
            $('.polygon_x').removeClass('rotateArrow');
        }
    });
    $('.select_item_x').each(function () {
        // Variables
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 250;

        $this.hide();
        // Wrap all in select box
        $this.wrap('<div class="select"></div>');
        // Style box
        $('<div>', {
            class: 'select__gap',
            text: ' ',
        }).insertAfter($this);

        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>', {
            class: 'select__list',
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for (var i = 0; i < selectOptionLength; i++) {
            $('<li>', {
                class: 'select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text(),
                }),
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function () {
            if (!$(this).hasClass('on')) {
                $('.relative_x').removeClass('whiteSelectBackground');
                $('.select__list').css('display', 'none');
                selectList.slideDown(dur);
                $('.select__gap').removeClass('on');
                $(this).addClass('on');
                $('.select__gap').removeClass('whiteSelect');
                $('.polygon_x').removeClass('rotateArrow');

                selectItem.on('click', function () {
                    var chooseItem = $(this).data('value');

                    $(this)
                        .parent()
                        .parent()
                        .find('.select_item_x')
                        .val(chooseItem)
                        .attr('selected', 'selected');
                    //$('select option:contains("Selection 1")')
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });
    });
});