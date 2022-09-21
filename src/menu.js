import { createCard } from "./about-us.js";

export default function loadMenuPage() {
  const mainContainer = document.querySelector(".main-container");

  mainContainer.textContent = "";
  mainContainer.appendChild(createMenu());
}

function createMenu() {
  const menuList = document.createElement("div");

  menuList.appendChild(
    createCard(
      "california roll",
      "Lorem ipsum dolor sit amet.",
      "src/img/pexels-ivan-samkov-8951556.jpg"
    )
  );

  return menuList;
}
