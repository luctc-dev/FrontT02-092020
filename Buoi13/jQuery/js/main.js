$('.parent .box') // Tương ứng với querySelectorAll
  .addClass('box2')
  .css('backgroundColor', 'blue')
  .css('color', 'red')
  .on('click', function(evt) {
    // console.log("event jquery", evt.target.slideToggle()); Sai
    // console.log("event jquery", evt.target);
    console.log("event jquery", $(evt.target).slideToggle());
  })


// Những cái gì mà Javascript có thường jQuery sẽ có
// Lấy từ khoá bên Javascript search google kẹp thêm đuôi jQuery phía sau



$('.toggle-box').on('click', function(evt) {
  $('.parent .box').slideToggle(
    3000,
    function() {
      //Có thể lợi dụng nó để làm gì đó là tuỳ mình ..
      console.log("Chạy sau khi hiệu ứng hoàn tất"); 
    }
  );
})

// $('.back-to-top').on('click', function(e) {
//   $('html, body').animate({
//     scrollTop: 0
//   },
//   3000,
//   function() {
//     // Được gọi lại (callback) khi hiệu ứng hoàn tất
//     $('.back-to-top').addClass('btn-hidden')
//   }
//   )
// })

$(window).on('scroll', function(evt) {
  console.log("window.scrollY", window.scrollY);
  if (window.scrollY > 500) {
    $('.back-to-top').removeClass('btn-hidden');
    // document.querySelector('.back-to-top').classList.remove('btn-hidden');
  } else {
    $('.back-to-top').addClass('btn-hidden');
    // document.querySelector('.back-to-top').classList.add('btn-hidden');
  }
})


// $('.back-to-top').css({
//   color: 'red',
//   transform: 'translateY(5px)',
//   backgroundColor: 'aqua',
// })

// $('.back-to-top')
//   .css('color', 'red')
//   .css('transform', 'translateY(5px)')
//   .css('backgroundColor', 'aqua')