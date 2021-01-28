const menu = document.querySelector(".navbar_menu");
const menuToggler = document.querySelector("#mobile-menu");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("active");
  //   menuToggler.classList.toggle("is-active");
});
