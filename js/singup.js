var signupName=document.getElementById("signupName");
var sginupPassword=document.getElementById("sginupPassword");
var sginupEmail=document.getElementById("sginupEmail");
var sginupBtn=document.getElementById("sginupBtn");
var loginAnchor=document.getElementById("loginAnchor");
var users= [];

function signup() {
    var user= {
        name:signupName.value,
        email:sginupEmail.value,
        password:sginupPassword.value,
    }
    if (signupName.value=="" || sginupEmail.value =="" ||sginupPassword.value =="" ) {
        alert("Please fill all fileds");
    }
    if (
        isValidEmail(sginupEmail.value) &&
        isNewEmail(sginupEmail.value)
      ) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        clearForm();
        alert("Sign up successful");
      } else {
        alert("Invalid email or email already in use")
      }

}

sginupBtn.addEventListener("click", function () {
    signup();
    clearForm();
  });
  
  function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function isNewEmail(email) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        return false;
      }
    }
    return true;
  }

function clearForm() {
    signupName.value="";
    sginupEmail.value="";
    sginupPassword="";
}

loginAnchor.addEventListener('click' , function() {
    window.location.href="index.html";
})

