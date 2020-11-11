var formLoginData = {
    email: {
      value: '',
      error: '',
      el: {
        input: document.querySelector('#email'),
        error: document.querySelector('.error-email')
      }
    },
    password: {
      value: '',
      error: '',
      el: {
        input: document.querySelector('#password'),
        error: document.querySelector('.error-password')
      }
    },
    isGender: {
      value: false,
      el: {
        input: document.querySelector('.gender')
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
    // debugger;
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
  
  function handleChangeGender(e) {
    formLoginData.isGender.value = e.target.checked;
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
  formLoginData.isRemember.el.input.addEventListener('change', handleChangeGender)
  formLoginData.globalEl.btnSubmit.addEventListener('click', handleSubmitLogin)
  
 