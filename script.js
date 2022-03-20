const form = document.getElementById("form");
const email = document.getElementById("email");
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const success = document.getElementById("success");
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function validateEmail(e) {
  if(email.value.match(emailRegex)){
    e.preventDefault();
    form.reset();
    email.setAttribute('aria-invalid', 'false');
    
    //fade in success message
    success.classList.add('fadeDown');
    
    //fade out error message if displayed
    if (error.classList.contains('fadeDown')) {
      error.classList.remove('fadeDown');
      error.classList.add('fadeOut');
      setTimeout(function() {
        error.style.display = 'none';
        success.style.display = 'block';
      }, 300);
    } else {
      success.style.display = 'block';
    }
    
  } else {
    e.preventDefault();
    email.focus();
    email.setAttribute('aria-invalid', 'true');

    //fade in error message
    error.classList.add('fadeDown');
    error.classList.remove('fadeOut');

    //fade out success message if displayed
    if (success.classList.contains('fadeDown')) {
      success.classList.remove('fadeDown');
      success.classList.add('fadeOut');
      setTimeout(function() {
        success.style.display = 'none';
        error.style.display = 'block';
      }, 300);
    } else {
      error.style.display = 'block';
    } 
  }
}

btn.addEventListener("click", validateEmail);