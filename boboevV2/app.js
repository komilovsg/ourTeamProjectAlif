const safariMuhammadFunction = () => {
  const root = document.getElementById("root");

  // Верхняя часть футера
  const footerUpper = document.createElement("div");
  footerUpper.classList.add("footer-upper");
  
  // Создаем разделы для верхней части футера
  
  const sectionsData = [
    {
      title: "ИНФОРМАЦИЯ",
      links: [
        "Златоустовские ножи в Москве и Московской области",
        "Ножевые стали",
        "О нас",
        "Условия оплаты и доставки",
        "Политика конфиденциальности"
      ]
    },
    {
      title: "СЛУЖБА ПОДДЕРЖКИ",
      links: [
        "Контактная информация",
        "Возврат товара",
        "Карта сайта"
      ]
    },
    {
      title: "ДОПОЛНИТЕЛЬНО",
      links: [
        "Подарочные сертификаты",
        "Партнеры",
        "Товары со скидкой"
      ]
    },
    {
      title: "ЛИЧНЫЙ КАБИНЕТ",
      links: [
        "Личный кабинет",
        "История заказов",
        "Мои закладки",
        "Рассылка новостей"
      ]
    }
  ];
  
  sectionsData.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("footer-upper-section");
  
    const title = document.createElement("h3");
    title.innerText = section.title;
    sectionDiv.appendChild(title);
  
    section.links.forEach(linkText => {
      const link = document.createElement("a");
      link.href = "#"; // Добавьте актуальные ссылки
      link.innerText = linkText;
      sectionDiv.appendChild(link);
    });
  
    footerUpper.appendChild(sectionDiv);
  });
  
  // Добавляем верхнюю часть футера в контейнер
  root.appendChild(footerUpper);
}
safariMuhammadFunction();

const boboevV2Fuction = () => {
  const root = document.getElementById("root");

  // Create footer container
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");
  
  // Section 1: Контакты
  const contactsSection = document.createElement("div");
  contactsSection.classList.add("footer-section");
  
  const contactsTitle = document.createElement("h3");
  contactsTitle.innerText = "Контакты";
  contactsSection.appendChild(contactsTitle);
  
  const phone = document.createElement("p");
  phone.innerText = "8 (800) 777-49-67";
  contactsSection.appendChild(phone);
  
  const workTime = document.createElement("p");
  workTime.innerText = "Пн-Пт\n7:00 - 16:00 (МСК)";
  contactsSection.appendChild(workTime);
  
  const address = document.createElement("p");
  address.innerText = "Златоуст,\nул. Шоссейная,\nд. 1, офис «6Б»";
  contactsSection.appendChild(address);
  
  const email = document.createElement("p");
  email.innerText = "info@zlatmax.ru";
  contactsSection.appendChild(email);
  
  // Social media icons
  const socialIcons = document.createElement("div");
  socialIcons.classList.add("footer-icons");
  
  ["facebook", "viber", "telegram", "whatsapp"].forEach(icon => {
    const img = document.createElement("img");
    img.src = `./icons/${icon}.svg`;  // icons folder should contain svg files
    img.alt = `${icon} icon`;
    socialIcons.appendChild(img);
  });
  
  contactsSection.appendChild(socialIcons);
  
  // Section 2: Полезные ссылки
  const linksSection = document.createElement("div");
  linksSection.classList.add("footer-section");
  
  const linksTitle = document.createElement("h3");
  linksTitle.innerText = "Полезные ссылки";
  linksSection.appendChild(linksTitle);
  
  const paymentLink = document.createElement("a");
  paymentLink.href = "#";
  paymentLink.innerText = "Способы оплаты и доставки";
  linksSection.appendChild(paymentLink);
  
  // Section 3: Наша гарантия
  const guaranteeSection = document.createElement("div");
  guaranteeSection.classList.add("footer-section");
  
  const guaranteeTitle = document.createElement("h3");
  guaranteeTitle.innerText = "Наша гарантия";
  guaranteeSection.appendChild(guaranteeTitle);
  
  const guaranteeText = document.createElement("p");
  guaranteeText.innerHTML = "Недовольны своей покупкой? Вы можете вернуть её в течение 30 дней с даты получения, согласно <a href='#' style='color: #ffca28;'>нашим правилам</a>.";
  guaranteeSection.appendChild(guaranteeText);
  
  // Section 4: Новостная рассылка
  const newsletterSection = document.createElement("div");
  newsletterSection.classList.add("newsletter");
  
  const newsletterTitle = document.createElement("h3");
  newsletterTitle.innerText = "Новостная рассылка";
  newsletterSection.appendChild(newsletterTitle);
  
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "example@gmail.com";
  newsletterSection.appendChild(emailInput);
  
  const subscribeButton = document.createElement("button");
  subscribeButton.innerText = "Подписаться";
  newsletterSection.appendChild(subscribeButton);
  
  const termsCheckbox = document.createElement("input");
  termsCheckbox.type = "checkbox";
  const termsLabel = document.createElement("label");
  termsLabel.innerText = "Я прочитал Условия соглашения и согласен с условиями";
  
  newsletterSection.appendChild(termsCheckbox);
  newsletterSection.appendChild(termsLabel);
  
  // Section for legal text
  const legalText = document.createElement("div");
  legalText.classList.add("footer-legal");
  legalText.innerHTML = "Все материалы, размещенные на сайте, носят справочный характер... <a href='#'>www.zlatmax.ru</a> обязательна!";
  
  // Append all sections to footer container
  footerContainer.appendChild(contactsSection);
  footerContainer.appendChild(linksSection);
  footerContainer.appendChild(guaranteeSection);
  footerContainer.appendChild(newsletterSection);
  
  // Append footer container and legal text to the root
  root.appendChild(footerContainer);
  root.appendChild(legalText);
  
}

boboevV2Fuction();