window.addEventListener("resize", mediaQuerys);
const principalNav = document.querySelector("#principal-nav");
const header = document.querySelector(".site-header");
const headerHeight = document.querySelector(".site-header").clientHeight;
const navBackground = document.querySelector(".nav-background");

function mediaQuerys() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    principalNav.classList.remove("collapse");
    principalNav.style.top = "";
  } else {
    principalNav.classList.add("collapse");
    principalNav.style.top = headerHeight + "px";
    navBackground.style.top = headerHeight + "px";
  }
  const header = document.querySelector(".site-header").clientHeight;
  document.body.style.paddingTop = header + 30 + "px";
}
mediaQuerys();

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
