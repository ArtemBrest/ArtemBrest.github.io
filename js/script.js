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
    let scrollToTopBtn = document.querySelector(".up");
    if (scrollToTopBtn !== null) {
        document.addEventListener("scroll", handleScroll);
        function handleScroll() {
            var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var GOLDEN_RATIO = 0.2;
            if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
                //show button
                scrollToTopBtn.style.opacity = "1";
            } else {
                //hide button
                scrollToTopBtn.style.opacity = "0";
            }
        }
        scrollToTopBtn.addEventListener("click", scrollToTop);
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    let menu_overlay = document.querySelector(".menu-overlay")
    let Fade = document.querySelector(".fade");
    let Modal = document.querySelector(".modal");
    let ModalClose = document.querySelector(".modal-close");
    let ModalThanks = document.querySelector(".modal_thanks");
    let ModalThanksClose = document.querySelector(".modal_thanks-close");
    let ModalThanksBtn = document.querySelector(".modal_thanks-btn");
    let BtnPopupCatalog =  document.querySelectorAll(".BtnPopupCatalog");
    if(BtnPopupCatalog !== null){
        BtnPopupCatalog.forEach(function(elem) {
            elem.addEventListener("click",function(e){
                fadeIn(Modal);
                fadeIn(Fade);
            });
        });
    }
    if(ModalThanks !== null && Fade !== null &&  ModalThanksClose !== null &&  ModalThanksBtn !== null){
        ModalThanksClose.addEventListener("click",function(e){
            fadeOut(ModalThanks);
            fadeOut(Fade);
        });
        ModalThanksBtn.addEventListener("click",function(e){
            fadeOut(ModalThanks);
            fadeOut(Fade);
        });
    }
    if(Modal !== null && Fade !== null && ModalThanks !== null){
        Fade.addEventListener("click",function(e){
            fadeOut(ModalThanks);
            fadeOut(Modal);
            fadeOut(Fade);
        });
    }
    if(Modal !== null && Fade !== null && ModalClose !== null){
        ModalClose.addEventListener("click",function(e){
            fadeOut(Modal);
            fadeOut(Fade);
        });
    }


    let header_menu_li = document.querySelectorAll(".header_menu_li");
    if(header_menu_li !== null){
        for (let i = 0; i < header_menu_li.length; i++){
            if(header_menu_li[i].querySelector(".sub_menu")){
                header_menu_li[i].classList.add("has_children");
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "header_menu_li-icon");
                svg.setAttribute("viewBox", "0 0 10 5");
                svg.setAttribute("width", "10");
                svg.setAttribute("height", "5");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("fill", "#F8F9FA");
                path.setAttribute("d", "M5 5L9.33013 0.5L0.669873 0.5L5 5Z");
                svg.appendChild(path);
                header_menu_li[i].querySelector('.header_menu_li_group').appendChild(svg);
            }
            var mouseenter_ev;
            header_menu_li[i].addEventListener("mouseenter", function () {
                mouseenter_ev = setTimeout(() => {
                    header_menu_li[i].classList.add("active_li");
                },100);
                if(header_menu_li[i].querySelector(".sub_menu")){
                    header_menu_li[i].querySelector(".sub_menu").style.display = "flex";

                }
            });
            header_menu_li[i].addEventListener("mouseleave", function () {
                clearTimeout(mouseenter_ev);
                header_menu_li[i].classList.remove("active_li");
                if(header_menu_li[i].querySelector(".sub_menu")){
                    header_menu_li[i].querySelector(".sub_menu").style.display = "none";

                }
            });
        }
    }
    let header_menu_mob_li = document.querySelectorAll(".header_menu_mob_li");
    if(header_menu_mob_li !== null){
        for (let i = 0; i < header_menu_mob_li.length; i++){
            if(header_menu_mob_li[i].querySelector(".sub_menu")){
                header_menu_mob_li[i].classList.add("has_children");
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "header_menu_mob_li-icon");
                svg.setAttribute("viewBox", "0 0 10 5");
                svg.setAttribute("width", "10");
                svg.setAttribute("height", "5");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("fill", "#F8F9FA");
                path.setAttribute("d", "M5 5L9.33013 0.5L0.669873 0.5L5 5Z");
                svg.appendChild(path);
                header_menu_mob_li[i].querySelector('.header_menu_mob_li_group').appendChild(svg);
            }
            header_menu_mob_li[i].addEventListener("click", function () {
                if (header_menu_mob_li[i].classList.contains("active_li")) {
                    header_menu_mob_li[i].classList.remove("active_li");
                    if (header_menu_mob_li[i].querySelector(".sub_menu")) {
                        header_menu_mob_li[i].querySelector(".sub_menu").style.display = "none";
                    }
                } else {
                    header_menu_mob_li[i].classList.add("active_li");
                    if (header_menu_mob_li[i].querySelector(".sub_menu")) {
                        header_menu_mob_li[i].querySelector(".sub_menu").style.display = "flex";
                    }
                }
            });
        }
    }
    let header_btn_menu = document.querySelector(".header_top_icon");
    let header_menu_mob = document.querySelector(".header_menu_mob");
    if (header_btn_menu !== null && menu_overlay !== null) {
        header_btn_menu.addEventListener("click", function () {
            if (header_btn_menu.classList.contains("active")) {
                header_btn_menu.classList.remove("active");
                header_menu_mob.style.display = "none";
                fadeOut(menu_overlay);
            } else {
                header_btn_menu.classList.add("active");
                header_menu_mob.style.display = "flex";
                fadeIn(menu_overlay)
            }
        })
        menu_overlay.addEventListener("click", function () {
            header_btn_menu.classList.remove("active");
            header_menu_mob.style.display = "none";
            fadeOut(menu_overlay);
        })
    }


    var news_swiper = new Swiper(".news_swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".news_swiper-next",
            prevEl: ".news_swiper-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            550: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1171: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    let tabLinks = document.querySelectorAll(".tabs_item");
    let tabPanels = document.querySelectorAll(".tab_content");
    if(tabPanels !== null && tabLinks !== null) {
        for (let el of tabLinks) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".tabs_item.active")) {
                    document.querySelector(".tabs_item.active").classList.remove("active");
                }
                if (document.querySelector(".tab_content.active")) {
                    document.querySelector(".tab_content.active").classList.remove("active");
                }
                //const parentListItem = el.parentElement;
                el.classList.add("active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
                panel[0].classList.add("active");
            });
        }
    }


    let PopupBtn = document.querySelectorAll(".PopupBtn");
    if(PopupBtn !== null) {
        for (let el of PopupBtn) {
            el.addEventListener("click", function () {
                fadeIn(Modal);
                fadeIn(Fade);
            })
        }
    }


    let company_cards = document.getElementById("company_cards");
    if(company_cards !== null){
        lightGallery(company_cards, {
            selector: '.card',
            plugins: [lgZoom],
        });
    }
    let video_cards = document.getElementById("video_cards");
    if(video_cards !== null) {
        lightGallery(video_cards, {
            selector: '.card',
            plugins: [lgVideo],
        });
    }
    var swiper = new Swiper(".banner_swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });


    let preview_img = 9;
    if( window.screen.width < 992 && window.screen.width > 480){
        preview_img = 6;
    }
    else if( window.screen.width < 480){
        preview_img = 4;
    }
    else{
        preview_img = 9;
    }
    let category = document.getElementById("photogallery_cards");
    let category_more_btn = document.querySelector(".photogallery-btn");
    if(category !== null && category_more_btn !== null) {
        var card = category.querySelectorAll(".card");
        for (let i = 0 ; i < card.length; i++){
            if (i >= preview_img){
                fadeOut(card[i]);
            }
        }
        category_more_btn.addEventListener('click', event => {
            if(category_more_btn.classList.contains("active")){
                category_more_btn.classList.remove("active");
                category_more_btn.innerHTML = "Показать еще";
                for (let i = 0 ; i < card.length; i++){
                    if (i >= preview_img){
                        fadeOut(card[i]);
                    }
                }
            }
            else{
                category_more_btn.classList.add("active");
                category_more_btn.innerHTML = "Вернуть";
                for (let i = 0 ; i < card.length; i++){
                    fadeIn(card[i],"block");
                }
            }
        });
        lightGallery(category, {
            selector: '.card',
            plugins: [lgZoom],
        });
    }
    let colors_img = 20;
    if( window.screen.width < 992 && window.screen.width > 480){
        colors_img = 16;
    }
    else if( window.screen.width < 480){
        colors_img = 12;
    }
    else{
        colors_img = 20;
    }

    let production_color = document.querySelector(".production_catalog");
    let color_btn = document.querySelectorAll(".card-btn");
    let ColorNumber_all, ColorNumber;
    if(production_color !== null){
        var card = production_color.querySelectorAll(".card");
        for (let i = 0 ; i < card.length; i++){
            var ColorItem = card[i].querySelectorAll(".color");
            ColorNumber_all = ColorItem.length;
            ColorNumber = ColorNumber_all - colors_img;
            if (ColorNumber <= 0){
                card[i].querySelector(".card-btn").style.display="none";
            }
            for (let i = 0 ; i < ColorItem.length; i++){
                if (i >= colors_img){
                    fadeOut(ColorItem[i]);
                }
            }
        }
        for (let i = 0 ; i < color_btn.length; i++){
            color_btn[i].addEventListener('click', event => {
                var ColorItem = color_btn[i].parentNode.querySelectorAll(".color");
                if(color_btn[i].classList.contains("active")){
                    color_btn[i].classList.remove("active");
                    color_btn[i].innerHTML = "смотреть еще";
                    for (let i = 0 ; i < ColorItem.length; i++){
                        if (i >= colors_img){
                            fadeOut(ColorItem[i]);
                        }
                    }
                    console.log(1);
                }
                else{
                    color_btn[i].classList.add("active");
                    color_btn[i].innerHTML = "свернуть";
                    for (let i = 0 ; i < ColorItem.length; i++){
                        fadeIn(ColorItem[i],"block");
                    }
                    console.log(2);
                }
            });
        }
    }
    /*for (let i = 0 ; i < production_color.length; i++){
        var card = production_color[i].querySelectorAll(".card");
        ColorNumber_all = production_color[i].querySelectorAll(".card").length;
        ColorNumber = number_all - colors_img;
        if (ColorNumber <= 0){
            production_color[i].querySelector(".category_more-btn").style.display="none";
        }
        for (let i = 0 ; i < card.length; i++){
            if (i >= preview_img){
                fadeOut(card[i]);
            }
        }
    }
    for (let i = 0 ; i < color_btn.length; i++){
        color_btn[i].addEventListener('click', event => {
            var card = color_btn[i].parentNode.querySelectorAll(".card");
            if(color_btn[i].classList.contains("active")){
                color_btn[i].classList.remove("active");
                color_btn[i].innerHTML = "смотреть еще";
                for (let i = 0 ; i < card.length; i++){
                    if (i >= colors_img){
                        fadeOut(card[i]);
                    }
                }
            }
            else{
                color_btn[i].classList.add("active");
                color_btn[i].innerHTML = "свернуть";
                for (let i = 0 ; i < card.length; i++){
                    fadeIn(card[i],"block");
                }
            }
        });
    }*/
})