function setUserType(id) {
  console.log(id);
  var signupBtn = document.getElementById("registerbtn");
  signupBtn.href = `${id}.html`;
  console.log(signupBtn.href);
}
