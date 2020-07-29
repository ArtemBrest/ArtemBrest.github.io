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
});