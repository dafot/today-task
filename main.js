// "use strict";
// const dropLinks = document.querySelectorAll("[data-dropdown = 'true']");
// const hideDropMenuButtons = document.querySelectorAll(".back-menu");
// const nav = document.querySelector(".nav__list");
// const navLinks = document.querySelectorAll(".nav__link");

// function hideDropMenu() {
//   hideDropMenuButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       e.stopPropagation();
//       button.closest(".dropdown-block").classList.remove("active");
//       navLinks.forEach((link) => {
//         link.style = "pointer-events: auto; opacity: 1;";
//       });
//     });
//   });
// }
// // showDropMenu();
// hideDropMenu();

// nav.addEventListener("click", (e) => {
//   if (e.target.closest("[data-dropdown='true'") && e.target.tagName == "A") {
//     e.target
//       .closest("[data-dropdown='true'")
//       .querySelector(".dropdown-block")
//       .classList.add("active");
//     navLinks.forEach((link) => {
//       link.style = "pointer-events: none; opacity: 0;";
//     });
//   }
// });
window.addEventListener("DOMContentLoaded", () => {
  function activeMobileMenu() {
    const burgerButton = document.querySelector("#burger");
    const header = document.querySelector(".header");

    burgerButton.addEventListener("click", () => {
      header.classList.toggle("open");
    });
    showDropMenu();
    hideDropMenu();
  }
  function showDropMenu() {
    const dropLinks = document.querySelectorAll("[data-dropdown='true']");
    dropLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (link.querySelector(".dropdown-block")) {
          link.querySelector(".dropdown-block").classList.add("active");
        }
      });
    });
  }
  function hideDropMenu() {
    const hideDropMenuButtons = document.querySelectorAll(".back-menu");
    const dropdownList = document.querySelectorAll(".dropdown-block");
    console.log(hideDropMenuButtons);

    hideDropMenuButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        button.closest(".dropdown-block").classList.remove("active");
      });
    });
  }
  activeMobileMenu();
  function toggleMenu() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1179) {
      activeMobileMenu();
    }
  }
  window.addEventListener("load", toggleMenu);
  window.addEventListener("resize", toggleMenu);
});
