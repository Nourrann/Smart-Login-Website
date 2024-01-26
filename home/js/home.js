document.getElementById("userName").innerHTML =
  localStorage.getItem("username");

document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem('username');
});
