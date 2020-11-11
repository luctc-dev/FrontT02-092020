var childEl = document.querySelector('.box .child');



childEl.addEventListener('click', function(e) {
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
})

// Gỉa lập lại cái trasition: 0.3s 
// Đưa về chung hệ quy chiếu so sánh
// Lấy hệ quy chiếu là thời gian so sánh
/*
0 ------150------ 300
0 --------------- %
0 ------1s------ 2s
*/


// background-color
// backgroundColor