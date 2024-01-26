var signinEmail = document.getElementById("email");
var signinPass = document.getElementById("pass");
var loginBtn = document.getElementById("loginBtn");

var users = JSON.parse(localStorage.getItem('users')) || [];

loginBtn.addEventListener("click", function () {
  if (signinEmail.value === "" || signinPass.value === "") {
    document.getElementById("message").innerHTML = `<p class="text-center text-danger" > All Inputs Are Required </p>`;
  } else {
    console.log("hi2");
    checkUser();
  }
});

function checkUser() {
  // If no users are found
  if (users.length === 0) {
    document.getElementById("message").innerHTML = `<p class="text-center text-danger" > No users found. Please register. </p>`;
    return;
  }

  // Iterate through users
  for (let i = 0; i < users.length; i++) {
    console.log("hi1");
    if (users[i].email == signinEmail.value && users[i].password == signinPass.value) {
      // If a matching user is found
      var name = users[i].name;
      localStorage.setItem('username', name);
      console.log("hi");
      location.href = 'home/index.html';
      return; // Exit the function after successful login
    }
  }
  
  // If no matching user is found
  document.getElementById("message").innerHTML = `<p class="text-center text-danger" > Email or Password is Incorrect </p>`;
}
