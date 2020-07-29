$(document).ready(function () {
    $("#lightgallery").lightGallery({
        selector: '.card'
    });
    $(".portfolio_cards").find('.box').hide(350);
    $('.portfolio_btn').click(function () {
        if ($(".box").hasClass("active")){
            $('.box').hide(350);
            $(".box").removeClass("active");
            $(".portfolio_btn").html("Больше наших работ");
        }
        else{
            $('.box').show(350);
            $(".box").toggleClass('active');
            $(".portfolio_btn").html('Свернуть наши работы');
        }
    })
    var btn_menu =  $(".header_mobile_menu_top").find('.icon');
    var menu_ul = $(".header_mobile_menu_ul");
    var fade = $('.menu-overlay');
    btn_menu.click(function () {
        if (menu_ul.hasClass('active')){
            $('.header_mobile_menu').removeClass("overlay");
            menu_ul.hide(350);
            menu_ul.removeClass("active");
            btn_menu.removeClass("active");
            fade.hide(350);
        }
        else{
            $('.header_mobile_menu').addClass("overlay");
            menu_ul.addClass('active');
            menu_ul.show(350);
            btn_menu.addClass("active");
            fade.show(350);
        }

    })
    fade.click(function () {
        $('.header_mobile_menu').removeClass("overlay");
        menu_ul.hide(350);
        menu_ul.removeClass("active");
        btn_menu.removeClass("active");
        fade.hide(350);
    })
});