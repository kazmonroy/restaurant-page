export default function loadAboutUsPage() {
  const mainContainer = document.querySelector(".main-container");

  mainContainer.textContent = "";
  mainContainer.classList.add("bg");
  mainContainer.appendChild(createAboutUsCards());
}

function createAboutUsCards() {
  const cards = document.createElement("div");
  cards.classList.add("cards");

  const cardAboutUs = createCard(
    "About Us",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam?",
    "https://images.unsplash.com/photo-1612203985758-5f8453e91056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
  );

  const cardOurMission = createCard(
    "Our mission",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, numquam!",
    "https://images.unsplash.com/photo-1603792451785-e2c78de442a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
  );

  cardOurMission.classList.add("reverse");

  cards.appendChild(cardAboutUs);
  cards.appendChild(cardOurMission);

  return cards;
}

export function createCard(title, text, img) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfoContainer = document.createElement("div");
  cardInfoContainer.classList.add("card-info");

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
