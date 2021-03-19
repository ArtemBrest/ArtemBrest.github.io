$(document).ready(function () {
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="banner_left_arrow banner_arrow"><img src="img/svg/left.svg" alt="" class="banner_left_arrow-icon"></div>',
        nextArrow: '<div class="banner_right_arrow banner_arrow"><img src="img/svg/right.svg" alt="" class="banner_right_arrow-icon"></div>',
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            }
        ]
    });

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



    /* tabs */
    $(".tab_item").not(":first").hide();
    let typeRitualItem = $('.tab_item:first-child .portfolio_box');
    if(typeRitualItem.length > 4){
        typeRitualItem.slice(4).slideToggle();
    }
    else{
        $(".portfolio-show_more").addClass("none")
    }
    $('.portfolio-show_more').click(function (e) {
        if (typeRitualItem.slice(4).is(':visible')) {
            typeRitualItem.slice(4).slideToggle('slow');
            $(this).delay(300).text('Загрузить еще');
        } else {
            typeRitualItem.slice(4).slideToggle('slow');
            $(this).delay(300).text('Скрыть');
        }
        e.preventDefault();
    });
    $(".portfolio_nav .portfolio_nav_li").click(function() {
        $('.portfolio-show_more').delay(300).text('Загрузить еще');
        $(".portfolio_nav .portfolio_nav_li").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn();
        let index = $(this).index() + 1;
        let typeRitualItem = $('.tab_item:nth-child(' + index +')').children(".portfolio_box");
        if(typeRitualItem.length > 4){
            typeRitualItem.slice(4).slideToggle();
            $(".portfolio-show_more").removeClass("none")
        }
        else{
            $(".portfolio-show_more").addClass("none");
        }
        $('.portfolio-show_more').click(function (e) {
            if (typeRitualItem.slice(4).is(':visible')) {
                typeRitualItem.slice(4).slideToggle('slow');
                $(this).delay(300).text('Загрузить еще');
            } else {
                typeRitualItem.slice(4).slideToggle('slow');
                $(this).delay(300).text('Скрыть');
            }
            e.preventDefault();

        });
    }).eq(0).addClass("active");
    /* tabs */
});
