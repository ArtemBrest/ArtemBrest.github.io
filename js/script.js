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
    if (document.querySelector(".banner_swiper") !== null) {
        var swiper = new Swiper(".banner_swiper", {
            loop: true,
            navigation: {
                slidesPerView: 2,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    let tab_link = document.querySelectorAll(".card_info_tab-link");
    let tab_content = document.querySelectorAll(".tabcontent");
    if (tab_link !== null || tab_content !== null) {
        for(var i=0; i <tab_link.length; i++) {
            (function(i) {
                var link = tab_link[i];
                link.onclick = function() {
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


    let menu_overlay = document.querySelector(".menu-overlay");
    let mob_menu = document.querySelector(".header_mob_menu");
    let mob_menu_icon = document.querySelector(".header_info_mob");
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

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            mob_menu_icon.classList.remove("active");
            fadeOut(mob_menu);
            fadeOut(menu_overlay);
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

})