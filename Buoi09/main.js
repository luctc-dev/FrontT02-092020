// Javascript DOM -> Tương tác với html

// Bootstrap

/*

1. THay đổi class của phần tử  (Thêm, xoá, sửa)
2. Thay đổi thuộc tính (attribute)  của phần tử (thêm, xoá, sửa)
3. Thay đôi cấu trúc HTML (thêm, xoá, sửa)
4. Thay đổi nội dung bên trong của một phần tử
5. Thu thập dữ liệu từ người dùng (thông qua form, input, ...)

CSS: Muốn style giao diện cho một phần tử (Biết selector truy xuất vào phần tử đó bằng css)
  .class {

  }
  #id {

  }

Javascript: Muốn tác động js vào một phần tử (Phải selector truy xuất vào phần tử đó bằng javascript)

Events: (Những sự kiện tương tác của người dùng, click chuột, mouseenter (hover trong css), ...)
  Có sự kiện "lắng nghe" việc người dùng nhập nội dung vào một element
*/



var formLoginData = {
  email: {
    value: '',
    error: '',
    el: {
      input: document.querySelector('.form-login .email'),
      error: document.querySelector('.form-login .error-email')
    }
  },
  password: {
    value: '',
    error: '',
    el: {
      input: document.querySelector('.form-login .password'),
      error: document.querySelector('.form-login .error-password')
    }
  },
  isRemember: {
    value: false,
    el: {
      input: document.querySelector('.form-login .remember')
    }
  },
  globalEl: {
    form: document.querySelector('.form-login'),
    btnSubmit: document.querySelector('.form-login .submit')
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  if (String(password).length >= 6) {
    return true;
  }
  return false;
}

function handleChangeEmail(event) {
  debugger;
  var email = formLoginData.email;
  email.value = event.target.value;

  var isValid = validateEmail(email.value);

  if (isValid === true) {
    email.error = '';
    // errorEmailElement.innerText = '';
  } else {
    email.error = 'Email không hợp lệ';
    // errorEmailElement.innerText = 'Email không hợp lệ';
  }
  email.el.error.innerText = email.error;
}

function handleChangePassword() {
  var password = formLoginData.password;
  password.value = password.el.input.value; // co the lay bang evt.target.value
  
  var isValid = validatePassword(password.value);

  if (isValid) {
    password.error = '';
  } else {
    password.error = 'Mật khẩu phải ít nhất 6 kí tự';
  }
  password.el.error.innerText = password.error;
}

function handleChangeRememberMe(e) {
  formLoginData.isRemember.value = e.target.checked;
}

function handleSubmitLogin(evt) {
  evt.preventDefault();  // Ngăn sự kiện submit
  
  if (
    formLoginData.email.error !== '' ||
    formLoginData.password.error !== ''
  ) {
    alert(formLoginData.email.error + '. ' + formLoginData.password.error);
  } else {
    // Cho submit
    // Dùng lại Javascript để kích hoạt sự kiện submit
    formLoginData.globalEl.form.submit();
  }
}


formLoginData.email.el.input.addEventListener('input', handleChangeEmail) 
formLoginData.password.el.input.addEventListener('input', handleChangePassword) 
formLoginData.isRemember.el.input.addEventListener('change', handleChangeRememberMe)
formLoginData.globalEl.btnSubmit.addEventListener('click', handleSubmitLogin)
