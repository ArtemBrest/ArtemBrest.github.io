//--------------------- ↓ Animation on banner ↓ ---------------------//
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 1px solid #666}';
  document.body.appendChild(css);
};
//--------------------- ↑ Animation on banner ↑ ---------------------//

$('.comments_sl').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  prevArrow: '<div class="prev-comments_sl"><svg width="19" height="61" viewBox="0 0 19 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 1L1 30.9275L18 60" stroke="#091A38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  nextArrow: '<div class="next-comments_sl"><svg width="19" height="61" viewBox="0 0 19 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L18 30.9275L1 60" stroke="#091A38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]
});


$(".card_tab_content .card_right").not(":first").hide();
$(".wrapper .price_tabs_span").click(function() {
  $(".wrapper .price_tabs_span").removeClass("active").eq($(this).index()).addClass("active");
  $(".price_card_size").hide().eq($(this).index()).fadeIn();
  if ($(".price_tabs_span:last-child").hasClass("active")){
    $(".price_card_size").not(":first").find(".card_tabs_row:first-child").addClass("active");
    $(".price_card_size").not(":first").find(".card_right:first-child").fadeIn();
    $(".price_card_size:first").find(".card_right").fadeOut();
    $(".price_card_size:first").find(".card_tabs_row").removeClass("active");
  }
  else{
    $(".price_card_size").not(":first").find(".card_tabs_row").removeClass("active");
    $(".price_card_size").not(":first").find(".card_right").fadeOut();
    $(".price_card_size:first").find(".card_right:first-child").fadeIn();
    $(".price_card_size:first").find(".card_tabs_row:first-child").addClass("active");
  }
}).eq(0).addClass("active");


$(".price_card_size").not(":first").hide();
$(".wrapper .card_tabs_row").click(function() {
  $(this).removeClass("active").eq($(this).index()).addClass("active");
  $(this).parent(".card_tabs").parent(".price_card_size").find(".card_right").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");

$(".portfolio-btn").click(function () {
  if ($(".portfolio_cards_preview").hasClass("active")){
    $('.portfolio_cards_preview').removeClass("active");
    $('.portfolio_cards_preview').fadeOut(350);
    $(".portfolio-btn").html("Показать еще");
    $(".portfolio_cards").removeClass("active");
  }
  else{
    $(".portfolio_cards_preview").fadeIn(350);
    $(".portfolio_cards_preview").addClass("active");
    $(".portfolio-btn").html("Скрыть");
    $(".portfolio_cards").addClass("active");
  }
  $('.portfolio_cards_preview').isotope({
    itemSelector: '.item_sub',
  });
});
$('.grid').isotope({
  itemSelector: '.item_sub',
});

$(".step_left_video").click(function () {
    var parent_sub = $(this).parent(".step_left").find(".modal_video").fadeIn(350);
    $(".fade").fadeIn(350);
});
$(".material_video_center_group").click(function () {
  var parent_sub = $(this).parent(".material_video_center").find(".modal_video").fadeIn(350);
  $(".fade").fadeIn(350);
});
$(".certificate_video_center_group").click(function () {
  $(this).parent(".certificate_video_center").find(".modal_video").fadeIn(350);
  $(".fade").fadeIn(350);
});
$(".fade").click(function () {
  $(".modal_video").fadeOut(350);
  $(this).fadeOut(350);
});

/* accordion*/
var accord = $(".accordion");
var up = $(".accordion_top-icon");
accord.find(".accordion_top:not(.active)").siblings($(".accordion_content")).slideUp();
accord.find(".accordion_top").on("click", function () {
  $(this).siblings($(".accordion_content")).stop().slideToggle(500);
  //$(this).parent(accord).find(".accordion_content").addClass("active")
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
  if ($(this).find(".icon").hasClass("icon_active")) {
    $(this).find(".icon").removeClass("icon_active");
  } else {
    $(this).find(".icon").addClass("icon_active");
  }
});
/*end accordion*/

jQuery(function($){
  $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1500, 'swing', function(){
      window.location.hash = hash;
    });
  });
});
$(".grid").lightGallery({
  selector: '.card'
});




$('.ba-slider').beforeAfter();
var _beforeAfter = {
  init: function () {
    var u = document.querySelectorAll(".before-after"),o;
    for (var i = 0; i < u.length; i++) {
      u[i].addEventListener("click", _beforeAfter.trackLocation, false);
      u[i].addEventListener("mousemove", _beforeAfter.trackLocation, false);
      u[i].addEventListener("touchstart", _beforeAfter.trackLocation, false);
      u[i].addEventListener('touchend', _beforeAfter.trackLocation, false);
      u[i].addEventListener("touchmove", _beforeAfter.trackLocation, false);
      o=u[i].getElementsByTagName("IMG")[0];
      o.addEventListener("drag", cancelBubble, false);
      o.addEventListener("dragstart", cancelBubble, false);
      o.addEventListener("dragdrop", cancelBubble, false);
    }
  },
  trackLocation: function (e) {
    e = e || window.event;
    //console.log(e, e.type, e.buttons);
    if(e.type.substr(0,5)!='touch' && e.buttons != 1 && e.type!='click')return;
    var pos=(e.type.substr(0,5)=='touch' && e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
    var o = getEventTarget(e);
    var u = o.parentNode;
    var d = u.getElementsByTagName("DIV")[0];
    i = u.getElementsByTagName("IMG")[0];

    var rect = i.getBoundingClientRect();
    var position = ((pos - rect.left) / i.offsetWidth) * 100;
    if (position>=0 && position <= 100 && d.nextElementSibling) {
      if(e.type=='click')addClass(u,'transition');
      d.style.width = position + "%";
      d.nextElementSibling.style.right=i.offsetWidth-(pos-rect.left)-23+'px';
      if(e.type=='click')setTimeout(function (){removeClass(u,'transition');},1000);
    }
  },
  change: function (t,o) {
    o=document.getElementById(o);
    var b=t.src.replace('.jpg','_before.jpg'), a=t.src.replace('.jpg','_after.jpg'),
        b1=new Image(), a1=new Image();
    document.getElementsByTagName('body')[0].style.cursor='wait';
    //b1.onload = function (e) { console.log("image1 is loaded",e); };
    b1.src = b;
    a1.onload = function (e) {
      console.log("image2 is loaded",e);
      function getEventTarget(e) {
        return undefined;
      }
      var t= getEventTarget(e);
      //var w=parseInt(t.width), h=parseInt(t.height);
      //o.style.width= (w+35)+'px';
      var o1=o.firstElementChild;
      var o2=o1.getElementsByTagName('DIV')[0].style;
      o2.backgroundImage='url('+a+')';
      o2.width='calc(100% - 50%)';
      //o1.getElementsByTagName("DIV")[1].style.right='37px';
      o1.getElementsByTagName('IMG')[0].src=b;
      //o1.style.height=h+'px';
      //o1.style.width= w+'px';
      document.getElementsByTagName('body')[0].style.cursor='inherit';
    };
    a1.src = a;
  }
};

