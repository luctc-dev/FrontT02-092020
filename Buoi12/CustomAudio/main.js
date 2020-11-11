debugger;
var audioEl = document.querySelector('#audio');
var divWrapper = document.querySelector('.custom-audio');
var playBtn = divWrapper.querySelector('.play'); 
var pauseBtn = divWrapper.querySelector('.pause'); 
var circleEl = divWrapper.querySelector('.slider__bar-circle');
var barEl = divWrapper.querySelector('.slider__bar');
var durationEl = divWrapper.querySelector('.duration');
var currentTimeEl = divWrapper.querySelector('.current-time');
var durationBar = divWrapper.querySelector('.duration-bar');
var isMouseDown = false;
var isMouseMove = false;

(function() {

  var intervalId = setInterval(() => {
    var duration = audioEl.duration;
    if (audioEl.duration) {
      var minutes = Math.floor(duration / 60);
      var seconds = Math.floor(duration - minutes * 60); // Math.floor, Math.ceil, Math.round

      minutes = minutes >= 10 ? minutes : `0${minutes}`;
      seconds = seconds >= 10 ? seconds : `0${seconds}`;

      durationEl.innerText = `${minutes}:${seconds}`;

      clearInterval(intervalId);
    }

  }, 10);

})()

function updateCurrentTimeUI(currentTime) {

  var minutes = Math.floor(currentTime / 60);
  var seconds = Math.floor(currentTime - minutes * 60); // Math.floor, Math.ceil, Math.round

  minutes = minutes >= 10 ? minutes : `0${minutes}`;
  seconds = seconds >= 10 ? seconds : `0${seconds}`;

  currentTimeEl.innerText = `${minutes}:${seconds}`;
}

function handlePlayAudio() {
  audioEl.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
}
function handlePauseAudio() {
  audioEl.pause();
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
}

playBtn.addEventListener('click', handlePlayAudio);

pauseBtn.addEventListener('click', handlePauseAudio);

durationBar.addEventListener('click', function(evt) {
  
  if (isMouseMove && isMouseDown) {
    console.log("click isMouseMove", isMouseMove, " - isMouveDown" , isMouseDown)
    return;
  }
  // Mục tiêu là đang kéo và thả ra thì không chạy click
  // up chạy trước -> Vô hiệu hoá hết isMouseDown về false rồi
  // click chạy sau

  console.log("ca hai thang isMouveMove va isMouveDown deu la false");

  var durationBarRect = durationBar.getBoundingClientRect();

  var offsetX = evt.offsetX; 
  var widthDurationBar = durationBarRect.width;

  var percent = offsetX / widthDurationBar;
  var duration = audioEl.duration; // Thời gian tổng
  var newCurrentTime = percent * duration;

  audioEl.currentTime = newCurrentTime;
})


circleEl.addEventListener('mousedown', function(evt) {
  console.log("mousedown circleEl");
  isMouseDown = true;
})
circleEl.addEventListener('mouseup', function(evt) {
  
  setTimeout(function() {
    console.log("mouseup circleEl");
    isMouseDown = false;
  })
})
// circleEl.addEventListener('mouseleave', function(evt) {
//   isMouseMove = false;
//   isMouseDown = false;
// })
divWrapper.addEventListener('mouseup', function(evt) {
  
  setTimeout(function() {
    console.log("mouseup divWrapper");
    isMouseMove = false;
    isMouseDown = false;
  }, 200);
})

divWrapper.addEventListener('mousemove', function(evt) {
  console.log("mousemove divWrapper");

  isMouseMove = true;
  if (isMouseDown && isMouseMove) {
    var durationBarRect = durationBar.getBoundingClientRect();

    var clientX = evt.clientX;
    var leftDurationBar = durationBarRect.left;
    var offsetMouseWithLeftOfDurationBar = clientX - leftDurationBar;
    
    if (offsetMouseWithLeftOfDurationBar <= 0 || offsetMouseWithLeftOfDurationBar >= durationBarRect.width) {
      return;
    }

    var percent = offsetMouseWithLeftOfDurationBar / durationBarRect.width;
    
    barEl.style.width = (percent * 100) + '%';
    circleEl.style.left = (percent * 100) + '%'; 

    audioEl.currentTime = audioEl.duration * percent; 
  }
})

// Nhận diện xem khi nào audio load thành công


// Hàm nhận diện khi nào audio/video được play
audioEl.onplay = function() {
  console.log("onPlay run");
};

audioEl.ontimeupdate = function() {

  var percent = (audioEl.currentTime / audioEl.duration) * 100;

  barEl.style.width = percent + '%';
  circleEl.style.left = percent + '%';
  updateCurrentTimeUI(audioEl.currentTime); // Get / Set
}

// Hàm nhận diện khi nào thời gian thay đổi 


document.addEventListener('keyup', function(evt) {
  console.log(evt.code);
  if (evt.code === 'ArrowRight') {
    var duration = audioEl.duration;
    var currentTime = audioEl.currentTime;

    var percent = currentTime / duration;
    percent = percent + 0.05;

    if (percent >= 1) {
      percent = 1;
    }

    barEl.style.width = (percent * 100) + '%';
    circleEl.style.left = (percent * 100) + '%'; 

    audioEl.currentTime = audioEl.duration * percent; 

    // Tăng thời lên 5%
  } else if (evt.code === 'ArrowLeft') {
    var duration = audioEl.duration;
    var currentTime = audioEl.currentTime;

    var percent = currentTime / duration;
    percent = percent - 0.05;

    if (percent<= 0) {
      percent = 0;
    }

    barEl.style.width = (percent * 100) + '%';
    circleEl.style.left = (percent * 100) + '%'; 

    audioEl.currentTime = audioEl.duration * percent; 
  } else if (evt.code === 'Space') {
    if (audioEl.paused) {
      handlePlayAudio();
    } else {
      handlePauseAudio();
    }
  }

});



// Tổ hợp của 3 sự kiện (Kéo thả)
// mousedown
// mousemove 
// mouseup