$(document).ready(function () {
     /*Mob menu*/
   /* var link = $('.menu-link');
    var menu = $('.menu');
    var nav = $('.menu a');
    link.click(function () {
        link.toggleClass("menu-link_active")
        menu.toggleClass("menu_active")
    })
    nav.click(function () {
        link.toggleClass("menu-link_active")
        menu.toggleClass("menu_active")


    })*/


    $(".menu-link").click(function() {
        $(".headerMenu_mobile").slideDown(300);
    });

    $(".menu-link_active").click(function() {
        $(".headerMenu_mobile").slideUp(300);
    });
    /* end Mob menu*/



});