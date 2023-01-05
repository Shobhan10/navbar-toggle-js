const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", () => {
  linkContainer.classList.toggle("show-container");
});
