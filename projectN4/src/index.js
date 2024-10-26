import { createSecurity } from "./shared/utils/security.js";
import { createScheme } from "./shared/utils/scheme.js";
import { createContracting } from "./shared/utils/contracting.js";

const loadPartial = async (elementId, partialFile) => {
  try {
    const response = await fetch(partialFile);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
  } catch (error) {
    console.error("Ошибка загрузки partial:", error);
  }
};

loadPartial("navbar", "../src/shared/modules/navbar/ui.html");
loadPartial("requests", "../src/shared/modules/requests/ui.html");
loadPartial("footer", "../src/shared/modules/footer/ui.html");

const addComponent = (elementId, content) => {
  const element = document.getElementById(elementId);
  if (element) {
    const newComponent = document.createElement("div");
    newComponent.innerHTML = content;
    element.append(newComponent);
  } else {
    console.error(`Элемент с id '${elementId}' не найден.`);
  }
};

const initializeComponents = () => {
  const commonComponent = createSecurity();
  const schemeComponent = createScheme();
  const contractingComponent = createContracting();

  addComponent("componetn", commonComponent.outerHTML);
  addComponent("security", schemeComponent.outerHTML);
  addComponent("contracting", contractingComponent.outerHTML);
  addComponent("aboutUs", commonComponent.outerHTML);
  addComponent("typesChemistry", contractingComponent.outerHTML)
};

const loadPage = async (page) => {
  const pageFile = `../src/pages/${page}/${page}.html`;
  await loadPartial("pages", pageFile);
  initializeComponents();
  updateNavbar(page);
};

const updateNavbar = (page) => {
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".links a");
  const logo = document.getElementById("logo");
  const tel = document.getElementById("tel");

  if (page === "home") {
    navbar.classList.add("navbarActive");
    navbar.classList.remove("otherActive");
    links.forEach((link) => {
      link.classList.add("linksActive");
      link.classList.remove("linksOther");
    });
    logo.src = "../src/shared/icons/logo.png";
  } else {
    navbar.classList.add("otherActive");
    navbar.classList.remove("navbarActive");
    links.forEach((link) => {
      link.classList.add("linksOther");
      link.classList.remove("linksActive");
    });
    logo.src = "../src/shared/icons/logo (11).png";
    logo.style.width = "140px";
    tel.style.color = "#ooo";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");

  document.getElementById("navbar").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const page = event.target.getAttribute("data-page");
      loadPage(page);
    }
  });
});
