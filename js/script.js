$(document).ready(function () {

    /*banner select*/
    $('#form_select').each(function(){
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
            text: 'Выберите вид уборки',
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
        $('.select__gap').append('<img src="img/png/Polygon.png" alt="" class="select__gap-img">')
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
                    $('.select__gap').append('<img src="img/png/Polygon.png" alt="" class="select__gap-img">')
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });
    $('#form_select1').each(function(){
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
            class: 'select___gap',
            text: 'Выберите услугу',
        }).insertAfter($this);
        $this


        var selectGap = $this.next('.select___gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select___list'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select___list');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select___item',
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
        $('.select___gap').append('<img src="img/png/Polygon.png" alt="" class="select___gap-img">')
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
                    $('.select___gap').append('<img src="img/png/Polygon.png" alt="" class="select___gap-img">')
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });

    /*conact select*/
    $('#contact_form_select').each(function(){
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
            class: 'select__gap-contact',
            text: 'Выберите вид уборки',
        }).insertAfter($this);
        $this


        var selectGap = $this.next('.select__gap-contact'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select__list-contact'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list-contact');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select__item-contact',
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
        $('.select__gap-contact').append('<img src="img/png/Polygon.png" alt="" class="select__gap-contact-img">')
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
                    $('.select__gap-contact').append('<img src="img/png/Polygon.png" alt="" class="select__gap-contact-img">')
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });
    $('#contact_form_select1').each(function(){
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
            class: 'select___gap-contact',
            text: 'Выберите услугу',
        }).insertAfter($this);
        $this


        var selectGap = $this.next('.select___gap-contact'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select___list-contact'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select___list-contact');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select___item-contact',
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
        $('.select___gap-contact').append('<img src="img/png/Polygon.png" alt="" class="select___gap-contact-img">')
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
                    $('.select___gap-contact').append('<img src="img/png/Polygon.png" alt="" class="select___gap-contact-img">')
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });


    /* accordion*/
    var accord = $(".accordion");
    var up = $(".icon");
    accord.find(".accordion_header:not(.active)").siblings($(".accordion_content")).slideUp();
    accord.find(".accordion_header").on("click", function () {
        $(this).siblings($(".accordion_content")).stop().slideToggle(500);
        //$(this).parent(accord).find(".accordion_content").addClass("active")
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
    /*end accordion*/

   /* Menu*/
    var btnMenu = $(".header_menu_desktop-icon");
    var menu = $(".header_menu_mobile");
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