import "./style.css";
import loadHomePage from "./home.js";
import loadAboutUsPage from "./about-us.js";

export default function loadPage() {
  const wrapper = document.querySelector("#wrapper");

  wrapper.appendChild(createNavBar());
  wrapper.appendChild(createMainContainer());
  wrapper.appendChild(createFooter());

  loadHomePage();
}

function createNavBar() {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "nav-bar");

  const homeBtn = document.createElement("a");

  homeBtn.textContent = "Home";
  homeBtn.setAttribute("id", "home");

  const aboutUsBtn = document.createElement("a");
  aboutUsBtn.textContent = "About us";
  aboutUsBtn.setAttribute("id", "about-us");

  const menuBtn = document.createElement("a");
  menuBtn.textContent = "Menu";
  menuBtn.setAttribute("id", "menu");

  nav.appendChild(homeBtn);
  nav.appendChild(aboutUsBtn);
  nav.appendChild(menuBtn);

  return nav;
}

function createMainContainer() {
  const main = document.createElement("div");
  main.classList.add("main-container");
  main.appendChild(loadHomePage());

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  const author = document.createElement("a");
  author.innerHTML = `Made by Kaz <i class="fa-brands fa-github"></i> `;
  author.href = "https://github.com/kazmonroy";
  author.target = "_blank";

  footer.appendChild(author);
  return footer;
}
