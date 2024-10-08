const farishtaFunction = ()=>{
  // main.js
  const root = document.getElementById("root");
  
  // NAVBAR
  
  const navbar = document.createElement("div");
  const firstDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const userIcons = document.createElement("img");
  const account = document.createElement("p");
  const about = document.createElement("p");
  const delivery = document.createElement("p");
  const news = document.createElement("p");
  const contact = document.createElement("p");
  
  userIcons.src = "icons/navbar/user.png";
  account.textContent = "Личный кабинет";
  about.textContent = "О нас";
  delivery.textContent = "Оплата и доставка";
  news.textContent = "Новости";
  contact.textContent = "Контакты";
  
  delivery.classList.add("p");
  news.classList.add("p");
  contact.classList.add("p");
  about.classList.add("p");
  firstDiv.classList.add("firstDiv");
  secondDiv.classList.add("secondDiv");
  account.classList.add("account");
  navbar.classList.add("navbar");
  
  firstDiv.append(about, delivery, news, contact);
  secondDiv.append(userIcons, account);
  navbar.append(firstDiv, secondDiv);
  
  //NAVBAR_LOGO
  
  const navbarLogo = document.createElement("div");
  const divLogo = document.createElement("div");
  const orderDiv = document.createElement("div");
  const loca = document.createElement("div");
  
  const locationOrder = document.createElement("div");
  const locaIcons = document.createElement("img");
  const locaName = document.createElement("p");
  
  const divText = document.createElement("div");
  const textDiv = document.createElement("div");
  const number = document.createElement("p");
  const txt = document.createElement("p");
  const strelka = document.createElement("img");
  
  const heart = document.createElement("img");
  const order = document.createElement("div");
  
  const addCards = document.createElement("div");
  const basket = document.createElement("img");
  const count = document.createElement("div");
  
  const addText = document.createElement("div");
  const price = document.createElement("p");
  const priceText = document.createElement("p");
  
  const leftDiv = document.createElement("div");
  const logoName = document.createElement("h1");
  const logoDiv = document.createElement("div");
  const logoTyp = document.createElement("p");
  const logoIcons = document.createElement("img");
  const logoText = document.createElement("p");
  const searchDiv = document.createElement("div");
  const searchIcons = document.createElement("img");
  const inputSearch = document.createElement("input");
  
  count.textContent = 0; // add count
  price.textContent = "0 p."; // add price
  priceText.textContent = "Оформить заказ";
  basket.src = "icons/navbar/Иконка_корзины.png";
  heart.src = "icons/navbar/Иконка_Избранное.png";
  strelka.src = "icons/navbar/стрелка.png";
  number.textContent = "8-800-777-49-67";
  txt.textContent = "Заказать звонок";
  locaIcons.src = "icons/navbar/Иконка_Локации.png";
  locaName.textContent = "Москва";
  logoName.textContent = "ZLATMAX";
  logoTyp.textContent = "ЗЛAТОУСТОВСКИЕ";
  logoIcons.src = "icons/navbar/logo_knife.png";
  logoText.textContent = "НОЖИ";
  searchIcons.src = "icons/navbar/search.svg";
  inputSearch.placeholder = "Поиск";
  
  count.classList.add("count");
  priceText.classList.add("priceText");
  price.classList.add("price");
  addCards.classList.add("addCards");
  locationOrder.classList.add("locationOrder");
  textDiv.classList.add("textDiv");
  locaName.classList.add("locaName");
  number.classList.add("number");
  txt.classList.add("txt");
  logoName.classList.add("logoName");
  logoTyp.classList.add("logo");
  logoText.classList.add("logo");
  divLogo.classList.add("divLogo");
  orderDiv.classList.add("orderDiv");
  logoDiv.classList.add("logoDiv");
  searchDiv.classList.add("searchDiv");
  inputSearch.classList.add("inputSearch");
  navbarLogo.classList.add("navbarLogo");
  order.classList.add("order");
  loca.classList.add("loca");
  
  addCards.append(basket, count);
  addText.append(price, priceText);
  order.append(addCards, addText);
  textDiv.append(number, strelka);
  divText.append(textDiv, txt);
  locationOrder.append(locaIcons, locaName);
  loca.append(locationOrder, divText);
  orderDiv.append(loca, heart, order);
  searchDiv.append(searchIcons, inputSearch);
  logoDiv.append(logoTyp, logoIcons, logoText);
  leftDiv.append(logoName, logoDiv);
  divLogo.append(leftDiv, searchDiv);
  navbarLogo.append(divLogo, orderDiv);
  
  //NAVBAR navigation
  
  const secText = document.createElement("div");
  const hr = document.createElement("div");
  const divTxt = document.createElement("div");
  const text1 = document.createElement("p");
  const text2 = document.createElement("p");
  const text3 = document.createElement("p");
  const text4 = document.createElement("p");
  const text5 = document.createElement("p");
  
  text1.textContent = "Каталог ножей";
  text2.textContent = "Клинковое оружие";
  text3.textContent = "Сувенирные изделия";
  text4.textContent = "Фонари ARMYTEK";
  text5.textContent = "Сопуствующие товары";
  
  divTxt.classList.add("divTxt");
  hr.classList.add("hr");
  secText.classList.add("secText");
  text1.classList.add("firstText");
  text2.classList.add("txtAll");
  text3.classList.add("txtAll");
  text4.classList.add("txtAll");
  text5.classList.add("txtAll");
  
  divTxt.append(text1, text2, text3, text4, text5);
  secText.append(divTxt, hr);
  
  // SECTION 1
  
  const section1 = document.createElement("div");
  
  // SectionText
  
  const sectionTxt = document.createElement("div");
  const txt1 = document.createElement("p");
  const str = document.createElement("img");
  const txt2 = document.createElement("p");
  const str1 = document.createElement("img");
  const txt3 = document.createElement("p");
  
  str.src = "icons/section_1/strelka_right.png";
  str1.src = "icons/section_1/strelka_right.png";
  txt1.textContent = "Главная";
  txt2.textContent = "Разделочные ножи";
  txt3.textContent = "Нож Снегирь";
  
  sectionTxt.classList.add("sectionTxt");
  txt3.classList.add("txt3");
  txt1.classList.add("textAll");
  txt2.classList.add("textAll");
  section1.classList.add("section1");
  
  // ImgDiv
  
  const sectionDivImg = document.createElement("div");
  const divAllImg = document.createElement("div");
  const firstImg = document.createElement("img");
  const imgAllDiv = document.createElement("div");
  
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  
  firstImg.src = "images/main-foto.png";
  img1.src = "images/sec-foto_1.png";
  img2.src = "images/sec-foto_2.png";
  img3.src = "images/sec-foto_3.png";
  img4.src = "images/sec-foto_4.png";
  
  imgAllDiv.classList.add("imgAllDiv");
  divAllImg.classList.add("divAllImg");
  
  imgAllDiv.append(img1, img2, img3, img4);
  divAllImg.append(firstImg, imgAllDiv);
  sectionDivImg.append(divAllImg);
  sectionTxt.append(txt1, str, txt2, str1, txt3);
  
  // tovar
  
  const catalog = document.createElement("div");
  const knifeDiv = document.createElement("div");
  const knifeText = document.createElement("div");
  const knifeStart = document.createElement("div");
  const knifeName = document.createElement("p");
  const star1 = document.createElement("img");
  const star2 = document.createElement("img");
  const star3 = document.createElement("img");
  const star4 = document.createElement("img");
  const star5 = document.createElement("img");
  const knifeIcons = document.createElement("div");
  const iconScale = document.createElement("img");
  const iconHeart = document.createElement("img");
  const nameCato = document.createElement("p");
  const hr1 = document.createElement("div");
  const hr2 = document.createElement("div");
  const hr3 = document.createElement("div");
  
  nameCato.textContent = "В наличии";
  knifeName.textContent = "Нож Снегирь";
  star1.src = "icons/section_1/start.png";
  star2.src = "icons/section_1/start.png";
  star3.src = "icons/section_1/start.png";
  star4.src = "icons/section_1/start.png";
  star5.src = "icons/section_1/start.png";
  iconScale.src = "icons/section_1/scales.png";
  iconHeart.src = "icons/section_1/Иконка_Избранное (1).png";
  
  hr1.classList.add("hrAll");
  hr2.classList.add("hrAll");
  hr3.classList.add("hrAll");
  nameCato.classList.add("nameCato");
  knifeName.classList.add("knifeName");
  knifeStart.classList.add("knifeStart");
  knifeText.classList.add("knifeText");
  knifeIcons.classList.add("knifeIcons");
  knifeDiv.classList.add("knifeDiv");
  catalog.classList.add("catalog");
  
  knifeStart.append(star1, star2, star3, star4, star5);
  knifeText.append(knifeName, knifeStart);
  knifeIcons.append(iconScale, iconHeart);
  knifeDiv.append(knifeText, knifeIcons);
  
  const divTextObj = document.createElement("div");
  const keyText = document.createElement("div");
  const propertyText = document.createElement("div");
  
  const keyText1 = document.createElement("p");
  const keyText2 = document.createElement("p");
  const keyText3 = document.createElement("p");
  const keyText4 = document.createElement("p");
  
  const propertyText1 = document.createElement("p");
  const propertyText2 = document.createElement("p");
  const propertyText3 = document.createElement("p");
  const propertyText4 = document.createElement("p");
  const keyTxt1 = document.createElement("p");
  const keyTxt2 = document.createElement("p");
  const keyTxt3 = document.createElement("p");
  const keyTxt4 = document.createElement("p");
  const textAndInputDiv = document.createElement("div");
  const keyTxt = document.createElement("div");
  const divInput = document.createElement("div");
  
  keyTxt1.textContent = "Сталь";
  keyTxt2.textContent = "Рукоять";
  keyTxt3.textContent = "Гарда и тыльник";
  keyTxt4.textContent = "Обработка клинка";
  
  keyText1.textContent = "Артикул:";
  keyText2.textContent = "Торговая марка:";
  keyText3.textContent = "Серия:";
  keyText4.textContent = "Бонусные баллы:";
  
  propertyText1.textContent = "AF0000001952";
  propertyText2.textContent = "WUESTHOF (Германия)";
  propertyText3.textContent = "Ножи серии Classic Ikon";
  propertyText4.textContent = "38";
  
  keyText.classList.add("keyTextDiv");
  propertyText.classList.add("propertyTextDiv");
  divTextObj.classList.add("divTextObj");
  textAndInputDiv.classList.add("textAndInputDiv");
  keyTxt.classList.add("keyTxtDiv");
  
  // Dropdown 1
  
  const dropDown = document.createElement("div");
  const txtBtn = document.createElement("p");
  const button = document.createElement("button");
  const arrow = document.createElement("img");
  
  arrow.src = "icons/section_1/arrow-right.png";
  txtBtn.textContent = "Выбрать сталь";
  
  button.append(arrow);
  txtBtn.classList.add("txtBtn");
  dropDown.classList.add("dropdown");
  button.classList.add("button");
  arrow.classList.add("arrow");
  
  button.append(arrow);
  dropDown.append(txtBtn, button);
  
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");
  const steelOptions = [
    "100X13M",
    "110X18M-ШД",
    "40Х10С2М (ЭИ-107)",
    "50Х14МФ",
    "95Х18",
    "AUS-8",
    "ELMAX",
    "RWL-34"
  ];
  
  steelOptions.forEach((steel) => {
    const option = document.createElement("p");
    option.textContent = steel;
    dropdownContent.appendChild(option);
  
    option.addEventListener("click", () => {
      txtBtn.textContent = steel;
      txtBtn.style.color = "#141414";
      dropdownContent.classList.remove("show");
      arrow.classList.remove("arrow-down");
    });
  });
  
  dropDown.appendChild(dropdownContent);
  
  button.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
    arrow.classList.toggle("arrow-down");
  });
  
  // Dropdown 2
  const dropDown2 = document.createElement("div");
  const txtBtn2 = document.createElement("p");
  const button2 = document.createElement("button");
  const arrow2 = document.createElement("img");
  
  arrow2.src = "icons/section_1/arrow-right.png";
  txtBtn2.textContent = "Выбрать рукоять";
  
  txtBtn2.classList.add("txtBtn");
  dropDown2.classList.add("dropdown");
  button2.classList.add("button");
  arrow2.classList.add("arrow");
  
  button2.append(arrow2);
  dropDown2.append(txtBtn2, button2);
  
  // Dropdown 3
  const dropDown3 = document.createElement("div");
  const txtBtn3 = document.createElement("p");
  const button3 = document.createElement("button");
  const arrow3 = document.createElement("img");
  
  arrow3.src = "icons/section_1/arrow-right.png";
  txtBtn3.textContent = "Выбрать гарда и тыльник";
  
  txtBtn3.classList.add("txtBtn");
  dropDown3.classList.add("dropdown");
  button3.classList.add("button");
  arrow3.classList.add("arrow");
  
  button3.append(arrow3);
  dropDown3.append(txtBtn3, button3);
  
  // Dropdown 4
  const dropDown4 = document.createElement("div");
  const txtBtn4 = document.createElement("p");
  const button4 = document.createElement("button");
  const arrow4 = document.createElement("img");
  
  arrow4.src = "icons/section_1/arrow-right.png";
  txtBtn4.textContent = "Выбрать обработку клинка";
  
  txtBtn4.classList.add("txtBtn");
  dropDown4.classList.add("dropdown");
  button4.classList.add("button");
  arrow4.classList.add("arrow");
  
  button4.append(arrow4);
  dropDown4.append(txtBtn4, button4);
  
  divInput.classList.add("divInput");
  
  // 3 chast
  
  const divTxtEnd = document.createElement("div");
  const txtEnd = document.createElement("h3");
  const txtAndBtnEnd = document.createElement("div");
  const btnEnd = document.createElement("button");
  const tooltip = document.createElement("div");
  const pEnd = document.createElement("p");
  
  btnEnd.textContent = "?";
  txtEnd.textContent = "3 865 ₽";
  pEnd.textContent = "+ 449 баллов за покупку";
  tooltip.textContent =
    "Вам будут начислены баллы в размере 5% от стоимости покупки. Их можно будет использовать на оплату последующих заказов.";
  
  tooltip.classList.add("tooltip");
  txtAndBtnEnd.classList.add("txtAndBtnEnd");
  txtEnd.classList.add("txtEnd");
  btnEnd.classList.add("btnEnd");
  pEnd.classList.add("pEnd");
  divTxtEnd.classList.add("divTxtEnd");
  
  // buttons
  
  const divAllButtons = document.createElement("div");
  
  const divButtons = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  
  btn1.textContent = "-";
  btn2.textContent = 0;
  btn3.textContent = "+";
  
  let countBtn = 0;
  
  btn3.onclick = () => {
    countBtn++;
    btn2.textContent = countBtn;
    count.textContent = countBtn;
  };
  
  btn1.onclick = () => {
    if (countBtn > 0) {
      countBtn--;
      btn2.textContent = countBtn;
      count.textContent = countBtn;
    }
  };
  divButtons.classList.add("divButtons");
  
  // buttons buy and add
  const btnBuyAndAdd = document.createElement("div");
  const btnBuy = document.createElement("button");
  const btnBuyIcon = document.createElement("img");
  
  const btnAdd = document.createElement("button");
  btnBuyAndAdd.classList.add("btnBuyAndAdd");
  divAllButtons.classList.add("divAllButtons");
  btnBuyIcon.src = "icons/section_1/Иконка_корзины (1).png";
  btnBuy.textContent = "В корзину";
  btnAdd.textContent = "Купить в 1 клик";
  
  btnBuy.appendChild(btnBuyIcon);
  btnBuyAndAdd.append(btnBuy, btnAdd);
  divButtons.append(btn1, btn2, btn3);
  divAllButtons.append(divButtons, btnBuyAndAdd);
  btnEnd.appendChild(tooltip);
  txtAndBtnEnd.append(pEnd, btnEnd);
  divTxtEnd.append(txtEnd, txtAndBtnEnd);
  divInput.append(dropDown, dropDown2, dropDown3, dropDown4);
  keyTxt.append(keyTxt1, keyTxt2, keyTxt3, keyTxt4);
  textAndInputDiv.append(keyTxt, divInput);
  keyText.append(keyText1, keyText2, keyText3, keyText4);
  propertyText.append(propertyText1, propertyText2, propertyText3, propertyText4);
  divTextObj.append(keyText, propertyText);
  catalog.append(
    knifeDiv,
    nameCato,
    hr1,
    divTextObj,
    hr2,
    textAndInputDiv,
    hr3,
    divTxtEnd,
    divAllButtons
  );
  section1.append(sectionDivImg, catalog);
  
  root.append(navbar, navbarLogo, secText, sectionTxt, section1);
  
  // EVENTS
  
  // arrow right down
  let isDown = false;
  
  button.onclick = () => {
    isDown = !isDown;
  
    if (isDown) {
      arrow.src = "icons/section_1/arrow-down.png";
    } else {
      arrow.src = "icons/section_1/arrow-right.png";
    }
  };
  
  btnEnd.addEventListener("mouseover", () => {
    tooltip.style.display = "block";
  });
  
  btnEnd.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });
  
  }
  farishtaFunction();
  
  const shakhronFunction = () => {
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
  
  }
  shakhronFunction();
  //----------------------------------NEW PART-------------------------------//
  
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
  
      // Создаем заголовок
      const h2 = document.createElement("h2");
      h2.className = "h2";
      h2.textContent = "Нож Лиса";
  
      // Создаем первую строку
      const d1 = document.createElement("div");
      d1.className = "d1";
      const span1 = document.createElement("span");
      span1.textContent = "95x18";
      const span2 = document.createElement("span");
      span2.textContent = "Орех, Алюминий";
      d1.append(span1, span2);
  
      // Создаем вторую строку
      const d2 = document.createElement("div");
      d2.className = "d2";
      const dd = document.createElement("div");
      dd.className = "dd";
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("img");
        star.src = "img/Звезда.png";
        star.className = "stars";
        dd.appendChild(star);
      }
      const reviewsSpan = document.createElement("span");
      reviewsSpan.textContent = "12 отзывов";
      d2.append(dd, reviewsSpan);
  
      // Создаем линию
      const hr = document.createElement("hr");
      hr.className = "hr";
  
      // Создаем футер
      const footer = document.createElement("div");
      footer.className = "footer";
      const priceSpan = document.createElement("span");
      priceSpan.textContent = "2 719P";
      const iconsDiv = document.createElement("div");
      const weightIcon = document.createElement("img");
      weightIcon.src = "img/Весы.png";
      weightIcon.className = "icons";
      const heartIcon = document.createElement("img");
      heartIcon.src = "img/Сердечко.png";
      heartIcon.className = "icons";
      iconsDiv.append(weightIcon, heartIcon);
      footer.append(priceSpan, iconsDiv);
  
      // Собираем блок
      mindiv2.append(h2, d1, d2, hr, footer);
      block.append(mindiv1, mindiv2);
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
      return createProductBlock(); // Используем ту же функцию для повторного использования
    }
  
    container.append(div1);
    for (let i = 0; i < 4; i++) {
      miniContainer.append(createProductBlock());
    }
    container.append(miniContainer);
    container.append(div2);
  
    for (let i = 0; i < 4; i++) {
      miniContainer2.append(createProductBlock2());
    }
    container2.append(miniContainer2);
  
    root.append(container);
    root.append(container2);
  };
  abdulloFunction();
  
  //----------------------------------NEW PART-------------------------------//
  
  const safariMuhammadANDBoboevFunction = () =>{
    document.addEventListener('DOMContentLoaded', () => {
      const root = document.getElementById('root');
      
      const footer = document.createElement('footer');
      footer.style.backgroundColor = '#141414';
      footer.style.display = 'flex';
      footer.style.flexDirection = 'column';
      footer.style.color = 'white';
  
      // Создание первого сектора с информацией
      const sectionOne = createSection([
          {
              title: 'ИНФОРМАЦИЯ',
              links: [
                  'Златоустовские ножи в Москве и Московской области',
                  'Ножевые стали',
                  'О нас',
                  'Условия оплаты и доставки',
                  'Политика конфиденциальности'
              ]
          },
          {
              title: 'СЛУЖБА ПОДДЕРЖКИ',
              links: [
                  'Контактная информация',
                  'Возврат товара',
                  'Карта сайта'
              ]
          },
          {
              title: 'ДОПОЛНИТЕЛЬНО',
              links: [
                  'Подарочные сертификаты',
                  'Партнеры',
                  'Товары со скидкой'
              ]
          },
          {
              title: 'ЛИЧНЫЙ КАБИНЕТ',
              links: [
                  'Личный кабинет',
                  'История заказов',
                  'Мои закладки',
                  'Рассылка новостей'
              ]
          }
      ]);
      
      footer.appendChild(sectionOne);
  
      // Горизонтальная линия
      footer.appendChild(createHr());
  
      // Создание второго сектора с контактами
      const sectionTwo = createSection([
          {
              title: 'КОНТАКТЫ',
              content: createContacts()
          },
          {
              title: 'ПОЛЕЗНЫЕ ССЫЛКИ',
              links: ['Способы оплаты и доставки']
          },
          {
              title: 'НАША ГАРАНТИЯ',
              content: createGuaranteeText() // Use a function to create the guarantee text
          },
          {
              title: 'НОВОСТНАЯ РАССЫЛКА',
              content: createNewsletterForm()
          }
      ]);
      
      footer.appendChild(sectionTwo);
      
      // Функция для создания текста гарантии с ссылкой
      function createGuaranteeText() {
          const guaranteeDiv = document.createElement("div");
          const guaranteeText = document.createElement("p");
          guaranteeText.className = "textNashimPravilam"
          
          // Используем innerHTML для задания текста с ссылкой
          guaranteeText.innerHTML = `Недовольны своей покупкой? Вы можете вернуть её в течение 30 дней с даты получения, согласно <a href='#' style='color: #ffca28; text-decoration: none;'>нашим правилам</a>.`;
          
          guaranteeDiv.appendChild(guaranteeText);
          return guaranteeDiv; // Возвращаем созданный элемент
      }
      
  
      // Еще одна горизонтальная линия
      footer.appendChild(createHr());
  
      // Финальный текст
      const sectionThree = createFinalSection();
      footer.appendChild(sectionThree);
  
      // Добавляем footer в root
      root.appendChild(footer);
  });
  
  // Функция для создания секции с текстом и ссылками
  function createSection(sections) {
      const section = document.createElement('section');
      section.style.display = 'flex';
      section.style.justifyContent = 'space-around';
      section.style.alignItems = 'start';
  
      sections.forEach(item => {
          const div = document.createElement('div');
          div.style.width = '400px';
          div.style.display = 'flex';
          div.style.flexDirection = 'column';
          div.style.gap = '10px';
  
          const h2 = document.createElement('h2');
          h2.textContent = item.title;
          div.appendChild(h2);
  
          if (item.links) {
              item.links.forEach(linkText => {
                  const link = document.createElement('a');
                  link.href = '#';
                  link.textContent = linkText;
                  link.className = "footer-link";
                  div.appendChild(link);
              });
          }
  
          if (item.content) {
              div.appendChild(item.content);
          }
  
          section.appendChild(div);
      });
  
      return section;
  }
  
  // Функция для создания горизонтальной линии
  function createHr() {
      const hr = document.createElement('hr');
      hr.style.width = '90%';
      hr.style.marginTop = '20px';
      hr.style.marginBottom = '20px';
      return hr;
  }
  
  function createContacts() {
      const container = document.createElement('div');
  
      // Массив для хранения данных контактов
      const contacts = [
          {
              icon: './ourTeamProjectAlif/shakhkron/img/phone.png',
              text: '8 (800) 777-49-67'
          },
          {
              icon: './ourTeamProjectAlif/shakhkron/img/clocke.png',
              text: 'Пн-Пт 7:00 - 16:00 (МСК)'
          },
          {
              icon: './ourTeamProjectAlif/shakhkron/img/locationLogo.png',
              text: 'Златоуст, ул. Шоссейная, д. 1, офис «6Б»'
          },
          {
              icon: './ourTeamProjectAlif/shakhkron/img/mailLogo.png',
              text: 'info@zlatmax.ru'
          }
      ];
  
      // Создание строк для каждого контакта
      contacts.forEach(contact => {
          const contactDiv = document.createElement('div');
          contactDiv.style.display = 'flex';
          contactDiv.style.alignItems = 'center';
          contactDiv.style.marginBottom = '10px'; // Отступ между строками
  
          const img = document.createElement('img');
          img.src = contact.icon;
          img.alt = 'Icon';
          img.style.width = '20px'; // Можно задать нужный размер
          img.style.marginRight = '10px'; // Отступ между иконкой и текстом
  
          const p = document.createElement('p');
          p.textContent = contact.text;
  
          contactDiv.appendChild(img);
          contactDiv.appendChild(p);
          container.appendChild(contactDiv);
      });
  
      // Социальные иконки
      const socialIconsDiv = document.createElement('div');
      socialIconsDiv.style.display = 'flex';
      socialIconsDiv.style.alignItems = 'center';
      socialIconsDiv.style.marginTop = '20px'; // Отступ сверху для иконок
  
      // Массив с путями к иконкам
      const socialIcons = [
          './ourTeamProjectAlif/shakhkron/img/fFacebook.png',
          './ourTeamProjectAlif/shakhkron/img/tTelegram.png',
          './ourTeamProjectAlif/shakhkron/img/vViber.png',
          './ourTeamProjectAlif/shakhkron/img/wWhatsapp.png'
      ];
  
      socialIcons.forEach(iconSrc => {
          const img = document.createElement('img');
          img.src = iconSrc;
          img.alt = 'Social Icon';
          img.style.width = '33px'; // Задайте нужный размер
          img.style.marginRight = '10px'; // Отступ между иконками
          socialIconsDiv.appendChild(img);
      });
  
      container.appendChild(socialIconsDiv);
      return container;
  }
  
  
  
  // Функция для создания формы подписки
  function createNewsletterForm() {
      const div = document.createElement('div');
      
      const p = document.createElement('p');
      p.textContent = 'Подпишитесь прямо сейчас!';
      div.appendChild(p);
  
      const input = document.createElement('input');
      input.type = 'email';
      input.className="mailInput"
      input.placeholder = 'example@gmail.com';
      div.appendChild(input);
  
      const agreementDiv = document.createElement('div');
      agreementDiv.style.display = 'flex';
      agreementDiv.style.alignItems = 'center';
      agreementDiv.style.gap = '20px';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.width = '10px';
      checkbox.style.height = '10px';
  
      const p2 = document.createElement('p');
      p2.textContent = 'Я прочитал Условия соглашения и согласен с условиями';
  
      agreementDiv.appendChild(checkbox);
      agreementDiv.appendChild(p2);
      div.appendChild(agreementDiv);
  
      return div;
  }
  
  // Функция для создания финального текста в футере
  function createFinalSection() {
      const section = document.createElement('section');
      section.style.display = 'flex';
      section.style.justifyContent = 'space-between';
      section.style.alignItems = 'center';
      section.style.padding = '0 160px';
  
      const p1 = document.createElement('p');
      // p1.style.width = "680px";
      p1.className="lastText"
      p1.textContent = `Все материалы, размещенные на сайте, носят справочный характер и не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. При копировании материалов гиперссылка на www.zlatmax.ru обязательна!`;
      
      const p2 = document.createElement('p');
      p2.textContent = 'Златоустовские ножи www.zlatmax.ru ©';
  
      section.appendChild(p1);
      section.appendChild(p2);
  
      return section;
  }
  
  }
  
  