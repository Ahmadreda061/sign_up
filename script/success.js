let email = document.querySelector(".wrapper__header span");
let dismass = document.querySelector(".btn--darkBlue");
dismass.addEventListener("click", () => {
  window.open("../sign_up.html", "_self");
});
email.textContent = sessionStorage.getItem("email");
