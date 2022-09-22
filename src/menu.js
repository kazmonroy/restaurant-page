export default function loadMenuPage() {
  const mainContainer = document.querySelector(".main-container");

  mainContainer.textContent = "";
  mainContainer.classList.add("bg");
  mainContainer.appendChild(createMenu());
}

function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  menuList.appendChild(
    createDishCard(
      "California Roll",
      "Lorem ipsum dolor sit amet.",
      "https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    )
  );

  menuList.appendChild(
    createDishCard(
      "California Roll",
      "Lorem ipsum dolor sit amet.",
      "https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    )
  );

  menuList.appendChild(
    createDishCard(
      "California Roll",
      "Lorem ipsum dolor sit amet.",
      "https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    )
  );

  menuList.appendChild(
    createDishCard(
      "California Roll",
      "Lorem ipsum dolor sit amet.",
      "https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    )
  );

  menuList.appendChild(
    createDishCard(
      "California Roll",
      "Lorem ipsum dolor sit amet.",
      "https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    )
  );

  menuList.appendChild(
    createDishCard(
      "California Roll",
      "Lorem ipsum dolor sit amet.",
      "https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    )
  );

  menuContainer.appendChild(menuList);

  return menuContainer;
}

function createDishCard(title, text, img) {
  const card = document.createElement("div");
  card.classList.add("dish");

  const cardInfoContainer = document.createElement("div");
  cardInfoContainer.classList.add("dish-info");

  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("h2");
  const cardText = document.createElement("p");

  cardTitle.textContent = title;
  cardText.textContent = text;
  cardImg.src = img;

  cardInfoContainer.appendChild(cardTitle);
  cardInfoContainer.appendChild(cardText);

  card.appendChild(cardImg);
  card.appendChild(cardInfoContainer);

  return card;
}
