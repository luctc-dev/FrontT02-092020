var circleEl = document.querySelector('.circle');
var menuItems = document.querySelectorAll('.menu .item');

document.addEventListener('mousemove', function(e) {
  var pageX = e.pageX;
  var pageY = e.pageY;
  circleEl.style.top = pageY + 'px';
  circleEl.style.left = pageX + 'px';
});


menuItems.forEach(function(item) {
  item.addEventListener('mouseenter', function(e) {
    // item.getAttribute('data-src'); // lấy được link hình

    // gắn link hình này vào circle
    circleEl.classList.add('show');
  })
  item.addEventListener('mouseleave', function(e) {
    circleEl.classList.remove('show');
  })
})