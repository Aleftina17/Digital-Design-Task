//Switch Theme
const switchThemeBtn = document.querySelector("#themeToggle");
const body = document.body;

function saveThemeToLocalStorage(theme) {
  localStorage.setItem("theme", theme);
}

function loadThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    switchThemeBtn.checked = true;
  } else {
    body.setAttribute("data-theme", "light");
    switchThemeBtn.checked = false;
  }
}

loadThemeFromLocalStorage();

switchThemeBtn.addEventListener("change", () => {
  if (switchThemeBtn.checked) {
    body.setAttribute("data-theme", "dark");
    saveThemeToLocalStorage("dark");
  } else {
    body.setAttribute("data-theme", "light");
    saveThemeToLocalStorage("light");
  }
});

//Button Scroll To Top
let scrollToTopBtn = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Mobile Navigation & Burger Menu

let burgerMenu = document.querySelector(".burger-menu");
let navMobile = document.querySelector(".mobile-nav-overlay");
let mobileNavLinks = document.querySelectorAll(".mobile-nav__list--item--link");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("open");
  navMobile.classList.toggle("open");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMobile.classList.remove("open");
    burgerMenu.classList.remove("open");
  });
});
