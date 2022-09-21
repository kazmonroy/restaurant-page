import "./style.css";
import loadPage from "./load-page.js";
import loadHomePage from "./home.js";
import loadAboutUsPage from "./about-us.js";
import loadMenuPage from "./menu.js";

loadPage();

const aboutUsBtn = document.querySelector("#about-us");
aboutUsBtn.addEventListener("click", loadAboutUsPage);

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  const mainContainer = document.querySelector(".main-container");

  //   if (mainContainer.firstElementChild.classList.contains("cards")) {
  //     const cards = mainContainer.querySelector(".cards");
  //     mainContainer.removeChild(mainContainer.firstChild);
  //     mainContainer.appendChild(loadHomePage());
  //   }

  if (mainContainer.firstElementChild.classList !== "") {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild(loadHomePage());
  }
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", loadMenuPage);
