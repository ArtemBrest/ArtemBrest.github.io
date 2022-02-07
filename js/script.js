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
    let BannerSwiper = document.querySelector(".banner-swiper");
    if (BannerSwiper !== null) {
        var swiper = new Swiper(BannerSwiper, {
            autoplay: {
                delay: 20000,
                disableOnInteraction: false,
            },
        });
    }
    let ReviewSwiper = document.querySelector(".review-swiper");
    if (ReviewSwiper !== null) {
        var swiper = new Swiper(ReviewSwiper, {
            navigation: {
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
            },
        });
    }


    function initAcc(elem) {
        let item = elem.querySelectorAll(".card_header");
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function(e) {
                let content = this.parentElement.querySelector(".card_info");
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    fadeIn(content,'flex');
                } else {
                    this.classList.remove('active');
                    fadeOut(content);
                }
            });
        }
    }
    let faq_acc = document.querySelector(".tab_content.active");
    let tabLinks = document.querySelectorAll(".aside_elem");
    let tabPanels = document.querySelectorAll(".tab_content");
    if(faq_acc !== null){
        initAcc(faq_acc);
    }

    if(tabPanels !== null && tabLinks !== null && faq_acc !== null) {
        for (let el of tabLinks) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".aside_elem.active")) {
                    document.querySelector(".aside_elem.active").classList.remove("active");
                }
                if (document.querySelector(".tab_content.active")) {
                    document.querySelector(".tab_content.active").classList.remove("active");
                }
                //const parentListItem = el.parentElement;
                el.classList.add("active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
                initAcc(panel[0])
                panel[0].classList.add("active");


            });
        }
    }
})