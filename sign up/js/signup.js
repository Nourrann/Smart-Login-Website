var signName = document.getElementById("name");
var signinEmail = document.getElementById("email");
var signinPass = document.getElementById("pass");
var siginButton = document.getElementById("loginBtn");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [];
}

function add() {
  if (
    signName.value == "" ||
    signinEmail.value == "" ||
    signinPass.value == ""
  ) {
    document.getElementById(
      "message"
    ).innerHTML = `<p class="text-center text-danger"> All Inputs Are Required </p>`;
  } else {
    obj = {
      name: signName.value,
      email: signinEmail.value,
      password: signinPass.value,
    };
    users.push(obj);
    location.href = "../../index.html";
    localStorage.setItem("users", JSON.stringify(users));
  }
}

siginButton.addEventListener("click", function () {
  console.log(signinEmail.value);
  console.log(signinPass.value);
});
