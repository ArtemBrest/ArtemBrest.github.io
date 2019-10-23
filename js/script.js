$(document).ready(function () {
    $(".mainSlider").owlCarousel({
        dots: true,
        nav: false,
        items: 1,
        loop:true,
        dotsContainer: "#customDots"
    });

    $("#tabs").tabs({
        active: 0
    });

})