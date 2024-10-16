import "./navbar/index.js";
import "./order/index.js";
import "./product-list/index.js";
import "./footer/index.js";

const loadPartial = (elementId, partialFile) => {
  fetch(partialFile)
    .then((response) => response.text())
    .then((data) => (document.getElementById(elementId).innerHTML = data))
    .catch((error) => console.error("Ошибка загрузки partial:", error));
};

loadPartial("navbar", "../src/modules/navbar/ui.html");
loadPartial("order", "../src/modules/order/ui.html");
loadPartial("product-list", "../src/modules/product-list/ui.html");
loadPartial("footer", "../src/modules/footer/ui.html");
