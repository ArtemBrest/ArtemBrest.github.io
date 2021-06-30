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
function myFunction() {
    document.getElementById("links_dropdown").classList.toggle("show");
}
window.addEventListener("load", function(){
// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.header_top_lang_dropdown_trigger')) {
            var dropdowns = document.querySelectorAll(".header_top_lang_links_dropdown");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
////////////////////////////// header fixed ///////////////////////////////
    let menu_overlay = document.querySelector(".menu-overlay");
    let header_filter = document.querySelector(".header");
    var header = document.getElementById("header_fixed");
    var header_mob = document.querySelector(".header_mob");
    var lang_switch = document.querySelector('.header_top_lang')
    var stuck = false;
    var stickPoint = getDistance();
    function getDistance() {
        if(window.screen.width > 768) {
            var topDist = header.offsetTop;
        }
        else{
            var topDist = header_mob.offsetTop;
        }
        return topDist;
    }
    if(window.screen.width > 768){
        window.onscroll = function(e) {
            var distance = getDistance() - window.pageYOffset;
            var offset = window.pageYOffset;
            if ( (distance <= 0) && !stuck) {
                header.style.position = 'fixed';
                header.style.top = '0px';
                header.style.boxShadow = '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)';
                lang_switch.style.position = 'fixed';
                lang_switch.style.top = '17px';
                stuck = true;
            } else if (stuck && (offset <= stickPoint)){
                header.style.position = 'relative';
                header.style.top = 'inherit';
                header.style.boxShadow = 'none';
                lang_switch.style.position = 'relative';
                lang_switch.style.top = 'inherit';
                stuck = false;
            }
        }
    }
    else{
        window.onscroll = function(e) {
            var distance = getDistance() - window.pageYOffset;
            var offset = window.pageYOffset;
            if ( (distance <= 0) && !stuck) {
                header_mob.style.position = 'fixed';
                header_mob.style.top = '0px';
                stuck = true;
            } else if (stuck && (offset <= stickPoint)){
                header_mob.style.position = 'relative';
                header_mob.style.top = 'inherit';
                stuck = false;
            }
        }
    }
////////////////////////////// end header fixed ///////////////////////////////




////////////////////////////// filter ///////////////////////////////
    let li_filter = document.querySelectorAll(".filter_menu_li");
    let filter = document.querySelector(".catalog_page_filter");
    let filter_mob = document.querySelector(".catalog_page_filter_mob");
    if (filter_mob !== null) {
        filter_mob.addEventListener('click', event => {
            if(filter_mob.classList.contains("active")){
                fadeOut(filter);
                filter_mob.classList.remove("active")
            }
            else{
                fadeIn(filter,"flex");
                filter_mob.classList.add("active")
            }
        });
    }
    for( let i = 0; i < li_filter.length; i++){ // проходим циклом по всем элементам объекта
        filter.style.zIndex = '9999';
        if (li_filter[i].querySelector('.filter_menu_dropdown') != null){
            li_filter[i].classList.add("has-filter");
            var image = document.createElement('img');
            image.src='img/svg/switch.svg';
            image.alt='switch';
            li_filter[i].appendChild(image);
        }
        li_filter[i].querySelector('.filter_menu_link').addEventListener('click', event => {
            for( let i = 0; i < li.length; i++){
                li_filter[i].classList.remove("show");
            }
            if(li_filter[i].classList.contains("has-filter")){
                li_filter[i].classList.add("show");
                if(window.screen.width > 1520){
                    fadeIn(menu_overlay, "block");
                    header_filter.style.zIndex = '9';
                }
            }
            else{
                if(window.screen.width > 1520){
                    fadeOut(menu_overlay);
                    header_filter.style.zIndex = '99999';
                }
            }
        });
        menu_overlay.addEventListener('click', event => {
            fadeOut(menu_overlay);
            for( let i = 0; i < li.length; i++){
                li_filter[i].classList.remove("show");
            }
        });
    }
////////////////////////////// end filter ///////////////////////////////


////////////////////////////// header menu ///////////////////////////////
    let li = document.querySelectorAll(".header_menu_li");
    for( let i = 0; i < li.length; i++){ // проходим циклом по всем элементам объекта
        if (li[i].querySelector('.header_menu_sub') != null){
            li[i].classList.add("has-children");
            var image = document.createElement('img');
            image.src='img/svg/switch.svg';
            image.alt='switch';
            li[i].appendChild(image);
        }
        if (li[i].querySelector('.header_menu_catalog') != null){
            li[i].classList.add("has-catalog");
            var image = document.createElement('img');
            image.src='img/svg/switch.svg';
            image.alt='switch';
            li[i].appendChild(image);
        }
        li[i].querySelector('.header_menu_link').addEventListener('click', event => {
            header_filter.style.zIndex = '99999';
            for( let i = 0; i < li.length; i++){
                li[i].classList.remove("show");
            }
            if(li[i].classList.contains("has-children")){
                li[i].classList.add("show");
                if(window.screen.width > 1520) {
                    fadeIn(menu_overlay, "block");
                    if (filter !== null) {
                        filter.style.zIndex = '9';
                    }
                }
            }
            else if(li[i].classList.contains("has-catalog")){
                li[i].classList.add("show");
                if(window.screen.width > 1520) {
                    fadeIn(menu_overlay, "block");
                    if (filter !== null) {
                        filter.style.zIndex = '9';
                    }
                }
            }
            else{
                if(window.screen.width > 1520) {
                    fadeOut(menu_overlay);
                    if (filter !== null) {
                        filter.style.zIndex = '9999';
                    }
                }
            }
        });
        menu_overlay.addEventListener('click', event => {
            if(window.screen.width > 1520){
                header_filter.style.zIndex = '9';
                if (filter !== null) {
                    filter.style.zIndex = '9999';
                }
            }
            fadeOut(menu_overlay);
            for( let i = 0; i < li.length; i++){
                li[i].classList.remove("show");
            }
        });
    }
////////////////////////////// end header menu ///////////////////////////////


////////////////////////////// header mob menu ///////////////////////////////
let header_mob_icon =  document.querySelector(".header_mob_top_icon");
let header_mob_menu =  document.querySelector(".header_mob_menu");
let header_mob_menu_li =  document.querySelectorAll(".header_mob_menu_li");
header_mob_icon.addEventListener('click', event => {
    if(header_mob_icon.classList.contains("active")){
        header_mob_icon.classList.remove("active")
        header_mob.style.height = 'auto';
        fadeOut(header_mob_menu);
    }
    else{
        header_mob_icon.classList.add("active")
        header_mob.style.height = '100vh';
        fadeIn(header_mob_menu,"block");
    }
});
for( let i = 0; i < header_mob_menu_li.length; i++){
    if (header_mob_menu_li[i].querySelector('.header_mob_menu_sub') != null){
        header_mob_menu_li[i].classList.add("has-sub_menu");
        var image = document.createElement('img');
        image.src='img/svg/switch.svg';
        image.alt='switch';
        header_mob_menu_li[i].querySelector('.header_mob_menu_li_group').appendChild(image);
    }
    header_mob_menu_li[i].addEventListener('click', event => {
        let header_mob_menu_sub =  header_mob_menu_li[i].querySelector('.header_mob_menu_sub');
        for( let i = 0; i < header_mob_menu_li.length; i++){
            header_mob_menu_li[i].classList.remove("active");
        }
        if(header_mob_menu_li[i].classList.contains("active-li")){
            header_mob_menu_li[i].classList.remove("active-li");
            fadeOut(header_mob_menu_sub);
        }
        else{
            header_mob_menu_li[i].classList.add("active-li");
            fadeIn(header_mob_menu_sub,"block");
        }
    });
}
////////////////////////////// end header mob menu ///////////////////////////////


////////////////////////////// slider ///////////////////////////////
    var swiper = new Swiper(".swiper_slider-sub", {
        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,
    });
    var swiper2 = new Swiper(".swiper_slider-main", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
    var swiper3 = new Swiper(".about_production_swiper", {
        slidesPerView: 2,
        spaceBetween: 60,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 2,
                centeredSlides: true,
            },
        },
    });
////////////////////////////// end slider ///////////////////////////////


////////////////////////////// accordion ///////////////////////////////
    var acc = document.getElementsByClassName("accordion_row");
    var i;
    for (i = 0; i < acc.length; i++) {
        //when one of the buttons are clicked run this function
        acc[i].onclick = function() {
            //variables

            var panel = this.nextElementSibling;
            var coursePanel = document.getElementsByClassName("accordion_content");
            var courseAccordion = document.getElementsByClassName("accordion_row");
            var courseAccordionActive = document.getElementsByClassName("accordion_row active");

            /*if pannel is already open - minimize*/
            if (panel.style.maxHeight){
                //minifies current pannel if already open
                panel.style.maxHeight = null;
                //removes the 'active' class as toggle didnt work on browsers minus chrome
                this.classList.remove("active");
                if(this.classList.contains("review_accordion-btn")){
                    this.innerHTML = "Показть  ответ Papilio";
                }
            } else { //pannel isnt open...
                //goes through the buttons and removes the 'active' css (+ and -)
                for (var ii = 0; ii < courseAccordionActive.length; ii++) {
                    courseAccordionActive[ii].classList.remove("active");
                }
                //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
                for (var iii = 0; iii < coursePanel.length; iii++) {
                    this.classList.remove("active");
                    coursePanel[iii].style.maxHeight = null;
                }
                //opens the specified pannel
                panel.style.maxHeight = panel.scrollHeight + "px";
                //adds the 'active' addition to the css.
                this.classList.add("active");
                if(this.classList.contains("review_accordion-btn")){
                    this.innerHTML = "Свернуть ответ Papilio";
                }
                //this.innerHTML = "Свернуть ответ Papilio";
            }
        }//closing to the acc onclick function
    }//closing to the for loop.
////////////////////////////// end accordion ///////////////////////////////


////////////////////////////// review popup ///////////////////////////////
    let review_btn = document.querySelector(".review_banner_column-btn");
    let order_btn = document.querySelector(".order_dress_page_info-btn")
    let fade_bg = document.querySelector(".fade");
    let review_popup = document.querySelector(".modal1");
    let order_popup = document.querySelector(".order_modal");
    let review_close = document.querySelector(".modal1-close");
    let order_close = document.querySelector(".order_modal-close")
    if (review_btn !== null) {
        review_btn.addEventListener('click', event => {
            fadeIn(review_popup,'block');
            fadeIn(fade_bg,'block');
        });
    }
    if (order_btn !== null) {
        order_btn.addEventListener('click', event => {
            fadeIn(order_popup,'block');
            fadeIn(fade_bg,'block');
        });
    }
    if (review_close !== null) {
        review_close.addEventListener('click', event => {
            fadeOut(review_popup);
            fadeOut(fade_bg);
        });
    }
    if (order_close !== null) {
        order_close.addEventListener('click', event => {
            fadeOut(order_popup);
            fadeOut(fade_bg);
        });
    }
    if (fade_bg !== null) {
        fade_bg.addEventListener('click', event => {
            if (review_popup !== null) {
                fadeOut(review_popup);
            }
            if (order_popup !== null) {
                fadeOut(order_popup);
            }
            fadeOut(fade_bg);
        });
    }
////////////////////////////// end review popup ///////////////////////////////
});








