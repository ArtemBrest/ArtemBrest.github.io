$(document).ready(function () {
    var icon = $(".header_contact_left-icon").find(".icon");
    var overlay = $(".overlay-menu");
    icon.click(function () {
        if(icon.hasClass("active")){
            icon.removeClass("active");
            $(".header_mobile_menu").hide(350);
            overlay.hide(350);
        }
        else{
            icon.addClass("active");
            overlay.show(350);
            $(".header_mobile_menu").show(350);
        }
    });
    overlay.click(function () {
        icon.removeClass("active");
        $(".header_mobile_menu").hide(350);
        overlay.hide(350);
    })
});