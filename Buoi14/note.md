20 tấm hình trong trang Web


Nhưng khi load lại trang (Trong viewport) góc nhìn của dùng thường chỉ nhìn thấy 3 tấm

Tại thời điểm như vậy không cần thiết phải load hết toàn bộ hình về 

Chưa scroll tới thì chưa load

Nhận diện vật thể nằm trong viewport (Khi nào nằm trong màn hình thì tiến hành load hình)

<img src="http://image.com/cat.png" /> -> trình duyệt giúp mình load hình này về

<img src="" data-src="http://image.com/cat.png" /> 
  -> Link hình thực sự lưu vào trong một thuộc tính tạm bợ (Không load được)

  Khi phần tử này nó nằm trong viewport

  <img src="http://image.com/cat.png" data-src="http://image.com/cat.png" /> 

  var dataSrc = domImg.getAttribute('data-src');
  domImg.setAttribute('src', dataSrc);

  domImg.removeAttribute('data-src');
  <img src="http://image.com/cat.png" /> 