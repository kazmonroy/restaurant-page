import loadHomePage from "./home.js";
import loadAboutUsPage from "./about-us.js";
import loadMenuPage from "./menu.js";

export default function navLinksEvents() {
  const navLinks = document.querySelectorAll(".nav-bar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (link.textContent === "About us") {
        loadAboutUsPage();
      } else if (link.textContent === "Home") {
        const mainContainer = document.querySelector(".main-container");

        if (mainContainer.firstElementChild.classList !== "") {
          mainContainer.removeChild(mainContainer.firstChild);
          mainContainer.appendChild(loadHomePage());
        }
      } else {
        loadMenuPage();
      }
    });
  });
}
