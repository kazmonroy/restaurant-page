// // export default function loadHome() {
// //   const mainContainer = document.querySelector(".main-container");
// //   //   mainContainer.textContent = "";
// //   //   mainContainer.appendChild(createHero());
// //   //   if (mainContainer.contains(".cards")) {
// //   //     console.log("it does");
// //   //   }

// //   createHero();
// // }

// export default function loadHome() {
//   const mainContainer = document.querySelector(".main-container");

//   if (mainContainer) {
//     mainContainer.style.border = "2px solid red";
//     return createHero();
//   }

//   return createHero();

//   //   if (mainContainer.firstElementChild.classList.contains("hero-container")) {
//   //     console.log("it does");
//   //     mainContainer.textContent = "";
//   //     loadAboutUsPage();
//   //   } else {
//   //     return createHero();
//   //   }

//   //   return createHero();
// }

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

  heroText.appendChild(heroTitle);
  heroText.appendChild(underline);
  heroText.appendChild(heroCopy);
  heroText.appendChild(orderBtn);

  heroContainer.appendChild(heroText);

  return heroContainer;
}
