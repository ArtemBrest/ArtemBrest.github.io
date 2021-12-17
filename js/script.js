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
                svg.setAttribute("viewBox", "0 0 12 7");
                svg.setAttribute("width", "12");
                svg.setAttribute("height", "7");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("stroke", "#333333");
                path.setAttribute("d", "M1 1L6.07246 5.54545L11 1");
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
                    if( window.screen.width > 767){
                        //menu_overlay.style.display = "block";
                    }
                }
            });
            header_menu_li[i].addEventListener("mouseleave", function () {
                clearTimeout(mouseenter_ev);
                header_menu_li[i].classList.remove("active_li");
                if(header_menu_li[i].querySelector(".sub_menu")){
                    header_menu_li[i].querySelector(".sub_menu").style.display = "none";
                    if( window.screen.width > 767){
                        //menu_overlay.style.display = "none";
                    }
                }
            });
        }
    }
    let header_btn_catalog = document.querySelector(".header_menu_catalog");
    let header_btn_menu = document.querySelector(".header_menu_mob-btn");
    let header_menu_mob_catalog = document.querySelector(".header_menu_mob_ul.catalog");
    let header_menu_mob = document.querySelector(".header_menu_mob_ul.menu");
    if (header_btn_catalog !== null && menu_overlay !== null) {
        header_btn_catalog.addEventListener("click", function () {
            if (header_btn_catalog.classList.contains("active")) {
                header_btn_catalog.classList.remove("active");
                header_menu_mob_catalog.style.display = "none";
                fadeOut(menu_overlay);
            } else {
                header_btn_catalog.classList.add("active");
                header_menu_mob_catalog.style.display = "flex";
                fadeIn(menu_overlay)
            }
        })
        menu_overlay.addEventListener("click", function () {
            header_btn_catalog.classList.remove("active");
            header_menu_mob_catalog.style.display = "none";
            fadeOut(menu_overlay);
        })
    }
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
    let header_menu_mob_li = document.querySelectorAll(".header_menu_mob_li");
    if (header_menu_mob_li !== null) {
        for (let i = 0; i < header_menu_mob_li.length; i++) {
            if (header_menu_mob_li[i].querySelector(".sub_menu")) {
                header_menu_mob_li[i].classList.add("has_children");
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "header_menu_li-icon");
                svg.setAttribute("viewBox", "0 0 12 7");
                svg.setAttribute("width", "12");
                svg.setAttribute("height", "7");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("stroke", "#333333");
                path.setAttribute("d", "M1 1L6.07246 5.54545L11 1");
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

    var banner_swiper = new Swiper(".banner_swiper", {
        navigation: {
            nextEl: ".banner_swiper-next",
            prevEl: ".banner_swiper-prev",
        },
        pagination: {
            clickable: true,
            el: ".banner_swiper-pagination",
        },
    });

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
    let numPerView = 3;
    if(typeof(numberPerView) != 'undefined' && numberPerView != null){
        numPerView = numberPerView;
    }
    var other_product_swiper = new Swiper(".other_product_swiper", {
        slidesPerView: numPerView,
        spaceBetween: 20,
        navigation: {
            nextEl: ".other_product_swiper-next",
            prevEl: ".other_product_swiper-prev",
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
                slidesPerView: numPerView,
                spaceBetween: 20,
            },
        },
    });
    var photogallerySwiper = new Swiper(".photogallery_swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".photogallery_swiper-next",
            prevEl: ".photogallery_swiper-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            550:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    var swiper = new Swiper(".product_swiperSub", {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".product_swiperSub-next",
            prevEl: ".product_swiperSub-prev",
        },
    });
    var swiper2 = new Swiper(".product_swiper", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
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

    let production_capacity_gallery = document.getElementById("production_capacity_gallery");
    if(production_capacity_gallery !== null){
        lightGallery(production_capacity_gallery, {
            selector: '.card',
            plugins: [lgZoom],
        });
    }
    let individual_order_card = document.getElementById("individual_order_card");
    if(individual_order_card !== null){
        lightGallery(individual_order_card, {
            selector: '.card',
            plugins: [lgZoom],
        });
    }
    let photogallery_swiper = document.querySelectorAll(".photogallery_swiper-wrapper");
    if(photogallery_swiper !== null) {
        for (let i = 0; i < photogallery_swiper.length; i++) {
            lightGallery(photogallery_swiper[i], {
                selector: '.card',
                plugins: [lgZoom],
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

})