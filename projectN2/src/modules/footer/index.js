function footer() {
  const root = document.getElementById("root");

  const footer = document.createElement("footer");

  const containerFooter = document.createElement("div");
  const titleFooter = document.createElement("p");
  const logoFooter = document.createElement("img");

  const contentFooter = document.createElement("div");
  const contentIconFooter = document.createElement("div");

  const descriptionFooter = document.createElement("p");
  const esv = document.createElement("p");
  const arrow = document.createElement("img");
  const digital = document.createElement("p");
  const hrFooter = document.createElement("div");
  const hrFooter1 = document.createElement("div");
  const hrFooter2 = document.createElement("div");

  const containerList = document.createElement("div");

  const garantie = document.createElement("div");
  const loan = document.createElement("p");
  const loanHr = document.createElement("div");
  const garantieTxt = document.createElement("p");
  const garantieHr = document.createElement("div");
  const contactFooter = document.createElement("p");

  const contentImgFooter = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const titleFooter1 = document.createElement("p");

  const footerHeader = document.createElement("p");

  const listFooter = [
    {
      title: "О компании",
      li: "Производство",
      li1: "Награды",
      li2: "Сертификаты"
    },
    {
      title: "Покупателю",
      li: "Как сделать заказ",
      li1: "Рекомендации по сборке",
      li2: "Договор публичной оферты"
    },
    {
      title: "Полезная информация",
      li: "Всё о фасадах",
      li1: "Всё о фурнитуре",
      li2: "Всё о ЛДСП"
    },
    {
      title: "3D-моделирование",
      li: "Запустить онлайн",
      li1: "Скачать на компьютер",
      li2: "от 2 Мбит/с 606 Мб"
    }
  ];

  listFooter.map((item) => {
    const ul = document.createElement("ul");
    const li = document.createElement("p");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    ul.classList.add("ul");
    li2.classList.add("li2");
    li3.classList.add("li3");

    li.textContent = item.title;
    li1.textContent = item.li;
    li2.textContent = item.li1;
    li3.textContent = item.li2;

    ul.append(li, li1, li2, li3);
    containerList.append(ul);
  });

  img1.src = "../src/shared/icons/footerImg1.png";
  img2.src = "../src/shared/icons/footerImg2.png";
  loan.textContent = "Рассрочка";
  garantieTxt.textContent = "Гарантия";
  contactFooter.textContent = "Контакты";
  titleFooter.textContent = `©  ООО "Мебельная компания "Лером" 2021`;
  logoFooter.src = "../src/shared/images/logo.png";
  esv.textContent = "E S V";
  arrow.src = "../src/shared/icons/redSpiner.png";
  digital.textContent = "digital";
  descriptionFooter.textContent = "Сайт разработан  -";
  footerHeader.textContent =
    "Все права защищены. Любое копирование и использование материалов сайта разрешено только с письменного согласия правообладателя. Не является публичной офертой.";
  titleFooter1.textContent = `©  ООО "Мебельная компания "Лером" 2021`;

  footer.classList.add("footer");
  titleFooter.classList.add("titleFooter");
  logoFooter.classList.add("logoFooter");
  esv.classList.add("esv");
  arrow.classList.add("arrow");
  digital.classList.add("digital");
  contentIconFooter.classList.add("contentIconFooter");
  descriptionFooter.classList.add("descriptionFooter");
  contentFooter.classList.add("contentFooter");
  containerFooter.classList.add("containerFooter");
  hrFooter.classList.add("hrFooter");
  containerList.classList.add("containerList");
  garantie.classList.add("garantie");
  loanHr.classList.add("loanHr");
  garantieHr.classList.add("garantieHr");
  contentImgFooter.classList.add("contentImgFooter");
  hrFooter1.classList.add("hrFooter1");
  footerHeader.classList.add("footerHeader");
  titleFooter1.classList.add("titleFooter1");
  hrFooter2.classList.add("hrFooter2");

  contentImgFooter.append(img1, img2);
  garantie.append(loan, loanHr, garantieTxt, garantieHr, contactFooter);
  contentIconFooter.append(esv, arrow, digital);
  contentFooter.append(descriptionFooter, contentIconFooter);
  containerFooter.append(titleFooter, logoFooter, titleFooter1, contentFooter);
  containerList.append(garantie, contentImgFooter);
  footer.append(
    containerFooter,
    hrFooter,
    containerList,
    hrFooter1,
    footerHeader,
    hrFooter2
  );

  root.append(footer);
}
footer();
