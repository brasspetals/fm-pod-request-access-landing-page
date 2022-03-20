const form = document.getElementById("form");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function validateEmail(e) {
  if(email.value.match(emailRegex)){
    e.preventDefault();
    form.reset();
    //fade out error message if displayed
    error.classList.remove('fadeDown');
    error.classList.add('fadeOut');
    setTimeout(function() {
      error.style.display = 'none';
    }, 300);
  } else {
    e.preventDefault();
    email.focus();
    //fade in error message
    error.style.display = 'block';
    error.classList.add('fadeDown');
    error.classList.remove('fadeOut');
  }
}

btn.addEventListener("click", validateEmail);