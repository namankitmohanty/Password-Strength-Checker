var password = document.getElementById("pass");
var show = document.getElementById("showhide");

function ShowHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    show.innerHTML = "hide";
  } else {
    password.setAttribute("type", "password");
    show.innerHTML = "show";
  }
}

function passStrength(pass) {
  var pass = document.getElementById("pass").value;
  var strengthBar = document.querySelector('.strengthBar');
  var i = 0;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (pass.length > 6) {
    i++;
  }
   if (pass.length >= 10) {
    i++;
  }
   if (/[a-z]/.test(pass)) {
    i++;
  }
   if (/[A-Z]/.test(pass)) {
    i++;
  }
   if (/[0-9]/.test(pass)) {
    i++;
  }
   if (specialChars.test(pass)) {
    i++;
  }

  if(i <= 2){
    strengthBar.style.width = "25%";
    strengthBar.style.backgroundColor = "red";
  } 
  else if(i > 2 && i <= 4){
    strengthBar.style.width = "50%";
    strengthBar.style.backgroundColor = "orangered";
  } 
  else if(i == 5){
    strengthBar.style.width = "75%";
    strengthBar.style.backgroundColor = "yellow";
  } 
  else if(i > 5 ){
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "green";
  }
}