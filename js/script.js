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
    let headerMobBtn = document.querySelector(".header_info_mobBtn");
    let headerMenu = document.querySelector(".header_menu");
    let menu_overlay = document.querySelector(".menu-overlay");
    if(headerMobBtn !== null && headerMenu!== null && menu_overlay!== null){
        headerMobBtn.addEventListener("click",function () {
            if(headerMobBtn.classList.contains("active")){
                headerMobBtn.classList.remove("active");
                fadeOut(headerMenu);
                fadeOut(menu_overlay);
            }
            else{
                headerMobBtn.classList.add("active");
                fadeIn(headerMenu);
                fadeIn(menu_overlay);
            }
        });
        menu_overlay.addEventListener("click",function () {
            if(headerMobBtn.classList.contains("active")){
                headerMobBtn.classList.remove("active");
                fadeOut(headerMenu);
                fadeOut(menu_overlay);
            }
        });
    }
    let header_menu_li = document.querySelectorAll(".header_menu_li");
    if(header_menu_li !== null){
        for (let i = 0; i < header_menu_li.length; i++){
            if(header_menu_li[i].querySelector(".sub_menu")){
                header_menu_li[i].classList.add("has_children");
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "header_menu_li_icon");
                svg.setAttribute("viewBox", "0 0 13 9");
                svg.setAttribute("width", "13");
                svg.setAttribute("height", "9");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("fill", "white");
                path.setAttribute("d", "M11.09 0.795044L6.5 5.37504L1.91 0.795044L0.5 2.20504L6.5 8.20504L12.5 2.20504L11.09 0.795044Z");
                svg.appendChild(path);
                //var image = document.createElement('');
                //image.src='img/svg/icon_arrow.svg';
                //image.alt='menu_icon';
                //image.className='header_menu_li_icon';
                header_menu_li[i].querySelector('.header_menu_li_group').appendChild(svg);
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
    if(document.querySelector(".banner_swiper") !== null){
        var banner_swiper = new Swiper(".banner_swiper", {
            navigation: {
                nextEl: ".banner-button-next",
                prevEl: ".banner-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    if(document.querySelector(".cooperation_swiper") !== null){
        var cooperation_swiper = new Swiper(".cooperation_swiper", {
            slidesPerView: 4,
            spaceBetween: 25,
            navigation: {
                nextEl: ".cooperation-button-next",
                prevEl: ".cooperation-button-prev",
            },
            breakpoints:{
                200: {
                    slidesPerView:1,
                    spaceBetween:10,
                },480:{
                    slidesPerView:2,
                    spaceBetween:15,
                },991:{
                    slidesPerView:3,
                    spaceBetween:20,
                },1320:{
                    slidesPerView:4,
                }
            },
        });
    }

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
    let toolBarBtn = document.querySelector(".news_toolBar_group");
    if(toolBarBtn !== null){
        let item_grid = toolBarBtn.querySelector(".item_grid");
        let item_flex = toolBarBtn.querySelector(".item_flex");
        let news_cards = document.querySelector(".news_cards");
        item_grid.addEventListener("click",function () {
            item_flex.classList.remove("active");
            item_grid.classList.add("active");
            news_cards.classList.remove("flex_column");
        });
        item_flex.addEventListener("click",function () {
            item_grid.classList.remove("active");
            item_flex.classList.add("active");
            news_cards.classList.add("flex_column");
        })
    }
    let  cFiles = document.getElementById("input_resume")
    if(cFiles !== null) {
        cFiles.addEventListener('change', function () {
            cFiles.parentElement.querySelector(".item_label-file").innerHTML = "+ Выбрано файлов:" + cFiles.files.length;
        });
    }

    let FormBtnClear = document.querySelector(".vakansi-btn");
    let VakansiForm = document.querySelector(".contact_form");
    if(FormBtnClear !== null) {
        FormBtnClear.addEventListener('click', function () {
            if(FormBtnClear.classList.contains("active")){
                FormBtnClear.classList.remove("active");
                fadeOut(VakansiForm)
            }
            else{
                FormBtnClear.classList.add("active");
                fadeIn(VakansiForm,"grid")
            }
        });
    }
    let PriceSearch =  document.querySelector(".price_page_search");
    if(PriceSearch !== null) {
        if(PriceSearch.classList.contains("true")){
            fadeIn(document.querySelector(".price_page_result"));
        }
    }
})