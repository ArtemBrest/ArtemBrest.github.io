//"use strict";
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

if( window.innerWidth <= 600 ){
    [].forEach.call(document.querySelectorAll('.portfolio_cards'), function(el){
        var flag = 0, elt = el.firstElementChild, elt5 = el.children[6];

        let parent = document.querySelector('#portfolio_cards');
        let p = document.createElement('p');
        p.classList.add("portfolio_cards-pagebreak");
        p.innerHTML = '<!-- pagebreak -->';
        parent.insertBefore(p,elt5);
        console.log(elt5);
        while(elt = elt.nextElementSibling) {
            if(flag) elt.style.display = "none";
            if(elt.firstChild && elt.firstChild.textContent == ' pagebreak ') flag = 1;
        }
        el.insertAdjacentHTML('beforeend', '<button class="portfolio_cards-btn">Показать еще</button>');
    });
    [].forEach.call(document.querySelectorAll('.portfolio_cards button'), function(el){
        el.onclick = function(e){
            var elt = this;
            while(elt = elt.previousElementSibling) {
                if(elt.firstChild && elt.firstChild.textContent == ' pagebreak ') break;
                //elt.style.display = elt.style.display == "none"? "block":"none";
                elt.style.display = elt.style.display == "none"? fadeIn(elt, "block"): fadeOut(elt);
            }
            e.target.textContent = e.target.textContent == "Показать еще"?"Свернуть":"Показать еще";
        };
    });
}

lightGallery(document.getElementById('portfolio_cards'),
    { selector: '.card', }
);

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        for (i = 0; i < menu.length; i++) {
            fadeOut(menu[i]);
        }
        for (i = 0; i < btnMenu.length; i++) {
            btnMenu[i].classList.remove("active");
        }
        fadeOut(overlay);
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



let btnMenu = document.getElementsByClassName("header_top_icon");
let menu = document.getElementsByClassName("header_mob_menu");
let overlay = document.getElementById("menu-overlay");
let menu_link = document.getElementsByClassName("header_mob_menu_link");
[].forEach.call(btnMenu,function(el){
    el.addEventListener('click', function (e) {
        if (this.classList.contains('active')){
            this.classList.remove("active");
            fadeOut(overlay);
            for (i = 0; i < menu.length; i++) {
                fadeOut(menu[i]);
            }
        }
        else{
            this.classList.add("active");
            fadeIn(overlay,"block");
            for (i = 0; i < menu.length; i++) {
                fadeIn(menu[i],'block');
            }
        }
    });
});

overlay.addEventListener('click', function (e) {
    for (i = 0; i < menu.length; i++) {
        fadeOut(menu[i]);
    }
    for (i = 0; i < btnMenu.length; i++) {
        btnMenu[i].classList.remove("active");
    }
    fadeOut(overlay);
});