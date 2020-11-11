$(document).ready(function(){
  // 01. Main Slider
  $('.main-slider').slick({
    dots: false,
    fade: true,
    speed: 400,
    prevArrow: '<button class="slider-btn slider-btn__prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button class="slider-btn slider-btn__next"><span class="ion-chevron-right"></span></button>',
  });
})