$(document).ready(function(){
    $('.main-slider').slick({
      dots: true,
      // fade: true,
      speed: 400,
      // slidesToShow: 2,
      // slidesToScroll: 2, 
      customPaging: function(settings, index) {
        console.log("run", index);
        return `<span>
        <span class="number">${index + 1}</span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        </span>`
      },
      prevArrow: '<button class="main-slider__prev"><span class="ion-ios-arrow-back"></span></button>',
      nextArrow: '<button class="main-slider__next"><span class="ion-ios-arrow-forward"></span></button>',
    });
  
    $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      // console.log("beforeChange:currentSlide", currentSlide);
      // console.log("beforeChange:nextSlide", nextSlide);
      // console.log(document.querySelector(`.main-slider [data-slick-index="${currentSlide}"]`))
      // console.log('---------------------------------------------')
      var prevEl = document.querySelector(`.main-slider [data-slick-index="${currentSlide}"]`);
      // var nextEl = document.querySelector(`.main-slider [data-slick-index="${nextSlide}"]`);
      prevEl.classList.remove('class-hieu-ung');
      // nextEl.classList.add('class-hieu-ung');
    });
  
    $('.main-slider').on('afterChange', function(event, slick, currentSlide){
      // console.log("afterChange:currentSlide", currentSlide);
      // console.log(document.querySelector(`.main-slider [data-slick-index="${currentSlide}"]`))
      // console.log('---------------------------------------------')
      var nextEl = document.querySelector(`.main-slider [data-slick-index="${currentSlide}"]`);
      nextEl.classList.add('class-hieu-ung');
    });
  
  
  });
  
  
  // 1 slide hien thi 2 phan tu
  // tong cong co 5 phan tu
  // 2 - 2 - 1 -> có 3 dots