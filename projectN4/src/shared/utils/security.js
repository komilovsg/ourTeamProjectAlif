import { security } from "./date.js";

export const createSecurity = () => {
  const contentSecurity = document.createElement("div");
  contentSecurity.classList.add("contentSecurity");

  security.forEach((elem) => {
    const securityItem = document.createElement("div");
    const img = document.createElement("img");
    const desc = document.createElement("p");

    img.src = elem.img;
    img.alt = elem.title;
    desc.textContent = elem.title;

    securityItem.classList.add("securityItem");

    securityItem.append(img, desc);
    contentSecurity.append(securityItem);
  });

  return contentSecurity;
};
