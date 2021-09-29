function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};
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
window.addEventListener("load", function(){

    let header_menu_li = document.querySelectorAll(".header_menu_li");
    if(header_menu_li !== null){
        for (let i = 0; i < header_menu_li.length; i++){
            if(header_menu_li[i].querySelector(".sub_menu")){
                header_menu_li[i].classList.add("has_children");
                var image = document.createElement('img');
                image.src='img/svg/menu_icon.svg';
                image.alt='menu_icon';
                image.className='header_menu_li_icon';
                header_menu_li[i].querySelector('.header_menu_li_group').appendChild(image);
            }
            setTimeout(() => {
                header_menu_li[i].addEventListener("mouseenter", function () {
                    header_menu_li[i].classList.add("active_li");
                    fadeIn(header_menu_li[i].querySelector(".sub_menu"),"flex")
                })
            },100);
            setTimeout(() => {
                header_menu_li[i].addEventListener("mouseleave", function () {
                    header_menu_li[i].classList.remove("active_li");
                    fadeOut(header_menu_li[i].querySelector(".sub_menu"))
                })
            },100);
        }
    }
////////////////////////////// slider ///////////////////////////////
    if(document.getElementById('banner_swiper') !== null) {
        var swiper = new Swiper(".banner_swiper", {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    if(document.getElementById('cooperation_swiper') !== null) {
        var swiper1 = new Swiper(".cooperation_swiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1245: {
                    slidesPerView: 4,
                }
            },
        });
    }
////////////////////////////// end slider ///////////////////////////////
    if(document.getElementById('gallery_cards') !== null){
        lightGallery(document.getElementById('gallery_cards'),
            { selector: '.card', }
        );
    }
});








