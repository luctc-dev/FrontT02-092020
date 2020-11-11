var textEl = document.querySelector('.text-animation');
var text = textEl.innerHTML;
var newTextHTML = '';

// for lặp -> chạy rất nhanh
// muốn chạy lần lượt từ từ khoảng 100ms -> setInterval

for(var index = 0; index < text.length; index++) {
  var char = text[index];
  var spanHtml
  if (char === ' ') {
    spanHtml = `<span style="color: transparent;">-</span>`;
  } else {
    spanHtml = `<span>${char}</span>`;
  }

  newTextHTML = newTextHTML + spanHtml;
}

textEl.innerHTML = newTextHTML;


index = 0;
var idInterval = setInterval(() => {
  
  var char = text[index];

  if (char !== undefined) {
    // Xử lý
    var listSpan = textEl.querySelectorAll('span');
    listSpan[index].classList.add('show');
  } else {
    
    setTimeout(() => {
      document.querySelector('.banner').classList.add('hidden');
    }, 500);

    clearInterval(idInterval);
  }
  
  index = index + 1;
}, 60);