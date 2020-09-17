$(document).ready(function () {

    $('.banner_contact_form_group_line-select').each(function(){
        // Variables
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 500;

        $this.hide();
        // Wrap all in select box
        $this.wrap('<div class="select"></div>');
        // Style box
        $('<div>',{
            class: 'select__gap',
            text: 'Выберите марку',

        }).insertAfter($this);


        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select__list'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select__item',
                html: $('<span>',{
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        $('.select__gap').append('<img src="img/png/select.png" alt="" class="select__gap-img">')
        selectGap.on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                selectList.slideDown(dur);
                selectItem.on('click', function(){
                    var chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                    $('.select__gap').append('<img src="img/png/select.png" alt="" class="select__gap-img">')
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });

    $('.service_cards').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="sl_left_arrow"><img src="img/svg/left.svg" alt="" class="sl_left_arrow-icon"></div>',
        nextArrow: '<div class="sl_right_arrow"><img src="img/svg/right.svg" alt="" class="sl_right_arrow-icon"></div>  ',
        responsive: [
            {
                breakpoint: 1331,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    var btn = $(".portfolio-btn");
    var ul = $(".portfolio_cards_other");
    btn.click(function () {
        if (btn.hasClass("active")){
            btn.removeClass("active");
            btn.html("Показать больше объектов");
            ul.slideToggle(700);
        }
        else{
            btn.addClass("active");
            btn.html("Свернуть");
            ul.slideToggle(700);
        }
    });

    $("#portfolio_gallery").lightGallery({
        selector: '.card'
    });
    $("#document_box").lightGallery({
        selector: '.item'
    });
    $("#services_gallery").lightGallery({
        selector: '.card'
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

});
