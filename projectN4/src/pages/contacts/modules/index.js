import L from "leaflet";

function createContacts() {
  const container = document.createElement("slot");
  container.classList.add("contacts-slot");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const phone = document.createElement("p");
  const phoneText = document.createElement("strong");
  phoneText.textContent = "+7 (499) 686-10-14";
  phone.append(phoneText);

  const address = document.createElement("p");
  address.textContent = "г. Москва, Холодильный пер. 4к1с8";

  const email = document.createElement("p");
  email.textContent = "a.dragunov@tdaliance.ru";

  const socialIcons = document.createElement("div");
  socialIcons.classList.add("social-icons");

  const vkLink = document.createElement("a");
  vkLink.href = "#";
  const vkIcon = document.createElement("img");
  vkIcon.src = "path/to/vk-icon.png";
  vkIcon.alt = "VK";
  vkLink.append(vkIcon);

  const instagramLink = document.createElement("a");
  instagramLink.href = "#";
  const instagramIcon = document.createElement("img");
  instagramIcon.src = "path/to/instagram-icon.png";
  instagramIcon.alt = "Instagram";
  instagramLink.append(instagramIcon);

  socialIcons.append(vkLink, instagramLink);

  contactInfo.append(phone, address, email, socialIcons);
  container.append(contactInfo);

  const mapContainer = document.createElement("div");
  mapContainer.id = "map";
  container.append(mapContainer);

  const map = L.map(mapContainer).setView([55.708353, 37.622504], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
  }).addTo(map);

  const marker = L.marker([55.708353, 37.622504]).addTo(map);
  marker.bindPopup("Холодильный переулок, 4").openPopup();

  return container;
}

const contactsSlot = document.getElementById("contacts-slot");
contactsSlot.append(createContacts());
