var loginEmail=document.getElementById("loginEmail");
var loginPassword =document.getElementById("loginPassword");
var loginBtn=document.getElementById("loginBtn");
var signupAnchor=document.getElementById("signupAnchor");
var users =[];
if (localStorage.getItem("users") != null) {
    users =JSON.parse(localStorage.getItem("users")); 
}

function signUp () {
var userEmail = loginEmail.value;
var userPassword = loginPassword.value;
if (userEmail == "" || userPassword=="") {
    alert("please fill all fields");
    return;
}
if (isCorretEmailandPassword(userEmail,userPassword) == true){
    window.location.href="home.html";
}
else {
    alert("incorret email or password");
}
}

function isCorretEmailandPassword(email,password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === email.toLowerCase()  && users[i].password === password) {
          localStorage.setItem("userName", users[i].name);
          return true;
        }
      }
      return false;
}

loginBtn.addEventListener('click' ,function() {
    signUp();
})

signupAnchor.addEventListener('click',function(){
    window.location.href="singUp.html";
})
