
// Phải biết được khi nào người dùng lăn chuột -> event
var boxEl = document.querySelector('.box');
var childEl = document.querySelector('.box .child');
var isRun = false;

// Khi nào scroll lên?
// Khi nào scroll xuống?

document.addEventListener('scroll', function(e) {
  // window.innerHeight = x
  // window.scrollY = y
  // boxEl.getBoundingClientRect().top + window.scrollY = z
  // boxEl.getBoundingClientRect().height = t 
  var boxElRect = boxEl.getBoundingClientRect();

  var scrollTop = window.scrollY;
  var heightWindow = window.innerHeight;
  var heightBox = boxElRect.height;
  var offsetTopBoxWithBody = boxElRect.top + window.scrollY;
  
  if (
    scrollTop >= offsetTopBoxWithBody - heightWindow &&
    scrollTop <=  offsetTopBoxWithBody + heightBox
  ) {

    // Nếu chưa chạy -> Cho chạy
    // Nếu chạy rồi -> Không cho chạy

    if (isRun) {
      console.log("bị chặn bằng return");
      return;
    }

    isRun = true;
    var startNumber = 0; // 0 px
    var targetNumber = Number(childEl.getAttribute('target-number')); // 300 px 
    var duration = Number(childEl.getAttribute('duration')); // 3000 ms
    // intervalId là giá trị số (number)
    
    var startTime = new Date().getTime();

    var intervalId = setInterval(function() {
      
      var currentTime = new Date().getTime();

      if (currentTime - startTime >= duration) {
        childEl.style.left = targetNumber + 'px';
        clearInterval(intervalId);
      } else {
        var percent = (currentTime - startTime) / duration; // 0.5
        childEl.style.left = (targetNumber * percent) + 'px';
      }

    }, 10)
    

  }

})