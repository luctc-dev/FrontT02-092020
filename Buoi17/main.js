var listInputPassword = document.querySelectorAll('.input-password');

// for(var index = 0; index < listInputPassword.length; index++) {
//   let divWrapper = listInputPassword[index];
//   let iconEl = divWrapper.querySelector('.icons');
//   let inputEl = divWrapper.querySelector('input');
//   let, const -> Chỉ có trong phiên bản Javascript ES6 trở lên -> Sẽ có một số trình duỵệt cũ không hỗ trợ (IE)
//   iconEl.addEventListener('click', function(e) {
//     console.log(inputEl)
//   })
// }

for(var index = 0; index < listInputPassword.length; index++) {
  var divWrapper = listInputPassword[index];
  var iconEl = divWrapper.querySelector('.icons');

  iconEl.addEventListener('click', function(evt) {
    var icon = evt.target;
    // icon.parentElement -> đi ngược ra thằng cha -> css đâu làm được
    // var inputEl = icon.previousElementSibling;
    console.log(icon.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
    var inputEl = icon.parentElement.querySelector('input');
    var currentType = inputEl.getAttribute('type');
    if (currentType === 'password') {
      inputEl.setAttribute('type', 'text');
      icon.classList.remove('ion-eye');
      icon.classList.add('ion-eye-disabled');
    } else {
      inputEl.setAttribute('type', 'password');
      icon.classList.remove('ion-eye-disabled');
      icon.classList.add('ion-eye');
    }
  })
}



// Mỗi vòng lặp -> Tạ ra 3 biến inputEl riêng biệt
// Tạo tầm vực mới dành cho var


// var, let, const
// var -> Tầm vực của biến var (scoped) -> Nằm trong function
// let -> Tầm vực của biến let -> Nằm trong một block { }



// Sự kiện click -> Là một dạng bất đồng bộ (Đâu chạy ngay?? Chờ người dùng nhấn chuột)
// Vòng for -> Là dạng đồng bộ

// var year = 2020;

// if (year < 2030) {
//   var age = 20 ;
// }

// if (year < 2030) {
//   let ageLet = 20 ;
// }

// console.log("age = ", age);
// console.log("ageLet = ", ageLet);




// Bigint -> Là một kiểu dữ liệu mới xuất hiện trong bản đặc tả ECMAScript 2020
// Khi khai náo thêm ký tự 'n' phía sau mọi number -> là biging 

// Number: 20 
// Bigint: 20n