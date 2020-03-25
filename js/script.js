$(document).ready(function () {

   /* accordion*/
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
    /*end accordion*/


     /*Mob menu*/
    var link = $('.menu-link');
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
    /* end Mob menu*/


    /*Modal Window*/
    var link = $('.seo_btn');
    var modal = $('.modal2');
    var close = $('.modal2-close');
    var close_btn = $('.btn-close');
    var fade = $('.fade2');
    link.click(function () {
        modal.show();
        fade.show();
    })
    close.click(function () {
        modal.hide();
        fade.hide();
    })
    close_btn.click(function () {
        modal.hide();
        fade.hide();
    })
    fade.click(function () {
        modal.hide();
        fade.hide();
    })
    var link_2 = $('.card_btn');
    var link_3 = $('.portfolio_btn');
    var modal_2 = $('.modal3');
    var close_2 = $('.modal3-close');
    var fade_2 = $('.fade3');
    link_2.click(function () {
        modal_2.show();
        fade_2.show();
    })
    link_3.click(function () {
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

    var link_4 = $('.questions_btn');
    var link_5 = $('.progress_btn');
    var link_6 = $('.banner_btn_price');
    var modal_4 = $('.modal4');
    var close_4 = $('.modal4-close');
    var fade_4 = $('.fade4');
    link_4.click(function () {
        modal_4.show();
        fade_4.show();
    })
    link_5.click(function () {
        modal_4.show();
        fade_4.show();
    })
    link_6.click(function () {
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

    /* end Modal Window*/
});