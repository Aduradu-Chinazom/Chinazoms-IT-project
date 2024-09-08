const myForm = document.getElementById("myForm");
let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
let passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  let username_err = document.getElementById("username_err");
  let email_err = document.getElementById("email_err");
  let password_err = document.getElementById("password_err");
  let confirm_password_err= document.getElementById("confirm_password_err");

  let confirm_password= document.getElementById("confirm_password").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "") {
    username_err.textContent = "Please enter a username";
    isValid = false;
  } else {
    username_err.textContent = "";
  }
  if (email === "") {
    email_err.textContent = "Please enter an email address";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    email_err.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    email_err.textContent = "";
  }
  if (password === "") {
    password_err.textContent = "Please enter a password";
    isValid = false;
  } else if (!passRegex.test(password)) {
    password_err.textContent =
      "Password must contain 1-9, A-Z, a-z, and a special character";
    isValid = false;
  } else {
    password_err.textContent = "";
  }
  if (confirm_password !== password) {
    confirm_password_err.textContent = "Passwords dont match";
    isValid = false;
  } else if (confirm_password === "") {
    confirm_password_err.textContent = "Please fill in this field";
    isValid = false;
  } else {
    confirm_password_err.textContent = "";
  }

  if (!isValid) {
    console.log("Error in connection");
  } else {
    window.location.href = "reg.html";
  }
});


let eye_icon = document.getElementById('eyeicon');
let eye_icon2 = document.getElementById('eyeicon2');
let password = document.getElementById('password');
let confirm_password =document.getElementById('confirm_password');

eye_icon.onclick= function(){
    if(password.type === 'password'){
        password.type = "text";
        if (eye_icon.classList.contains('fa-eye-slash')) {
            eye_icon.classList.remove('fa-eye-slash', 'fa-regular');
            eye_icon.classList.add('fa-eye', 'fa-regular');
        }
    } else {
        password.type = 'password'
        if (eye_icon.classList.contains('fa-eye')) {
            eye_icon.classList.remove('fa-eye', 'fa-reglar');
            eye_icon.classList.add('fa-eye-slash', 'fa-regular');
        }
    }
}

eye_icon2.onclick= function(){
    if(confirm_password.type === 'password'){
        confirm_password.type = "text";
        if (eye_icon2.classList.contains('fa-eye-slash')) {
            eye_icon2.classList.remove('fa-eye-slash', 'fa-regular');
            eye_icon2.classList.add('fa-eye', 'fa-regular');
        }
    } else {
        confirm_password.type = 'password'
        if (eye_icon2.classList.contains('fa-eye')) {
            eye_icon2.classList.remove('fa-eye', 'fa-reglar');
            eye_icon2.classList.add('fa-eye-slash', 'fa-regular');
        }
    }
}