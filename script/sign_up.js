let inputEmail = document.querySelector(".wrapper__form input");
inputEmail.value = sessionStorage.getItem("email");
let subscribeBtn = document.getElementsByClassName("btn--darkBlue")[0];
subscribeBtn.addEventListener("click", (e) => {
  if (!isValidEmail(inputEmail.value)) {
    inputEmail.parentElement.firstElementChild.style.display = "block";
    inputEmail.style.cssText =
      "background-color: rgb(253, 221, 221); color: hsl(4, 100%, 67%); border-color: hsl(4, 100%, 67%);";
  } else {
    sessionStorage.setItem("email", inputEmail.value);
    window.open("../html/success.html", "_self");
  }
  e.preventDefault();
});

function isValidEmail(email) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]+");
  return regex.test(email);
}
