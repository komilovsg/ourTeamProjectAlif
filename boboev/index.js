const root = document.getElementById("root");

const footer = document.createElement("footer");
footer.className = "footer";
root.append(footer);

// Контакты
const contactsSection = document.createElement("div");
contactsSection.className = "footer__section";
footer.append(contactsSection);

const contactsTitle = document.createElement("h3");
contactsTitle.textContent = "Контакты";
contactsSection.append(contactsTitle);

const phone = document.createElement("p");
phone.textContent = "8 (800) 777-49-67";
contactsSection.append(phone);

const workHours = document.createElement("p");
workHours.textContent = "Пн-Пт 7:00 - 16:00 (МСК)";
contactsSection.append(workHours);

const address = document.createElement("p");
address.textContent = "Златоуст, ул. Шоссейная, д. 1, офис «6Б»";
contactsSection.append(address);

const email = document.createElement("p");
email.textContent = "info@zlatmax.ru";
contactsSection.append(email);

const socialIcons = document.createElement("div");
socialIcons.className = "footer__social-icons";
contactsSection.append(socialIcons);

const icons = ["facebook", "viber", "telegram", "whatsapp"];
icons.forEach(icon => {
  const iconLink = document.createElement("a");
  iconLink.href = "#";
  
  const iconElement = document.createElement("i");
  iconElement.className = `icon-${icon}`;
  iconLink.append(iconElement);
  
  socialIcons.append(iconLink);
});

// Полезные ссылки
const usefulLinksSection = document.createElement("div");
usefulLinksSection.className = "footer__section";
footer.append(usefulLinksSection);

const usefulLinksTitle = document.createElement("h3");
usefulLinksTitle.textContent = "Полезные ссылки";
usefulLinksSection.append(usefulLinksTitle);

const paymentDelivery = document.createElement("p");
paymentDelivery.textContent = "Способы оплаты и доставки";
usefulLinksSection.append(paymentDelivery);

// Наша гарантия
const warrantySection = document.createElement("div");
warrantySection.className = "footer__section";
footer.append(warrantySection);

const warrantyTitle = document.createElement("h3");
warrantyTitle.textContent = "Наша гарантия";
warrantySection.append(warrantyTitle);

const warrantyText = document.createElement("p");
warrantyText.innerHTML = `Недовольны своей покупкой? Вы можете вернуть ее в течение 30 дней с даты получения, согласно <a href="#">нашим правилам</a>.`;
warrantySection.append(warrantyText);

// Новостная рассылка
const newsletterSection = document.createElement("div");
newsletterSection.className = "footer__section";
footer.append(newsletterSection);

const newsletterTitle = document.createElement("h3");
newsletterTitle.textContent = "Новостная рассылка";
newsletterSection.append(newsletterTitle);

const newsletterText = document.createElement("p");
newsletterText.textContent = "Подпишитесь прямо сейчас!";
newsletterSection.append(newsletterText);

const newsletterForm = document.createElement("form");
newsletterForm.className = "newsletter-form";
newsletterSection.append(newsletterForm);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "example@gmail.com";
newsletterForm.append(emailInput);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = ">";
newsletterForm.append(submitButton);

const checkboxLabel = document.createElement("label");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkboxLabel.append(checkbox);

const checkboxText = document.createElement("span");
checkboxText.textContent = "Я прочитал Условия соглашения и согласен с условиями";
checkboxLabel.append(checkboxText);
newsletterSection.append(checkboxLabel);
