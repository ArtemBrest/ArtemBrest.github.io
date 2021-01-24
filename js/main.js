$(document).ready(function () {


  $('.single__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: true,
    infinity: true,
  });
  $('.endo__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.endo__slider-nav'
  });
  $('.endo__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.endo__slider-for',
    dots: false,
    focusOnSelect: true,
    nextArrow: '<div class="endo__slider-next endo__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="endo__slider-prev endo__slider-arrow"><span></span><span></span></div>',
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  $('.room__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.room__slider-nav'
  });
  $('.room__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.room__slider-for',
    dots: false,
    focusOnSelect: true,
    nextArrow: '<div class="endo__slider-next endo__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="endo__slider-prev endo__slider-arrow"><span></span><span></span></div>',
  });
  $('.main__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    //variableWidth: true,
    infinity: true,
    nextArrow: '<div class="main__slider-next main__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="main__slider-prev main__slider-arrow"><span></span><span></span></div>',

    responsive: [{
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.about__slider').slick({
    // centerMode: true,
    // centerPadding: '0px',
    slidesToShow: 3,
    dots: true,
    infinity: true,
    nextArrow: '<div class="endo__slider-next endo__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="endo__slider-prev endo__slider-arrow"><span></span><span></span></div>',

    responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.photogallery').slick({
    centerPadding: '0px',
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    infinity: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    responsive: [{
        breakpoint: 768,
        settings: {

          // centerMode: true,

          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {

          // centerMode: true,

          slidesToShow: 3
        }
      }
    ]
  });
  $('.partners').slick({
    slidesToShow: 4,
    dots: false,
    infinity: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1000,
    nextArrow: '<div class="partners-next partners-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="partners-prev partners-arrow"><span></span><span></span></div>',
    responsive: [{
        breakpoint: 1450,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1050,
        settings: {

          // centerMode: true,

          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {

          // centerMode: true,

          slidesToShow: 1
        }
      }
    ]
  });
  $('.other__room').slick({
    slidesToShow: 3,
    dots: false,
    infinity: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1000,
    nextArrow: '<div class="endo__slider-next endo__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="endo__slider-prev endo__slider-arrow"><span></span><span></span></div>',
    responsive: [{
        breakpoint: 1450,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1050,
        settings: {

          // centerMode: true,

          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {

          // centerMode: true,

          slidesToShow: 1
        }
      }
    ]
  });
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>Фотогалерея</small>';
      }
    }
  });
  $('.popup__img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });
  // datetime_piker
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '',
    nextText: '',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  /* Локализация timepicker */
  $.timepicker.regional['ru'] = {
    timeOnlyTitle: 'Выберите время',
    timeText: 'Время',
    hourText: 'Часы',
    minuteText: 'Минуты',
    secondText: 'Секунды',
    millisecText: 'Миллисекунды',
    timezoneText: 'Часовой пояс',
    currentText: 'Сейчас',
    closeText: 'Закрыть',
    timeFormat: 'HH:mm',
    amNames: ['AM', 'A'],
    pmNames: ['PM', 'P'],
    isRTL: false
  };
  $.timepicker.setDefaults($.timepicker.regional['ru']);

  $(function () {
    $(".input__date").datepicker();
  });
  $(".telephone").inputmask({
    mask: "+375 (99) 999 99 99",
    clearIncomplete: true,
    greedy: false
  });
  $(".guest").inputmask({
    mask: "9 взрослый, 9 детей",

  });
});

$(document).ready(function () {
  $(".send__form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('._def').hide();
      $('._thx').show();
      setTimeout(function () {
        $('._thx').hide();
        $('._def').show();
        $('.popup__close').click();
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $("form").keydown(function () {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });

  $('.custom-select').click(function (e) {
    var customSelectOption = $(this).find('.custom-select__option');
    var selectIcon = $(this).find('.custom-select__icon');
    selectIcon.toggleClass('__show');
    customSelectOption.is(":visible") ? customSelectOption.slideUp() : customSelectOption.hide().slideDown().css('display', 'flex');
    e.preventDefault();
  });
  $('.custom-select__option li').click(function (e) {
    var option = $(this).text();
    var number = $(this).data('phone');
    console.log(number);
    $(this).parents('.custom-select').find('.custom-selected').text(option);
     $('.header__info-phone').text(number).attr('href','tel:'+number+'');
    e.preventDefault();
  });

  function selectClose() {
    $('.custom-select__option').slideUp();
    $('.form__input-select__option').slideUp();
    $('.custom-select__icon').removeClass('__show');
  }

  function formClose() {
    $('.popup').hide();
    //  $('.massage__popup-text').html('');
    // $('.thermoprocedure__more-text').html('');

    $('body').removeClass('__fixed');
  }
  $('.burger__menu').click(function (e) {
    $('.burger__menu').toggleClass('__active');
    $('.header__wrapper-content').toggleClass('__show');
     $('body').toggleClass('__fixed');
    e.preventDefault();

  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) // esc
      $('.burger__menu').removeClass('__active');
    $('.header__wrapper-content').removeClass('__show');
    $('.find__form').slideUp();
    formClose();
    selectClose();
  });
  $('.popup__close').click(function (e) {
    formClose();

    e.preventDefault();

  });
  $('custom-select').hover(function () {}, function () {
    selectClose();
  });
  $('.custom-select__option').hover(function () {}, function () {
    selectClose();
  });
  $('.show__find').click(function (e) {
    $('.find__form').slideToggle();
    e.preventDefault();
  });
  $('.show__form').click(function (e) {
    $('.popup__form').hide().css("display", "flex").fadeIn();
    $('body').addClass('__fixed');
    e.preventDefault();

  });
  $('.popup-bg').click(function (e) {
    formClose();
    e.preventDefault();

  });
  $(window).scroll(function () {
    $('.burger__menu').removeClass('__active');
    $('.header__wrapper-content').removeClass('__show');

    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      // console.log(how_srol);
      $(".header").addClass("__show");
      // $('.header__wrapper .logo').fadeOut();

      // $(".pseudo-header").slideDown('slow');
    } else {
      // $(".pseudo-header").slideUp('slow');
      //  $('.header__wrapper .logo').fadeIn();
      $(".header").removeClass("__show");
    }
  });
  var therapyЕypeItem = 0,
    spaPost = 0,
    typeRitualItem = $('.type__ritual'),
    therapyTypeItem = $('.therapy__type-item'),
    spa__wrapper = $('.spa__wrapper'),
    blog = $('.content__grid-blog');
  if (($(window).width() >= 800)) {
    therapyЕypeItem = 12;
    spaPost = 5;
  } else {
    therapyЕypeItem = 9;
    spaPost = 3;
  }


  therapyTypeItem.slice(therapyЕypeItem).slideToggle();
  spa__wrapper.slice(spaPost).slideToggle();
  typeRitualItem.slice(4).slideToggle();
  blog.slice(2).slideToggle();

  $('.therapy__type-show__more').click(function (e) {
    if ($('.therapy__type-item').slice(therapyЕypeItem).is(':visible')) {
      $('.therapy__type-item').slice(therapyЕypeItem).slideToggle('slow');
      $(this).delay(300).text('Показать больше');
    } else {
      $('.therapy__type-item').slice(therapyЕypeItem).slideToggle('slow');
      $(this).delay(300).text('Скрыть');
    }
    e.preventDefault();
  });
  $('.spa__type-show__more').click(function (e) {
    if (spa__wrapper.slice(spaPost).is(':visible')) {
      spa__wrapper.slice(spaPost).slideToggle('slow');
      $(this).delay(300).text('Показать больше');
    } else {
      spa__wrapper.slice(spaPost).slideToggle('slow');
      $(this).delay(300).text('Скрыть');
    }
    e.preventDefault();
  });
  $('.type__ritual-show__more').click(function (e) {
    if (typeRitualItem.slice(4).is(':visible')) {
      typeRitualItem.slice(4).slideToggle('slow');
      $(this).delay(300).text('Показать больше');
    } else {
      typeRitualItem.slice(4).slideToggle('slow');
      $(this).delay(300).text('Скрыть');
    }
    e.preventDefault();

  });
  $('.hydro__more').click(function (e) {
    var hydrotherapyImg = $(this).find('.hydrotherapy-img').attr("src"),
      hydrotherapyTitle = $(this).find('.hydrotherapy-title').text(),
      hydrotherapyText = $(this).find('.hydrotherapy-text').html();
    $('.hydrotherapy-popup__img img').attr("src", hydrotherapyImg);
    $('.hydrotherapy-popup__img').attr("href", hydrotherapyImg);
    $('.hydrotherapy-popup__title').text(hydrotherapyTitle);
    $('.hydrotherapy-popup__text').html('');

    $('.hydrotherapy-popup__text').html(hydrotherapyText);
    $('.popup__more').hide().css("display", "flex").fadeIn();
    $('body').addClass('__fixed');
    e.preventDefault();
  });
  $('.type__ritual-item').click(function (e) {
    var typeRitualItemTitle = $(this).find('.type__ritual-title').text(),
      typeRitualImg = $(this).find('img').attr("src");
    typeRitualMoreText = $(this).find('.type__ritual-more__text').html();
    console.log(typeRitualImg)
    $('.sparitual__more-title').text(typeRitualItemTitle);
    $('.sparitual__more-popup__img').attr("href", typeRitualImg);
    $('.sparitual__more-img').attr("src", typeRitualImg);
    $('.sparitual__more-text').html(typeRitualMoreText);
    $('.popup__sparitual').hide().css("display", "flex").fadeIn();
    $('body').addClass('__fixed');
    e.preventDefault();

  });
  $('.content__item-thermo__procedure').click(function (e) {
    var thermoTitle = $(this).find('.content__item-text_thermo_procedure').text(),
      thermolImg = $(this).find('img').attr("src");
    thermoMoreText = $(this).find('.content__item-thermo_procedure_more__text').html();

    $('.thermoprocedure__more-title').text(thermoTitle);
    $('.thermoprocedure__more-popup__img').attr("href", thermolImg);
    $('.thermoprocedure__more-img').attr("src", thermolImg);
    $('.thermoprocedure__more-text').html('');

    $('.thermoprocedure__more-text').html(thermoMoreText);

    $('.popup__thermoprocedure').hide().css("display", "flex").fadeIn();
    $('body').addClass('__fixed');
    e.preventDefault();

  });
  $('.question__item').click(function (e) {
    $(this).toggleClass('__show');
    $(this).find('.question__item-answer').slideToggle();
    e.preventDefault();

  });
  $('.food__item').click(function (e) {
    var imgSrc = $(this).find('img').attr("src");
    $('.food-popup__img').attr("href", imgSrc);
    $('.food__preview').attr("src", imgSrc);
    e.preventDefault();

  });
  $('.blog-show__more').click(function (e) {
    $(this).toggleClass('__clicked');

    if (blog.slice(2).is(':visible')) {
      blog.slice(2).slideToggle('slow');
      $(this).delay(300).text('Все статьи');

    } else {
      blog.slice(2).slideToggle('slow');
      $(this).delay(300).text('Скрыть');
    }
    e.preventDefault();
    e.preventDefault();

  });

  function toggleDaictive(btn) {
    $('.btn__active-btn__contact').addClass('d__active');
    btn.removeClass('d__active');

  }
  $('.btn__map').click(function (e) {
    $('.location').slideUp();
    $('.content__map').slideDown();
    toggleDaictive($(this));
    e.preventDefault();

  });
  $('.btn__location').click(function (e) {
    $('.location').slideDown();
    $('.content__map').slideUp();
    toggleDaictive($(this));
    e.preventDefault();
  });
  $('.row__add').click(function (e) {
    var i = $('.row__guest').length;
    i++;
    $('.order__row-add__row').before('<div class="order__row row__guest"><span class="row__number">' + i + '</span>   <input required placeholder="ФИО" type="text" class="form__input"><input required placeholder="Дата рождения*	" type="text" class="form__input"><input required placeholder="Гражданство*	" type="text" class="form__input"><input required placeholder="Тип услуги*" type="text" class="form__input"><input type="hidden" name="номер" value="' + i + '"><a href="#" class="row__del"></a></div>');
    e.preventDefault();
    $('.row__del').click(function (e) {
      $(this).parents('.order__row').remove();
      e.preventDefault();
    });
  });

  $('.booking__add').click(function (e) {
    var i = $('.room').length;

    i++;
    $('.add__grid').before('<div class="form__grid form__grid-booking room"><span class="form__item-title ">Номер <span class="room__number"> ' + i + '</span></span><div class="form__item form__item-del"><div class="add__title">Удалить номер</div><a href="#" class="booking__del"></a></div><div class="form__item"><label for="" class="form__input-select form__input"><span class="selected__text form__input-text">1 Взрослый</span><input class="select__input" type="hidden" value="" id="Adult__' + i + '" name="Взрослый"><span class="form__input-select__icon"><img src="img/drop__down__icon.png" alt=""></span><ul class="form__input-select__option"><li class="form__input-text select__text">1 Взрослый</li><li class="form__input-text select__text">2 Взрослых</li><li class="form__input-text select__text">3 Взрослых</li><li class="form__input-text select__text">4 Взрослых</li></ul></label></div><div class="form__item">         <label for="" class="form__input-select form__input"><span class="selected__text form__input-text">Ребенок 11 лет</span>         <input class="select__input" type="hidden" value="" id="children_' + i + '" name="Взрослый">    <span class="form__input-select__icon"><img src="img/drop__down__icon.png" alt=""></span><ul class="form__input-select__option">          <li class="form__input-text select__text">+ Добавить детей</li>                    <li class="form__input-text select__text">Ребенок 11 лет</li>                    <li class="form__input-text select__text">Ребенок 10 лет</li>              <li class="form__input-text select__text">Ребенок 9 лет</li>           <li class="form__input-text select__text">Ребенок 8 лет</li> <li class="form__input-text select__text">Ребенок 7 лет</li>   <li class="form__input-text select__text">Ребенок 6 лет</li>      <li class="form__input-text select__text">Ребенок 5 лет</li>  <li class="form__input-text select__text">Ребенок 4 лет</li>     </ul>                </label>         <label for="" class="form__input-select form__input">                  <span class="selected__text form__input-text">+ Добавить детей</span>                  <input class="select__input" type="hidden" value="" id="children_' + i + '" name="Взрослый">                  <span class="form__input-select__icon"><img src="img/drop__down__icon.png" alt=""></span>                  <ul class="form__input-select__option">                    <li class="form__input-text select__text">+ Добавить детей</li>                    <li class="form__input-text select__text">Ребенок 11 лет</li>                    <li class="form__input-text select__text">Ребенок 10 лет</li>                    <li class="form__input-text select__text">Ребенок 9 лет</li>                    <li class="form__input-text select__text">Ребенок 8 лет</li>                    <li class="form__input-text select__text">Ребенок 7 лет</li>                    <li class="form__input-text select__text">Ребенок 6 лет</li>                    <li class="form__input-text select__text">Ребенок 5 лет</li>                    <li class="form__input-text select__text">Ребенок 4 лет</li>   </ul>                </label>              </div>            </div>');
    e.preventDefault();
    $('.booking__del').click(function (e) {
      $(this).parents('.form__grid').remove();
      e.preventDefault();
    });
    $('.form__input-select').click(function (e) {
      $(this).find('.form__input-select__option').slideToggle();
      e.preventDefault();

    });
    $('.form__input-select__option').hover(function () {}, function () {
      selectClose();
    });
    $('.select__imgs li').click(function (e) {
      var imgSrc = $(this).find('.select__img').attr("src");
      var country = $(this).find('.select__img').data("country");
      $('.selected__img').attr("src", imgSrc);
      $('#country').val(country);
      e.preventDefault();
    });
    $('.select__text').click(function (e) {
      var selecText = $(this).text();
      $(this).parents('.form__input-select').find('.selected__text').text(selecText);
      $(this).parents('.form__input-select').find('.select__input').val(selecText);
      e.preventDefault();
    });
    $('.booking__del').click(function (e) {
      $(this).parents('.form__grid').remove();
      e.preventDefault();
    });
  });

  $('.form__input-select').click(function (e) {
    $(this).find('.form__input-select__option').slideToggle();
    e.preventDefault();

  });
  $('.form__input-select__option').hover(function () {}, function () {
    selectClose();
  });
  $('.select__imgs li').click(function (e) {
    var imgSrc = $(this).find('.select__img').attr("src");
    var country = $(this).find('.select__img').data("country");
    $('.selected__img').attr("src", imgSrc);
    $('#country').val(country);
    e.preventDefault();
  });
  $('.select__text').click(function (e) {
    var selecText = $(this).text();
    $(this).parents('.form__input-select').find('.selected__text').text(selecText);
    $(this).parents('.form__input-select').find('.select__input').val(selecText);
    e.preventDefault();
  });
  $('.booking__del').click(function (e) {
    $(this).parents('.form__grid').remove();
    e.preventDefault();
  });

// $('.massage__type-item').click(function (e) {
//    var massageImg =$(this).find('.massage__type-img img').attr("src"),
//    massageTitle  = $(this).find('.massage__type-text').text(),
//    massageText = $(this).find('.massage__type-contet').html();
//    $('.massage__popup-title').text(massageTitle);
//     $('.massage__popup-popup__img').attr("href", massageImg);
//     $('.massage__popup-img').attr("src", massageImg);
//      $('.massage__popup-text').html('');
//     $('.massage__popup-text').html(massageText);
//     $('body').addClass('__fixed');

//       $('.popup__massage').hide().css("display", "flex").fadeIn(); 
//   e.preventDefault();
  
// });  
});