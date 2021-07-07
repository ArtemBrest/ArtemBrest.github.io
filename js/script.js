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
    let modal_thanks_close = document.querySelector(".modal-close");
    let modal_thanks_btn = document.querySelector(".modal-btn-close");
    let modal_form = document.getElementById("modal_form");
    let modal_form_close = document.querySelector(".modal1-close");
    let btn_modal = document.querySelectorAll(".btn_modal");
    let btn_call = document.querySelector(".btn_call");
    let title_modal = document.querySelector(".modal1_form-h2");
    if (btn_call !== null) {
        btn_call.addEventListener('click', event => {
            title_modal.innerHTML = "Заказать звонок";
            fadeIn(modal_form,'block');
            fadeIn(fade,'block');
        });
    }
    if (btn_modal !== null) {
        for (let i = 0 ; i < btn_modal.length; i++){
            btn_modal[i].addEventListener('click', event => {
                title_modal.innerHTML = "Получить скидку";
                fadeIn(modal_form,'block');
                fadeIn(fade,'block');
            });
        }
    }
    if (modal_thanks_btn !== null) {
        modal_thanks_btn.addEventListener('click', event => {
            fadeOut(modal_thanks);
            fadeOut(modal_form);
            fadeOut(fade);
        });
    }
    if (modal_thanks_close !== null) {
        modal_thanks_close.addEventListener('click', event => {
            fadeOut(modal_thanks);
            fadeOut(modal_form);
            fadeOut(fade);
        });
    }
    if (modal_form_close !== null) {
        modal_form_close.addEventListener('click', event => {
            fadeOut(modal_thanks);
            fadeOut(modal_form);
            fadeOut(fade);
        });
    }
    if (fade !== null) {
        fade.addEventListener('click', event => {
            fadeOut(modal_thanks);
            fadeOut(modal_form);
            fadeOut(fade);
        });
    }
    let menu_overlay = document.querySelector(".menu-overlay");
    let mob_menu = document.querySelector(".header_mob_menu");
    let mob_menu_icon = document.querySelector(".header_mob_top_btn");
    if(menu_overlay !== null){
        menu_overlay.addEventListener('click', event => {
            mob_menu_icon.classList.remove("active");
            fadeOut(mob_menu);
            fadeOut(menu_overlay);
        })
    }
    if (mob_menu_icon !== null) {
        mob_menu_icon.addEventListener('click', event => {
            if(mob_menu_icon.classList.contains("active")){
                mob_menu_icon.classList.remove("active");
                fadeOut(mob_menu);
                fadeOut(menu_overlay);
            }
            else{
                mob_menu_icon.classList.add("active");
                fadeIn(mob_menu,"block");
                fadeIn(menu_overlay,"block");
            }

        });
    }

    const preview_img = 6;
    let category = document.querySelectorAll(".assortment_page_categories_cards");
    let category_more_btn = document.querySelectorAll(".category_more-btn");
    let number_all, number;
    for (let i = 0 ; i < category.length; i++){
        var card = category[i].querySelectorAll(".card");
        number_all = category[i].querySelectorAll(".card").length;
        number = number_all - preview_img;
        if (number <= 0){
            category[i].querySelector(".category_more-btn").style.display="none";
        }
        category[i].querySelector(".category_more-btn").querySelector(".number").innerHTML = number;
        for (let i = 0 ; i < card.length; i++){
            if (i >= preview_img){
                fadeOut(card[i]);
            }
        }
    }
    for (let i = 0 ; i < category_more_btn.length; i++){
        category_more_btn[i].addEventListener('click', event => {
            var card = category_more_btn[i].parentNode.querySelectorAll(".card");
            if(category_more_btn[i].classList.contains("active")){
                category_more_btn[i].classList.remove("active");
                category_more_btn[i].querySelector(".more").innerHTML = "Ещё + ";
                for (let i = 0 ; i < card.length; i++){
                    if (i >= preview_img){
                        fadeOut(card[i]);
                    }
                }
            }
            else{
                category_more_btn[i].classList.add("active");
                category_more_btn[i].querySelector(".more").innerHTML = "Скрыть - ";
                for (let i = 0 ; i < card.length; i++){
                    fadeIn(card[i],"block");
                }
            }
        });
    }
})