window.addEventListener("resize", mediaQuerys);
const principalNav = document.querySelector("#principal-nav");
const header = document.querySelector(".site-header");
const headerHeight = document.querySelector(".site-header").clientHeight;
const navBackground = document.querySelector(".nav-background");
const logo = document.querySelector(".logo img");

function mediaQuerys() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    principalNav.classList.remove("collapse");
    principalNav.style.top = "";
  } else {
    principalNav.classList.add("collapse");
    principalNav.style.top = headerHeight + "px";
    navBackground.style.top = headerHeight - 1 + "px";
  }
  const header = document.querySelector(".site-header").clientHeight;
  document.body.style.paddingTop = header + 30 + "px";
}
mediaQuerys();

//Detect when principal nav is open for change the color
let observer = new MutationObserver(changeBarColor);
const observerOptions = {
  attributes: true,
};
observer.observe(navBackground, observerOptions);

function changeBarColor() {
  if (navBackground.classList.contains("show")) {
    header.style.backgroundColor = "var(--background)";
    logo.setAttribute("src", "images/logo-bookmark-white.svg");
  } else {
    header.style.backgroundColor = "";
    logo.setAttribute("src", "images/logo-bookmark.svg");
  }
}

//Feature cards

const featuresContainer = document.querySelector(".features-container");

featuresContainer.addEventListener("click", getTarget);

function getTarget(e) {
  e.preventDefault();
  if (e.target.classList.contains("feature")) {
    removeActives();
    showTarget(e.target);
  }
}
function showTarget(linkPressed) {
  linkPressed.classList.add("active");
  const contentToShow = document.querySelector(
    linkPressed.getAttribute("href")
  );
  contentToShow.classList.add("active");
}
function removeActives() {
  const activeLink = document.querySelector(".feature.active");
  const activeContent = document.querySelector(".content.active");
  activeLink.classList.remove("active");
  activeContent.classList.remove("active");
}

//Form validation

const errorElements = document.querySelectorAll(".error");
const contactForm = document.querySelector(".newsForm");

contactForm.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  const email = document.querySelector("#email").value.trim();
  if (email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    errorElements.forEach((element) => {
      element.classList.add("active");
    });
  } else {
    errorElements.forEach((element) => {
      element.classList.remove("active");
    });
  }
}
