/*$(document).ready(function () {
    $(".slider").owlCarousel({
        margin: 10,
        dots: false,
        nav: true,
        navText:["<",">"],
        loop:true

    });

});*/
$(".menuBtn").on("click",function (e) {
    e.preventDefault();
    $(this).toggleClass("menuBtnActive");
    $(".menuNav").toggleClass("menuNavActive")
});