function farishtaFunction() {
  const root = document.getElementById("root");
  const container = document.createElement("section");

  // NAVBAR
  const navbar = document.createElement("navbar");
  const widget = document.createElement("div");
  const logo = document.createElement("img");
  const contacts = document.createElement("div");

  const date = document.createElement("div");
  const activeDays = document.createElement("p");
  const iconDate = document.createElement("img");

  const contentLink = document.createElement("div");
  const iconLink = document.createElement("img");
  const link = document.createElement("a");

  const containerContacts = document.createElement("div");
  const headerText = document.createElement("p");
  const iconPhone = document.createElement("img");
  const phoneNumber = document.createElement("p");

  const contentContacts = document.createElement("div");
  const headerTxt = document.createElement("p");
  const iconTel = document.createElement("img");
  const telNumber = document.createElement("p");
  const hr = document.createElement("div");

  const lineButton = document.createElement("button");
  const line1 = document.createElement("img");
  const line2 = document.createElement("img");
  const line3 = document.createElement("img");

  const cancel = document.createElement("img");

  cancel.src = "../src/shared/icons/cancel.png";
  headerText.textContent = "Отдел продаж:";
  headerTxt.textContent = "Звонки по Росии:";
  iconPhone.src = "../src/shared/icons/phone.png";
  iconTel.src = "../src/shared/icons/phone.png";
  phoneNumber.innerHTML = "8 (495) 664-54-57<br/>8 (929) 928-86-35";
  telNumber.innerHTML = "8-800-000-00-00<br/><p>Бесплатно</p>";
  activeDays.innerHTML = "Пн-Пт с 10:00 до 20:00<br/>Сб-Вс с 10:00 до 19:00";
  iconDate.src = "../src/shared/icons/clockeBlue.png";
  link.textContent = "Наши салоны";
  link.href = "https://www.lerom.ru/";
  iconLink.src = "../src/shared/icons/locationBlue.png";
  logo.src = "../src/shared/images/logo.png";
  line1.src = "../src/shared/icons/line.png";
  line2.src = "../src/shared/icons/line.png";
  line3.src = "../src/shared/icons/line.png";

  lineButton.classList.add("lineButton");
  contacts.classList.add("contacts");
  logo.classList.add("logo");
  container.classList.add("container");
  activeDays.classList.add("activeDays");
  iconDate.classList.add("iconDate");
  iconLink.classList.add("iconLink");
  link.classList.add("link");
  date.classList.add("date");
  contentLink.classList.add("contentLink");
  widget.classList.add("widget");
  navbar.classList.add("navbar");
  phoneNumber.classList.add("phoneNumber");
  containerContacts.classList.add("containerContacts");
  contentContacts.classList.add("contentContacts");
  iconPhone.classList.add("iconPhone");
  iconTel.classList.add("iconTel");
  telNumber.classList.add("telNumber");
  hr.classList.add("hr");
  cancel.classList.add("cancel");

  lineButton.append(line1, line2, line3, cancel);
  contentContacts.append(headerTxt, iconTel, telNumber);
  containerContacts.append(headerText, iconPhone, phoneNumber);
  contentLink.append(iconLink, link);
  date.append(iconDate, activeDays);
  widget.append(date, contentLink);
  contacts.append(containerContacts, contentContacts);
  navbar.append(widget, logo, lineButton, contacts);

  // MENU

  const menuContainer = document.createElement("div");

  const menu = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonDrop = document.createElement("button");
  const drop = document.createElement("div");
  const searchIcon = document.createElement("img");
  const containerTxt = document.createElement("div");

  const about = document.createElement("p");
  const model = document.createElement("p");
  const clients = document.createElement("p");
  const order = document.createElement("p");

  const iconSearchWhite = document.createElement("img");

  about.textContent = "О нас";
  model.textContent = "3D-моделирование";
  clients.textContent = "Покупателю";
  order.textContent = "Доставка и оплата";
  buttonDrop.textContent = "Каталог";
  searchIcon.src = "../src/shared/icons/search.png";
  buttonSearch.textContent = "Поиск по сайту...";
  iconSearchWhite.src = "../src/shared/icons/searchWhite.png";

  about.classList.add("about");
  menuContainer.classList.add("menuContainer");
  drop.classList.add("drop");
  buttonDrop.classList.add("buttonDrop");
  buttonSearch.classList.add("buttonSearch");
  searchIcon.classList.add("searchIcon");
  menu.classList.add("menu");
  containerTxt.classList.add("containerTxt");
  iconSearchWhite.classList.add("iconSearchWhite");

  buttonDrop.append(drop);
  containerTxt.append(about, model, clients, order);
  menu.append(buttonDrop, containerTxt);
  buttonSearch.append(searchIcon, iconSearchWhite);
  menuContainer.append(menu, buttonSearch);

  // BGIMG

  const category = [
    {
      icon: "../src/shared/icons/camera.png",
      title: ">100 000",
      desc: "Производственная площадь.",
    },
    {
      icon: "../src/shared/icons/profile.png",
      title: ">1 100",
      desc: "Рабочий коллектив.",
    },
    {
      icon: "../src/shared/icons/star.png",
      title: "ОФИЦИАЛЬНО",
      desc: "Мы находимся в национальном реестре промышленных предприятий.",
    },
  ];

  const wraperBg = document.createElement("div");
  const containerBg = document.createElement("div");
  const header = document.createElement("h1");
  const description = document.createElement("p");
  const content = document.createElement("div");
  const wrapperCategory = document.createElement("div");
  const arrowContainer = document.createElement("div");
  const trash = document.createElement("img");

  const arrowLeft = document.createElement("div");
  const arrowRight = document.createElement("div");

  const arrowLeftVector = document.createElement("img");
  const arrowRightVector = document.createElement("img");

  description.innerHTML =
    "Мы готовы принять и передать ваш  заказ на мебель региональному представительству. <br/><br/> Для этого пришлите ваши пожелания и контактную информацию нам на почту zakaz@lerom.ru";

  header.innerHTML = "Производим мебель<br/>с 1997 года";
  arrowLeftVector.src = "../src/shared/icons/left-vector.png.png";
  arrowRightVector.src = "../src/shared/icons/right-vector.png";
  trash.src = "../src/shared/icons/treshMarket.png";

  wrapperCategory.classList.add("wrapperCategory");
  header.classList.add("header");
  arrowLeft.classList.add("arrowLeft");
  arrowRight.classList.add("arrowRight");
  wraperBg.classList.add("wraperBg");
  containerBg.classList.add("containerBg");
  description.classList.add("description");
  content.classList.add("content");
  arrowContainer.classList.add("arrowContainer");
  trash.classList.add("trash");

  category.map((category) => {
    const allCategories = document.createElement("div");

    const circle = document.createElement("div");
    const circleIcon = document.createElement("img");

    const contentTxt = document.createElement("div");
    const title = document.createElement("p");
    const desc = document.createElement("p");
    allCategories.classList.add("allCategories");

    title.textContent = category.title;
    desc.textContent = category.desc;
    circleIcon.src = category.icon;

    circle.classList.add("circle");
    contentTxt.classList.add("contentTxt");
    title.classList.add("title");
    desc.classList.add("desc");
    circleIcon.classList.add("circleIcon");

    circle.append(circleIcon);
    contentTxt.append(title, desc);
    allCategories.append(circle, contentTxt);
    wrapperCategory.append(allCategories);
  });

  arrowLeft.append(arrowLeftVector);
  arrowRight.append(arrowRightVector);
  arrowContainer.append(arrowRight, arrowLeft);
  content.append(header, description, wrapperCategory);
  containerBg.append(arrowContainer, content, trash);
  wraperBg.append(containerBg);

  // dropDown

  const dropDown = document.createElement("div");
  const allContacts = document.createElement("div");
  const allContacts1 = document.createElement("div");
  const headerContacts1 = document.createElement("p");
  const containerPhone2 = document.createElement("div");
  const containerButtonIcon2 = document.createElement("img");
  const containerPhoneTxt2 = document.createElement("p");

  const containerPhoneTxt3 = document.createElement("p");

  const headerContacts = document.createElement("p");
  const containerPhone = document.createElement("div");
  const containerButtonIcon = document.createElement("img");
  const containerPhoneTxt = document.createElement("p");

  const containerButtonIcon1 = document.createElement("img");
  const containerPhoneTxt1 = document.createElement("p");

  const containerPhone1 = document.createElement("div");

  headerContacts1.textContent = "Звонки по Росии:";
  containerButtonIcon.src = "../src/shared/icons/phone.png";
  containerButtonIcon1.src = "../src/shared/icons/phone.png";
  containerButtonIcon2.src = "../src/shared/icons/phone.png";
  headerContacts.textContent = "Отдел продаж: ";
  containerPhoneTxt.textContent = "8 (495) 664-54-57";
  containerPhoneTxt1.textContent = "8 (495) 664-54-57";
  containerPhoneTxt2.textContent = "8 (495) 664-54-57";
  containerPhoneTxt3.textContent = "Бесплатно";

  containerPhone.classList.add("containerPhone");
  allContacts.classList.add("allContacts");
  containerPhone1.classList.add("containerPhone1");
  containerPhone2.classList.add("containerPhone2");
  allContacts1.classList.add("allContacts1");

  const clonedDate = date.cloneNode(true);
  clonedDate.classList.add("clonedDate");

  const clonedContentLink = contentLink.cloneNode(true);
  const clonedContainerTxt = containerTxt.cloneNode(true);

  dropDown.classList.add("dropDown");
  clonedDate.classList.add("clonedDate");
  clonedContentLink.classList.add("clonedContentLink");
  clonedContainerTxt.classList.add("clonedContainerTxt");

  dropDown.style.display = "none";

  const hr1 = document.createElement("div");
  const hr2 = document.createElement("div");
  const hr3 = document.createElement("div");
  const hr4 = document.createElement("div");

  hr1.classList.add("hr1");
  hr2.classList.add("hr2");
  hr3.classList.add("hr3");
  hr4.classList.add("hr4");

  containerPhone2.append(containerButtonIcon2, containerPhoneTxt2);
  allContacts1.append(headerContacts1, containerPhone2, containerPhoneTxt3);
  containerPhone.append(containerButtonIcon, containerPhoneTxt);
  containerPhone1.append(containerButtonIcon1, containerPhoneTxt1);
  allContacts.append(headerContacts, containerPhone, containerPhone1);
  dropDown.append(
    hr1,
    clonedDate,
    clonedContentLink,
    hr2,
    clonedContainerTxt,
    hr3,
    allContacts,
    hr4,
    allContacts1
  );
  container.append(navbar, dropDown, hr, menuContainer, wraperBg);
  root.append(container);

  // EVENTS

  lineButton.onclick = () => {
    if (cancel.style.display === "none") {
      dropDown.style.display = "flex";
      cancel.style.display = "flex";

      line1.style.display = "none";
      line2.style.display = "none";
      line3.style.display = "none";
    } else {
      dropDown.style.display = "none";
      cancel.style.display = "none";

      line1.style.display = "flex";
      line2.style.display = "flex";
      line3.style.display = "flex";
    }
  };
}
farishtaFunction();
