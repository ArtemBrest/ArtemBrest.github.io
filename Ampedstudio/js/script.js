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
    let header_top_lang = document.querySelector(".header_top_lang");
    let header_top_lang_links_dropdown = document.querySelector(".header_top_lang_links_dropdown");
    if(header_top_lang !== null){
        header_top_lang.addEventListener('click', event => {
            if(header_top_lang.classList.contains("active")){
                header_top_lang.classList.remove("active");
                fadeOut(header_top_lang_links_dropdown);
            }
            else{
                header_top_lang.classList.add("active");
                fadeIn(header_top_lang_links_dropdown,"block");
            }
        })
    }
    if(document.getElementById('header_banner_video') !== null) {
        lightGallery(document.getElementById('header_banner_video'), {
            selector: '.header_banner-btn',
        });
    }
    if(document.querySelector(".examples_work_cards") !== null) {
        let item = document.querySelector(".examples_work_cards").querySelectorAll(".card");
        let item_img, item_content;
        if(item !== null) {
            for (let i = 0; i < item.length; i++) {
                item_img = item[i].querySelector(".card_top");
                item_content = item[i].querySelector(".card_content");
                if(item_img !== null) {
                    lightGallery(item_img, {
                        selector: '.card_top_bg',
                    });
                }
                if(item_content !== null) {
                    lightGallery(item_content, {
                        selector: '.card_content-review',
                    })
                }
            }
        }
    }
    if(document.querySelector(".hits_swiper") !== null) {
        var swiper = new Swiper(".hits_swiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    if(document.getElementById('hits_swiper') !== null) {
        lightGallery(document.getElementById('hits_swiper'), {
            selector: '.swiper-slide_video',
        });
    }

    let tab_link = document.querySelectorAll(".studio_grid_aside_tabs-btn");
    let tab_content = document.querySelectorAll(".studio_grid_content_row");
    if (tab_link !== null || tab_content !== null) {
        for(var i=0; i <tab_link.length; i++) {
            (function(i) {
                var link = tab_link[i];
                link.onclick = function() {
                    for(var z=0;z < tab_link.length; z++){
                        tab_link[z].classList.remove("active");
                    }
                    for(var j=0; j < tab_content.length; j++) {
                        var display = window.getComputedStyle(tab_content[j]).display;
                        if(display == "block") {
                            link.classList.remove("active");
                            fadeOut(tab_content[j]);
                            tab_link[j].classList.remove("active");
                        }
                    }

                    tab_link[i].classList.add("active");
                    fadeIn(tab_content[i],"block");
                }
            })(i);
        }
    }

    let manual_link = document.querySelectorAll(".manual_grid_aside_li");
    let manual_content = document.querySelectorAll(".manual_grid_content_row");
    if (manual_link !== null || manual_content !== null) {
        for(var i=0; i < manual_link.length; i++) {
            (function(i) {
                var sub_menu = manual_link[i].querySelectorAll(".manual_grid_aside_li_sub");
                for (let  k=0; k < sub_menu.length; k++){
                    sub_menu[k].addEventListener('click', event => {
                        for (let kk = 0; kk < sub_menu.length; kk++){
                            sub_menu[kk].classList.remove("active");
                        }
                        if(sub_menu[k].classList.contains("active")){
                            sub_menu[k].classList.remove("active");
                        }
                        else{
                            sub_menu[k].classList.add("active");
                        }
                    })
                }
                var link;
                if(manual_link[i].querySelector(".manual_grid_aside_link")){
                    link  = manual_link[i].querySelector(".manual_grid_aside_link");
                }
                else{
                    link = manual_link[i];
                }
                link.onclick = function() {
                    for(var z=0; z < manual_link.length; z++){
                        manual_link[z].classList.remove("active");
                    }
                    for(var j=0; j < manual_content.length; j++) {
                        var display = window.getComputedStyle(manual_content[j]).display;
                        if(display == "block") {
                            manual_link[i].classList.add("active");
                            fadeOut(manual_content[j]);
                        }
                    }
                    manual_link[i].classList.add("active");
                    fadeIn(manual_content[i],"block");
                }
            })(i);
        }
    }

    if(document.querySelector(".studio_grid_content") !== null) {
        let item_parent = document.querySelector(".studio_grid_content").querySelectorAll(".studio_grid_content_cards");
        let item_child;
        if(item_parent !== null) {
            for (let i = 0; i < item_parent.length; i++) {
                item_child = item_parent[i];
                if(item_child !== null) {
                    lightGallery(item_child, {
                        selector: '.card',
                    });
                }
            }
        }
    }



    var header = document.getElementById("header_fixed");
    let header_icon = document.querySelector(".header_top_icon");
    let header_mob = document.querySelector(".header_mob");
    let header_home = false;
    var stuck = false;
    var stickPoint = getDistance();
    function getDistance() {
        var topDist = header.offsetTop;
        return topDist;
    }
    window.onscroll = function(e) {
        if(window.pageYOffset)
        var distance = getDistance() - window.pageYOffset;
        var offset = window.pageYOffset;
        if ( (distance <= 0) && !stuck) {
            if(header.querySelector(".header_top").classList.contains("other_page")){
                header_home = false;
            }
            else{
                header.querySelector(".header_top").classList.add("other_page");
                header_home = true;
            }
            header.classList.add("active");
            stuck = true;
        } else if (stuck && (offset <= stickPoint)){
            if(header_home == true){
                header.querySelector(".header_top").classList.remove("other_page");
            }
            if (!header_mob.classList.contains("active")){
                header.classList.remove("active");
            }
            stuck = false;
        }
    }
    if (header_icon !== null || header_mob !== null) {
        header_icon.addEventListener('click', event => {
            if(header_mob.classList.contains("active")){
                header_mob.parentNode.querySelector(".header_top").classList.remove("mob_menu_active");
                header_mob.classList.remove("active");
                header_icon.classList.remove("active");
                header.classList.remove("active");
                if(header_home == true){
                    header.querySelector(".header_top").classList.remove("other_page");
                }
                fadeOut(header_mob);
            }
            else{
                header_mob.parentNode.querySelector(".header_top").classList.add("mob_menu_active");
                header_mob.classList.add("active");
                header_icon.classList.add("active");
                header.classList.add("active");
                if(header.querySelector(".header_top").classList.contains("other_page")){
                    header_home = false;
                }
                else{
                    header.querySelector(".header_top").classList.add("other_page");
                    header_home = true;
                }
                fadeIn(header_mob,"block");
            }

        })
    }
    // get a reference to our predefined button
    var scrollToTopBtn = document.querySelector(".up");
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

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    var skroll = new Skroll().add(".anim1",{
        animation:"zoomIn",
        duration: 600
    }).add(".anim3",{
        animation:"rotateLeftIn",
        delay:100,
        duration:1000
    }).add(".anim7",{
        animation:"spinIn",
        delay:100,
        duration:1000,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    }).add(".anim8",{
        animation:"fadeInDown",
        delay:90,
        duration:800,
        triggerBottom:1,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
    }).init();
})