$(document).ready(function () {
    $('.pagesSlider').slick({
        dots: false,
        infinite: false,
        speed: 600,
        arrows: false,
        draggable: false,
        slidesToShow: 1,
        swipe: false,
        slidesToScroll: 1
    });

    $('.page_slider1 .intro-btn').on('click', function() {
        $('.pagesSlider').slick('slickNext');
    });

    $('.arrow-next').on('click', function() {
        $('.pagesSlider').slick('slickNext');
    });
    $(".finish-btn").on('click', function() {
        $('.pagesSlider').slick('slickNext');
    });

    $('.arrow-prev').on('click', function() {
        $('.pagesSlider').slick('slickPrev');
    });
    $(".time-input").mask('99  :  99');

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
            text: selectOption.eq(0).text(),
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