
function calHeightProduct() {
  var listProductsEl = document.querySelector('.list-product');
  var productsEl = listProductsEl.querySelectorAll('.product');
  
  var maxHeight = 0; // Tạm thời mình để bằng 0
  
  for(var index = 0; index < productsEl.length; index++) {
    var productEl = productsEl[index];

    productEl.style.height = ''; // Reset đoạn code CSS cũ: height: ''

    var currentHeight = productEl.getBoundingClientRect().height;
    
    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
    }
  }
  
  for(var index = 0; index < productsEl.length; index++) {
    var productEl = productsEl[index];
    productEl.style.height = maxHeight + 'px';
  }
}

// Khi F5 reload lại trang 
calHeightProduct();

// Bắt sự kiện thay đổi kích thước màn hình của người dùng
window.addEventListener('resize', function(evt) {
  // Cứ mỗi lần người dùng thay đổi kích thước màn hình -> Reset height cũ -> Tính lại height mới
  calHeightProduct();
})