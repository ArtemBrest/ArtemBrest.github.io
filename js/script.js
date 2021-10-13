// ** FADE IN FUNCTION **
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0.1) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};
window.addEventListener("load", function(){
    let header_menu_li = document.querySelectorAll(".header_menu_li");
    if(header_menu_li !== null){
        for (let i = 0; i < header_menu_li.length; i++){
            if(header_menu_li[i].querySelector(".sub_menu")){
                header_menu_li[i].classList.add("has_children");
                var image = document.createElement('img');
                image.src='img/svg/icon_arrow.svg';
                image.alt='menu_icon';
                image.className='header_menu_li_icon';
                header_menu_li[i].querySelector('.header_menu_li_group').appendChild(image);
            }
            var mouseenter_ev
            header_menu_li[i].addEventListener("mouseenter", function () {
                mouseenter_ev = setTimeout(() => {
                    header_menu_li[i].classList.add("active_li");
                    if(header_menu_li[i].querySelector(".sub_menu")){
                        fadeIn(header_menu_li[i].querySelector(".sub_menu"),"flex")
                    }
                },100);
            })
            header_menu_li[i].addEventListener("mouseleave", function () {
                clearTimeout(mouseenter_ev);
                header_menu_li[i].classList.remove("active_li");
                if(header_menu_li[i].querySelector(".sub_menu")){
                    fadeOut(header_menu_li[i].querySelector(".sub_menu"));
                }
            })
        }
    }
    var swiper = new Swiper(".banner_swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})