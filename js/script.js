$(document).ready(function () {
    var link  = $('.menu-link');
    var menu = $('.menu');
    var nav = $('.menu a');
    link.click(function () {
        link.toggleClass("menu-link_active");
        menu.toggleClass("menu_active");
    });
    nav.click(function () {
        link.toggleClass("menu-link_active");
        menu.toggleClass("menu_active");
    });
});