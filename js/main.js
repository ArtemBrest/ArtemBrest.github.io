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
  console.log($(this).parent(".price_card_size"));
  $(this).removeClass("active").eq($(this).index()).addClass("active");
  $(this).parent(".card_tabs").parent(".price_card_size").find(".card_right").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");

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

