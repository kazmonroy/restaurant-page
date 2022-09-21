export default function loadAboutUsPage() {
  const mainContainer = document.querySelector(".main-container");

  mainContainer.textContent = "";
  mainContainer.appendChild(createAboutUsCards());
}

function createAboutUsCards() {
  const cards = document.createElement("div");
  cards.classList.add("cards");

  const cardAboutUs = createCard(
    "About Us",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam?",
    "../src/img/sushi-1.jpg"
  );

  const cardOurMission = createCard(
    "Our mission",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, numquam!",
    "../src/img/sushi-2.jpg"
  );

  cardOurMission.classList.add("reverse");

  cards.appendChild(cardAboutUs);
  cards.appendChild(cardOurMission);

  return cards;
}

function createCard(title, text, img) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfoContainer = document.createElement("div");
  card.classList.add("card-info");

  const cardTitle = document.createElement("h2");
  const cardText = document.createElement("p");
  const cardImg = document.createElement("img");

  cardTitle.textContent = title;
  cardText.textContent = text;
  cardImg.src = img;

  cardInfoContainer.appendChild(cardTitle);
  cardInfoContainer.appendChild(cardText);

  card.appendChild(cardInfoContainer);
  card.appendChild(cardImg);

  return card;
}
