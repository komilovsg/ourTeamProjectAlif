const root = document.getElementById("root");

const container = document.createElement("div");
container.className = "container";

const nav = document.createElement("nav");

const tabs = [
  { id: "description", name: "Описание" },
  { id: "characteristics", name: "Характеристика" },
  { id: "reviews", name: "Отзывы" },
  { id: "delivery", name: "Доставка" },
];

tabs.forEach((tab) => {
  const button = document.createElement("button");
  button.className = "tab";
  button.textContent = tab.name;
  button.dataset.tab = tab.id;

  if (tab.id === "description") {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });

    document.querySelectorAll(".tab").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.getElementById(tab.id).classList.add("active");
    button.classList.add("active");
  });

  nav.appendChild(button);
});

container.appendChild(nav);

// ОПИСАНИЕ
const descriptionSection = document.createElement("section");
descriptionSection.id = "description";
descriptionSection.classList.add("active");

const firstParagraph = document.createElement("p");
firstParagraph.textContent =
  "Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные спуски ";
const boldPart1 = document.createElement("strong");
boldPart1.textContent = "на две трети ширины клинка";
firstParagraph.appendChild(boldPart1);
firstParagraph.appendChild(
  document.createTextNode(
    ", образующие тонкое, прекрасно режущее лезвие толщиной "
  )
);
const boldPart2 = document.createElement("strong");
boldPart2.textContent = "около 0,6 мм";
firstParagraph.appendChild(boldPart2);
firstParagraph.appendChild(document.createTextNode(" в районе подводов."));
descriptionSection.appendChild(firstParagraph);

const secondParagraph = document.createElement("p");
const boldPart3 = document.createElement("strong");
boldPart3.textContent = "Обух клинка со спинкой рукояти";
secondParagraph.appendChild(boldPart3);
secondParagraph.appendChild(
  document.createTextNode(
    " имеет одну плавную дугообразную линию. На пяте перед рукоятью есть подпальцевый "
  )
);
const boldPart4 = document.createElement("strong");
boldPart4.textContent = "вырез для точных работ";
secondParagraph.appendChild(boldPart4);
secondParagraph.appendChild(document.createTextNode("."));
descriptionSection.appendChild(secondParagraph);

const thirdParagraph = document.createElement("p");
thirdParagraph.textContent =
  "Необходимо проявлять некоторую осторожность при работе с большими боковыми нагрузками ";
const boldPart5 = document.createElement("strong");
boldPart5.textContent = "на лезвие ножа";
thirdParagraph.appendChild(boldPart5);
thirdParagraph.appendChild(
  document.createTextNode(", ввиду небольшой толщины клинка в рабочей части.")
);
descriptionSection.appendChild(thirdParagraph);

const fourthParagraph = document.createElement("p");
fourthParagraph.textContent = "Монтаж рукояти накладной ";
const boldPart6 = document.createElement("strong");
boldPart6.textContent = "плашечный";
fourthParagraph.appendChild(boldPart6);
fourthParagraph.appendChild(
  document.createTextNode(
    ". На навершии рукояти, функцию которого выполняет выступающий из под плашек хвостовик, имеется "
  )
);
const boldPart7 = document.createElement("strong");
boldPart7.textContent = "отверстие под темляк";
fourthParagraph.appendChild(boldPart7);
fourthParagraph.appendChild(
  document.createTextNode(". Этот нож удобный помощник при работе с ")
);
const boldPart8 = document.createElement("strong");
boldPart8.textContent = "продуктами и охоте на боровую и водоплавающую дичь";
fourthParagraph.appendChild(boldPart8);
fourthParagraph.appendChild(document.createTextNode("."));
descriptionSection.appendChild(fourthParagraph);

container.appendChild(descriptionSection);

// ХАРАКТЕРИСТИКИ
const characteristicsSection = document.createElement("section");
characteristicsSection.id = "characteristics";

const techSpecs = document.createElement("div");
techSpecs.classList.add("spec-column");

const techTitle = document.createElement("h3");
techTitle.textContent = "Технические характеристики";
techSpecs.appendChild(techTitle);

const techList = [
  ["Общая длина", "227 мм"],
  ["Длина клинка", "112 мм"],
  ["Ширина клинка", "24 мм"],
  ["Толщина обуха", "2.9 мм"],
];
techList.forEach(([label, value]) => {
  const row = document.createElement("p");
  row.innerHTML = `<strong>${label}:</strong> ${value}`;
  techSpecs.appendChild(row);
});

const materials = document.createElement("div");
materials.classList.add("spec-column");

const materialsTitle = document.createElement("h3");
materialsTitle.textContent = "Используемые материалы";
materials.appendChild(materialsTitle);

const materialsList = [
  ["Сталь", "95X18"],
  ["Рукоять", "Накладки карельская береза"],
];
materialsList.forEach(([label, value]) => {
  const row = document.createElement("p");
  row.innerHTML = `<strong>${label}:</strong> ${value}`;
  materials.appendChild(row);
});

const production = document.createElement("div");
production.classList.add("spec-column");

const productionTitle = document.createElement("h3");
productionTitle.textContent = "Производство";
production.appendChild(productionTitle);

const productionInfo = document.createElement("p");
productionInfo.innerHTML = `<strong>Производство:</strong> АиР`;
production.appendChild(productionInfo);

characteristicsSection.appendChild(techSpecs);
characteristicsSection.appendChild(materials);
characteristicsSection.appendChild(production);

container.appendChild(characteristicsSection);

// ОТЗЫВЫ
const reviewsSection = document.createElement("section");
reviewsSection.id = "reviews";

const reviews = [
  {
    name: "Никита Панков",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam repellat tempora, autem tempore praesentium laborum. Veniam cupiditate quas, vero quo nobis, voluptatem nihil doloremque aliquam non voluptates odio odit.",
    stars: 5,
    avatar: "./img/NikitaAvatar.jpeg",
    date: "26.06.2019",
  },
  {
    name: "Саша Осейчук",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam repellat tempora, autem tempore praesentium laborum. Veniam cupiditate quas, vero quo nobis, voluptatem nihil doloremque aliquam non voluptates odio odit.",
    stars: 5,
    avatar: "./img/SashaAvatar.png",
    date: "26.06.2019",
  },
];

reviews.forEach((review) => {
  const reviewDiv = document.createElement("div");
  reviewDiv.className = "review";

  const avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";
  const avatarImg = document.createElement("img");
  avatarImg.src = review.avatar;
  avatarImg.alt = `${review.name} Avatar`;
  avatarImg.style.width = "50px";
  avatarImg.style.height = "50px";
  avatarImg.style.borderRadius = "50%";
  avatarDiv.appendChild(avatarImg);
  reviewDiv.appendChild(avatarDiv);

  const contentDiv = document.createElement("div");
  contentDiv.className = "content";

  const headerDiv = document.createElement("div");
  headerDiv.className = "header";
  headerDiv.style.display = "flex";
  headerDiv.style.justifyContent = "space-between";
  contentDiv.appendChild(headerDiv);

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = review.name;
  nameParagraph.className = "name";
  contentDiv.appendChild(nameParagraph);

  const dateParahraph = document.createElement("p");
  dateParahraph.textContent = review.date;
  dateParahraph.className = "date";

  headerDiv.appendChild(nameParagraph);
  headerDiv.appendChild(dateParahraph);

  const starsSpan = document.createElement("span");
  starsSpan.className = "stars";
  starsSpan.textContent = "★".repeat(review.stars);
  contentDiv.appendChild(starsSpan);

  const reviewParagraph = document.createElement("p");
  reviewParagraph.textContent = review.content;
  reviewParagraph.className = "comment";
  contentDiv.appendChild(reviewParagraph);

  const footerDiv = document.createElement("div");
  footerDiv.className = "footer";

  const replayParagraph = document.createElement("p");
  replayParagraph.textContent = "Ответить";
  replayParagraph.style.color = "#ffd700";
  replayParagraph.className = "replay";
  footerDiv.appendChild(replayParagraph);

  const heartImg = document.createElement("img");
  heartImg.src = "./img/stars.png";
  heartImg.alt = "Heart icon";
  heartImg.className = "heartIcon";
  footerDiv.appendChild(heartImg);

  contentDiv.appendChild(footerDiv);
  reviewDiv.appendChild(contentDiv);
  reviewsSection.appendChild(reviewDiv);
});
container.appendChild(reviewsSection);

// ДОСТАВКА
const deliverySection = document.createElement("section");
deliverySection.id = "delivery";

const countryDiv = document.createElement("div");
countryDiv.className = "dropdown";

const countryLabel = document.createElement("span");
countryLabel.textContent = "Ваша страна:";
countryDiv.appendChild(countryLabel);

const countrySelect = document.createElement("div");
countrySelect.className = "dropdown-select";
countrySelect.style.display = "none"; // По умолчанию скрыто
const countryList = ["Россия"]; // Добавь другие страны, если нужно
countryList.forEach((country) => {
  const item = document.createElement("div");
  item.className = "dropdown-item";
  item.textContent = country;
  countrySelect.appendChild(item);
});

const countryArrow = document.createElement("div");
countryArrow.className = "arrow";

// Добавляем стрелку и шторку в div страны
countryDiv.appendChild(countrySelect);
countryDiv.appendChild(countryArrow);
deliverySection.appendChild(countryDiv);

// Блок для выбора города
const cityDiv = document.createElement("div");
cityDiv.className = "dropdown";

// Метка для города
const cityLabel = document.createElement("span");
cityLabel.textContent = "Ваш город:";
cityDiv.appendChild(cityLabel);

// Шторка для выбора города
const citySelect = document.createElement("div");
citySelect.className = "dropdown-select";
citySelect.style.display = "none"; // По умолчанию скрыто
const cityList = ["Москва", "Санкт-Петербург", "Сочи"];
cityList.forEach((city) => {
  const item = document.createElement("div");
  item.className = "dropdown-item";
  item.textContent = city;
  citySelect.appendChild(item);
});

// Стрелка для шторки города
const cityArrow = document.createElement("div");
cityArrow.className = "arrow";

// Добавляем стрелку и шторку в div города
cityDiv.appendChild(citySelect);
cityDiv.appendChild(cityArrow);
deliverySection.appendChild(cityDiv);

// Добавляем секцию доставки в контейнер
document.body.appendChild(deliverySection);

// Логика для открытия/закрытия шторок
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".dropdown-select");
  const arrow = dropdown.querySelector(".arrow");

  dropdown.addEventListener("click", () => {
    const isOpen = select.style.display === "block";
    select.style.display = isOpen ? "none" : "block";
    arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  });
});

const deliveryOptions = [
  { service: "Почта России", price: "300 ₽ (5-8 дней)" },
  { service: "Почта России", price: "300 ₽ (5-8 дней)" },
];

deliveryOptions.forEach((option) => {
  const deliveryDiv = document.createElement("div");
  deliveryDiv.className = "delivery-option";

  const serviceSpan = document.createElement("span");
  serviceSpan.textContent = option.service;
  deliveryDiv.appendChild(serviceSpan);

  const priceSpan = document.createElement("span");
  priceSpan.textContent = option.price;
  deliveryDiv.appendChild(priceSpan);
  deliverySection.appendChild(deliveryDiv);
});
container.appendChild(deliverySection);

root.appendChild(container);


const abdulloFunction = () => {
  const root = document.getElementById("root");
const container = document.createElement("div");
container.className = "containerAbdullo";

const div1 = document.createElement("div");
div1.textContent = "Похожие товары";
div1.className = "div1";

const miniContainer = document.createElement("div");
miniContainer.className = "miniContainer";

function createProductBlock() {
  const block = document.createElement("div");
  block.className = "block";

  const mindiv1 = document.createElement("div");
  mindiv1.className = "mindiv1";

  const mindiv2 = document.createElement("div");
  mindiv2.innerHTML = `<h2 class="h2">Нож Лиса</h2>
    <div class="d1"><span>95x18</span> <span>Орех, Алюминий</span></div>
    <div class="d2">
        <div class="dd">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
        </div>
        <span>12 отзывов</span>
    </div>
    <hr class="hr">
    <div class="footer">
        <span>2 719P</span>
        <div>
            <img src="img/Весы.png" class="icons">
            <img src="img/Сердечко.png" class="icons">
        </div>
    </div>`;

  block.append(mindiv1);
  block.append(mindiv2);
  return block;
}

const container2 = document.createElement("div");
container2.className = "containerAbdullo";

const div2 = document.createElement("div");
div2.textContent = "Рекомендуем";
div2.className = "div1";

const miniContainer2 = document.createElement("div");
miniContainer2.className = "miniContainer";

function createProductBlock2() {
  const block = document.createElement("div");
  block.className = "block";

  const mindiv1 = document.createElement("div");
  mindiv1.className = "mindiv1";

  const mindiv2 = document.createElement("div");
  mindiv2.innerHTML = `<h2 class="h2">Нож Лиса</h2>
    <div class="d1"><span>95x18</span> <span>Орех, Алюминий</span></div>
    <div class="d2">
        <div class="dd">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
        </div>
        <span>12 отзывов</span>
    </div>
    <hr class="hr">
    <div class="footer">
        <span>2 719P</span>
        <div>
            <img src="img/Весы.png" class="icons">
            <img src="img/Сердечко.png" class="icons">
        </div>
    </div>`;

  block.append(mindiv1);
  block.append(mindiv2);
  return block;
}

container.append(div1);
miniContainer.append(createProductBlock());
miniContainer.append(createProductBlock());
miniContainer.append(createProductBlock());
miniContainer.append(createProductBlock());
container.append(miniContainer);
container.append(div2);

miniContainer2.append(createProductBlock2());
miniContainer2.append(createProductBlock2());
miniContainer2.append(createProductBlock2());
miniContainer2.append(createProductBlock2());
container2.append(miniContainer2);

root.append(container);
root.append(container2);

};

abdulloFunction();