import loadMenuPage from "./menu.js";

export default function createHero() {
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const heroTitle = document.createElement("h2");
  heroTitle.textContent = "Vegan sushi bar";

  const underline = document.createElement("div");
  underline.classList.add("underline");

  const heroCopy = document.createElement("p");
  heroCopy.textContent = "This is how we roll!";

  const orderBtn = document.createElement("a");
  orderBtn.textContent = "Order today!";
  orderBtn.classList.add("cta-btn");

  heroText.appendChild(heroTitle);
  heroText.appendChild(underline);
  heroText.appendChild(heroCopy);
  heroText.appendChild(orderBtn);

  heroContainer.appendChild(heroText);
  orderBtn.addEventListener("click", loadMenuPage);

  return heroContainer;
}
