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
    if (document.querySelector(".about_swiper") !== null) {
        var swiper = new Swiper(".about_swiper", {
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                clickable: true,
                el: ".swiper-pagination",
            },
        });
    }

    if (document.querySelector(".reviews_swiper") !== null) {
        var swiper = new Swiper(".reviews_swiper", {
            loop: true,
            pagination: {
                slidesPerView: 1,
                clickable: true,
                el: ".swiper-pagination",
            },
        });
    }


    let menu_overlay = document.querySelector(".menu-overlay");
    let mob_menu = document.querySelector(".header_mob_menu");
    let mob_menu_icon = document.querySelector(".header_menu_mob_btn");
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

    let fade = document.querySelector(".fade");
    let modal = document.getElementById("modal");
    let modal_close  = document.querySelector(".modal-close");
    let modal_thanks = document.getElementById("modal_thanks");
    let modal_thanks_btn = document.querySelector(".modal_thanks-btn");
    let modal_thanks_close = document.querySelector(".modal_thanks-close");
    if(modal_thanks_btn !== null){
        modal_thanks_btn.addEventListener('click', event => {
            fadeOut(fade);
            fadeOut(modal_thanks);
        });
    }
    if(modal_thanks_close !== null){
        modal_thanks_close.addEventListener('click', event => {
            fadeOut(fade);
            fadeOut(modal_thanks);
        });
    }
    if(modal_close !== null){
        modal_close.addEventListener('click', event => {
            fadeOut(fade);
            fadeOut(modal);
        });
    }
    if (fade !== null) {
        fade.addEventListener('click', event => {
            fadeOut(fade);
            fadeOut(modal_thanks);
            fadeOut(modal);
        });
    }


    let btnFadeModal = document.querySelectorAll(".btnFadeModal");
    for (let i = 0; i < btnFadeModal.length; i++){
        btnFadeModal[i].addEventListener('click', event => {
            fadeIn(fade,"block");
            fadeIn(modal, "block")
        });
    }


    // Регулярные выражения
    const regexName = /^[а-яА-Яa-zA-ZЁёЫы0-9 .,!?:'"+_&@#*()-]{2,100}$/iu;
    const regexPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    const sendingLetterForm = document.querySelector('#contact_form');
    const sendingForm = document.querySelector('#modal_form');
    if (sendingLetterForm !== null) {
        sendingLetterForm.addEventListener('keyup', () => {

            const name = document.querySelector('#input_name').value;
            const phone = document.querySelector('#input_phone').value;

            // Проверка имя
            if (regexName.test(name)) {
                document.querySelector('#input_name').classList.remove("error");
                document.querySelector('#input_name').classList.add("valid");
            } else {
                document.querySelector('#input_name').classList.add("error");
            }
            // Проверка телефона
            if (regexPhone.test(phone)) {
                document.querySelector('#input_phone').classList.remove("error");
                document.querySelector('#input_phone').classList.add("valid");
            } else {
                document.querySelector('#input_phone').classList.add("error");
            }
        });
        sendingLetterForm.addEventListener('submit', (event) => {

            event.preventDefault();

            let name = document.querySelector('#input_name');
            let phone = document.querySelector('#input_phone');

            // Проверить, если значение из input-ов не проходят проверку по регулярным выражениям, вернуть false - не разрешать отправку формы
            if (!regexName.test(name.value) || !regexPhone.test(phone.value)) {
                name.classList.add("error");
                phone.classList.add("error");
            }
            else {
                const ajax = async () => {
                    const response = await fetch('/mail/mail.php', {
                        method: 'POST',
                        body: new FormData(sendingLetterForm),
                    });

                    if (!response.ok) {
                        throw new Error(response.status);
                    } else {
                        const data = await response.text();
                        switch (data) {
                            case '0':
                                console.log("Извините, произошла ошибка. Пожалуйста, повторите отправку позже!")
                                break;
                            case '1':
                                name.classList.remove("valid");
                                phone.classList.remove("valid");
                                fadeIn(fade,'block');
                                fadeIn(modal_thanks,'block');
                                break;
                            case '2':
                                console.log("Заполните необходимые поля!")
                                break;
                        }
                    }
                };
                ajax()
                name.value = '';
                phone.value = '';
            }
        });
    }
    if (sendingForm !== null) {
        sendingForm.addEventListener('keyup', () => {

            const name = document.querySelector('#modal_input_name').value;
            const phone = document.querySelector('#modal_input_phone').value;

            // Проверка имя
            if (regexName.test(name)) {
                document.querySelector('#modal_input_name').classList.remove("error");
                document.querySelector('#modal_input_name').classList.add("valid");
            } else {
                document.querySelector('#modal_input_name').classList.add("error");
            }
            // Проверка телефона
            if (regexPhone.test(phone)) {
                document.querySelector('#modal_input_phone').classList.remove("error");
                document.querySelector('#modal_input_phone').classList.add("valid");
            } else {
                document.querySelector('#modal_input_phone').classList.add("error");
            }
        });
        sendingForm.addEventListener('submit', (event) => {

            event.preventDefault();

            let name = document.querySelector('#modal_input_name');
            let phone = document.querySelector('#modal_input_phone');

            // Проверить, если значение из input-ов не проходят проверку по регулярным выражениям, вернуть false - не разрешать отправку формы
            if (!regexName.test(name.value) || !regexPhone.test(phone.value)) {
                name.classList.add("error");
                phone.classList.add("error");
            }
            else {
                const ajax = async () => {
                    const response = await fetch('/mail/mail.php', {
                        method: 'POST',
                        body: new FormData(sendingForm),
                    });

                    if (!response.ok) {
                        throw new Error(response.status);
                    } else {
                        const data = await response.text();
                        switch (data) {
                            case '0':
                                console.log("Извините, произошла ошибка. Пожалуйста, повторите отправку позже!")
                                break;
                            case '1':
                                name.classList.remove("valid");
                                phone.classList.remove("valid");
                                fadeOut(modal)
                                fadeIn(fade,'block');
                                fadeIn(modal_thanks,'block');
                                break;
                            case '2':
                                console.log("Заполните необходимые поля!")
                                break;
                        }
                    }
                };
                ajax()
                name.value = '';
                phone.value = '';
            }
        });
    }
})