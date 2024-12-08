let logOut = document.getElementById("logOut");
let welcome = document.getElementById("welcome");
let userName = localStorage.getItem("userName");

welcome.innerHTML = "Welcome " + userName;

logOut.addEventListener("click", function () {
  window.location.href = "index.html";
});