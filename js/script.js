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

function myFunction() {
    document.getElementById("header__city-dropdown").classList.toggle("active");
}

window.addEventListener("load", function () {
    window.onclick = function (event) {
        if (!event.target.matches('.header__city-line')) {
            var dropdowns = document.querySelectorAll(".header__city-dropdown");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    }
    let header_menu_li = document.querySelectorAll(".header__menu-item");
    if (header_menu_li !== null) {
        for (let i = 0; i < header_menu_li.length; i++) {
            if (header_menu_li[i].querySelector(".sub__menu")) {
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "header__menu-item-icon");
                svg.setAttribute("viewBox", "0 0 11 9");
                svg.setAttribute("width", "11");
                svg.setAttribute("height", "9");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("stroke", "#F6E11F");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("d", "M1 2L5.5 6L10 2");
                svg.appendChild(path);
                header_menu_li[i].appendChild(svg);
            }
            var mouseenter_ev
            if(window.screen.width < 768){
                header_menu_li[i].addEventListener("click", function () {
                    if (header_menu_li[i].classList.contains("active_li")) {
                        header_menu_li[i].classList.remove("active_li");
                        header_menu_li[i].querySelector(".sub__menu").style.display = "none";
                    }
                    else{
                        header_menu_li[i].classList.add("active_li");
                        header_menu_li[i].querySelector(".sub__menu").style.display = "flex";
                    }
                })
            }
            else{
                header_menu_li[i].addEventListener("mouseenter", function () {
                    mouseenter_ev = setTimeout(() => {
                        header_menu_li[i].classList.add("active_li")
                    }, 100);
                    if (header_menu_li[i].querySelector(".sub__menu")) {
                        header_menu_li[i].querySelector(".sub__menu").style.display = "flex";
                    }
                })
                header_menu_li[i].addEventListener("mouseleave", function () {
                    clearTimeout(mouseenter_ev);
                    header_menu_li[i].classList.remove("active_li");
                    if (header_menu_li[i].querySelector(".sub__menu")) {
                        header_menu_li[i].querySelector(".sub__menu").style.display = "none";
                    }
                })
            }
        }
    }
    let sub_menu_li = document.querySelectorAll(".sub__menu-item-1");
    if (sub_menu_li !== null) {
        for (let i = 0; i < sub_menu_li.length; i++) {
            if (sub_menu_li[i].querySelector(".sub__menu")) {
                let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("class", "header__menu-item-icon");
                svg.setAttribute("viewBox", "0 0 9 11");
                svg.setAttribute("width", "9");
                svg.setAttribute("height", "11");
                svg.setAttribute("fill", "none");
                let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("stroke", "#D8D8D8");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("d", "M2 10L6 5.5L2 1");
                svg.appendChild(path);
                sub_menu_li[i].appendChild(svg);
            }
            var mouseenter_ev
            if(window.screen.width < 768){
                sub_menu_li[i].addEventListener("click", function (e) {
                    e.stopPropagation();
                    if (sub_menu_li[i].classList.contains("active_li")) {
                        sub_menu_li[i].classList.remove("active_li");
                        sub_menu_li[i].querySelector(".sub__menu").style.display = "none";
                    }
                    else{
                        sub_menu_li[i].classList.add("active_li");
                        sub_menu_li[i].querySelector(".sub__menu").style.display = "flex";
                    }
                })
            }
            else{
                sub_menu_li[i].addEventListener("mouseenter", function () {
                    mouseenter_ev = setTimeout(() => {
                        sub_menu_li[i].classList.add("active_li")
                    }, 100);
                    if (sub_menu_li[i].querySelector(".sub__menu")) {
                        sub_menu_li[i].querySelector(".sub__menu").style.display = "flex";
                    }
                })
                sub_menu_li[i].addEventListener("mouseleave", function () {
                    clearTimeout(mouseenter_ev);
                    sub_menu_li[i].classList.remove("active_li");
                    if (sub_menu_li[i].querySelector(".sub__menu")) {
                        sub_menu_li[i].querySelector(".sub__menu").style.display = "none";
                    }
                })
            }
        }
    }
    let tabLinks = document.querySelectorAll(".item__tab");
    let tabPanels = document.querySelectorAll(".price__info");
    if (tabPanels !== null && tabLinks !== null) {
        for (let el of tabLinks) {
            el.addEventListener("click", e => {
                e.preventDefault();
                if (document.querySelector(".item__tab.item__tab_active")) {
                    document.querySelector(".item__tab.item__tab_active").classList.remove("item__tab_active")
                }
                if (document.querySelector(".price__info.price__info_active")) {
                    document.querySelector(".price__info.price__info_active").classList.remove("price__info_active")
                }
                el.classList.add("item__tab_active");
                var index = [...el.parentElement.children].indexOf(el);
                var panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
                panel[0].classList.add("price__info_active")
            })
        }
    }

    var swiper = new Swiper(".client__swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });

    let menu_overlay = document.querySelector(".menu-overlay")
    let header_btn_menu = document.querySelector(".header__icon");
    let header_menu_mob = document.querySelector(".header__menu");
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

})