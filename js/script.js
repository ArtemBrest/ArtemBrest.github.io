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
    let fade = document.querySelector(".fade");
    let modal_thanks = document.getElementById("modal_thanks");
    let modal_thanks_btn = document.querySelector(".modal_thanks-btn");
    let modal_thanks_close = document.querySelector(".modal_thanks-close");
    let modal = document.getElementById("modal");
    let modal_close = document.querySelector(".modal-close");
    if (fade !== null || modal_thanks !== null || modal !== null){
        fade.addEventListener("click", function () {
            fadeOut(modal_thanks);
            fadeOut(modal);
            fadeOut(fade);
        });
    }
    if (fade !== null || modal_close !== null || modal !== null){
        modal_close.addEventListener("click", function () {
            fadeOut(modal);
            fadeOut(fade);
        });
    }
    if (fade !== null || modal_thanks_btn !== null || modal_thanks_close !== null){
        modal_thanks_btn.addEventListener("click", function () {
            fadeOut(modal_thanks);
            fadeOut(fade);
        });
        modal_thanks_close.addEventListener("click", function () {
            fadeOut(modal_thanks);
            fadeOut(fade);
        });
    }


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
    let header_menu_mob_li = document.querySelectorAll(".header_menu_mob_li");
    if(header_menu_mob_li !== null){
        for (let i = 0; i < header_menu_mob_li.length; i++){
            if(header_menu_mob_li[i].querySelector(".sub_menu")){
                header_menu_mob_li[i].classList.add("has_children");
                var image = document.createElement('img');
                image.src='img/svg/menu_icon.svg';
                image.alt='menu_icon';
                image.className='header_menu_mob_li_icon';
                header_menu_mob_li[i].querySelector('.header_menu_mob_li_group').appendChild(image);
            }
            header_menu_mob_li[i].addEventListener("click", function () {
                if(header_menu_mob_li[i].classList.contains("active_li")){
                    header_menu_mob_li[i].classList.remove("active_li")
                    if(header_menu_mob_li[i].querySelector(".sub_menu")){
                        fadeOut(header_menu_mob_li[i].querySelector(".sub_menu"));
                    }
                }
                else{
                    header_menu_mob_li[i].classList.add("active_li");
                    if(header_menu_mob_li[i].querySelector(".sub_menu")){
                        fadeIn(header_menu_mob_li[i].querySelector(".sub_menu"),"flex");
                    }
                }
            });
        }
    }
    let header_top_icon = document.querySelector(".header_top_icon ");
    let header_menu_mob = document.querySelector(".header_menu_mob");
    let menu_overlay = document.querySelector(".menu-overlay");
    if(header_top_icon !== null || header_menu_mob !== null || menu_overlay !== null){
        header_top_icon.addEventListener("click", function () {
            if(header_top_icon.classList.contains("active")){
                header_top_icon.classList.remove("active");
                fadeOut(header_menu_mob);
                fadeOut(menu_overlay);
            }
            else{
                header_top_icon.classList.add("active");
                fadeIn(header_menu_mob);
                fadeIn(menu_overlay);
            }
        });
        menu_overlay.addEventListener("click", function () {
            header_top_icon.classList.remove("active");
            fadeOut(header_menu_mob);
            fadeOut(menu_overlay);
        })
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
                200: {
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
    let ModalBtnOpen = document.querySelectorAll(".ModalBtnOpen")
    if(ModalBtnOpen !== null){
        for (let i = 0; i < ModalBtnOpen.length; i++){
            ModalBtnOpen[i].addEventListener("click", function () {
                if(fade !== null || modal !== null){
                    fadeIn(modal);
                    fadeIn(fade);
                }
            })
        }
    }
});








