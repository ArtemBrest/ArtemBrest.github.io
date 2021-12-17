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
    let assortment_cards = document.getElementById("assortment_cards");
    if(assortment_cards !== null){
        lightGallery(assortment_cards, {
            selector: '.card',
            plugins: [lgZoom],
        });
    }
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
    let menu = document.querySelector(".header_top_menu");
    if(menu !== null){
        menu.addEventListener("click",function(e) {
            if(e.target.closest("a[href^=\"#\"")){
                e.preventDefault();
                let href = e.target.getAttribute('href').substring(1);
                const scrollTarget = document.getElementById(href);
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                window.scrollBy({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        })
    }
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
})