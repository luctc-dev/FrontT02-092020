var audioEl = document.querySelector('#audio');
var divWrapper = document.querySelector('.custom-audio');
var playBtn = divWrapper.querySelector('.play'); 
var pauseBtn = divWrapper.querySelector('.pause'); 
var durationBarEl = divWrapper.querySelector('.duration-bar');

var barEl = divWrapper.querySelector('.slider__bar');
var circleEl = divWrapper.querySelector('.slider__bar-circle');
var coDangNhanChuotHayKhong = false; // Người dùng chưa nhấn chuột vào cục hình tròn

// duration lấy thời gian tổng của audio (đổi về giây). Ví dụ audio 3phut20s -> 3 * 60 + 20s 
// currentTime lấy thời gian hiện tại ngay thời điểm đang phát audio
// audioEl.duration !== audioEl.duration()

function handlePlayAudio() {
  /*
    1. Gọi hàm play cho audio chạy nghe được âm thanh audioEl.play();
    2. Hiển thị nút pasue: pauseBtn.style.display = 'block';
    3. Ẩn nút play: playBtn.style.display = 'none';
  */
  audioEl.play();
  pauseBtn.style.display = 'block';
  playBtn.style.display = 'none';
}

function handlePauseAudio() {
    /*
    1. Gọi hàm pause cho audio dừng lại audioEl.pause();
    2. Ẩn nút pasue
    3. Hiển thị lại nút play
  */
  audioEl.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'block';
}

function handleClickDurationBar(evt) {
  console.log("handleClickDurationBar(durationBarEl)")
  // Chỉ cho phép click khi người dùng không xử lí việc kéo thả thôi
  if (coDangNhanChuotHayKhong === true) {
    // Đang xử lí kéo thả
    return; // Dừng luôn hàm ở vị trí này không cho chạy xuống 
  }

  var durationBarRect = durationBarEl.getBoundingClientRect(); // { width: 214244 }

  var offsetX = evt.offsetX;
  var widthDurationBar = durationBarRect.width;

  var percent = offsetX / widthDurationBar; // 0 <= x <= 1

  var newCurrentTime = audioEl.duration * percent;
  
  audioEl.currentTime = newCurrentTime;
  // Thời gian tổng là 150s 
  // Phần % là 50% 
  // Tính ngược ra thời gian hiện tại??? (150 * 50) / 100 = 150 * 0.5 

  // Đồng bộ với thanh thời gian và cục hình tròn
  barEl.style.width = (percent * 100) + '%'; // 50%, 100%, 20%,  = 0.5 * 100
  circleEl.style.left = (percent * 100) + '%';
}

playBtn.addEventListener('click', handlePlayAudio)
pauseBtn.addEventListener('click', handlePauseAudio)
durationBarEl.addEventListener('click', handleClickDurationBar)



// Handle Drag and Drop


function handleMouseDown() {
  coDangNhanChuotHayKhong = true;
  // console.log("handleMouseDown coDangNhanChuotHayKhong?", coDangNhanChuotHayKhong);
}
function handleMouseMove(evt) {
  if (coDangNhanChuotHayKhong === true) {
    // Xử lí logic drag and drop ở trong đây
    var durationBarRect = durationBarEl.getBoundingClientRect(); 

    var clientX = evt.clientX;
    var t = durationBarRect.left;

    var x = clientX - t;
    var widthDurationBar = durationBarRect.width;
    console.log("x = ", x);
    var percent = x / widthDurationBar;

    if (x >= 0 && x <= widthDurationBar) {
      var newCurrentTime = audioEl.duration * percent;
  
      audioEl.currentTime = newCurrentTime;
      barEl.style.width = (percent * 100) + '%';
      circleEl.style.left = (percent * 100) + '%';  
    }
    
  }
}
function handleMouseUp() {
  setTimeout(() => {
    // Đặt vào setTImeout để cho nó chạy sau click
    coDangNhanChuotHayKhong = false;
    console.log("handleMouseUp(divWrapper) coDangNhanChuotHayKhong?", coDangNhanChuotHayKhong);
  }, 100);
}

circleEl.addEventListener('mousedown', handleMouseDown);

divWrapper.addEventListener('mousemove', handleMouseMove)

divWrapper.addEventListener('mouseup', handleMouseUp)

// Click = Down + Up 
