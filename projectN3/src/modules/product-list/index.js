import { getTadList } from "./api.js";
import { getProducts } from "./api.js";
import { showProductDetails } from "./modal/index.js";

const showTabList = async () => {
  try {
    const tabs = await getTadList();
    const tabContainer = document.getElementById("tabList");
    tabContainer.innerHTML = "";

    tabs.forEach((tab, index) => {
      const button = document.createElement("button");
      const iconTab = document.createElement("img");
      const titleTab = document.createElement("p");

      iconTab.src = tab.icon;
      iconTab.alt = tab.title;
      titleTab.textContent = tab.title;

      button.classList.add("buttonTab");

      if (index === 0) {
        button.style.background = "#FFAB08";
      }

      button.onclick = () => {
        showProducts(tab.id, tab.categoryHeader);

        document.querySelectorAll(".buttonTab").forEach((tab) => {
          tab.style.background = "#fff";
        });

        button.style.background = "#FFAB08";
      };

      button.append(iconTab, titleTab);
      tabContainer.append(button);
    });
  } catch (error) {
    console.error(error);
  }
};

const showProducts = async (categoryId, categoryHeader) => {
  try {
    const products = await getProducts();
    const productsList = document.getElementById("productList");
    const productHeader = document.createElement("h1");
    const productContainer = document.createElement("div");

    productsList.innerHTML = "";

    productHeader.textContent = categoryHeader;

    productsList.append(productHeader);
    productContainer.classList.add("productContainer");
    productHeader.classList.add("productHeader");

    const filteredProducts = products.filter(
      (product) => product.categoryId === categoryId
    );

    if (filteredProducts.length === 0) {
      const emptyCategory = document.createElement("div");
      const emptyCategoryTitle = document.createElement("p");

      emptyCategory.textContent = "Продукты для данной категории не найдены.";

      emptyCategory.classList.add("emptyCategory");

      emptyCategory.append(emptyCategoryTitle);
      productsList.append(emptyCategory);
    } else {
      filteredProducts.forEach((product) => {
        const productContent = document.createElement("div");

        const productImg = document.createElement("img");
        const productTitle = document.createElement("div");
        const productPrice = document.createElement("div");
        const productWeight = document.createElement("div");
        const productButton = document.createElement("button");

        productContent.classList.add("productContent");

        productImg.src = product.img;
        productImg.alt = product.title;
        productTitle.textContent = product.title;
        productPrice.textContent = `${product.price}₽`;
        productWeight.textContent = product.weight;
        productButton.textContent = "Добавить";

        productButton.onclick = () => {
          showProductDetails(product);
        };

        productContent.append(
          productImg,
          productPrice,
          productTitle,
          productWeight,
          productButton
        );
        productContainer.append(productContent);
      });
    }
    productsList.append(productContainer);
  } catch (error) {
    console.log(error);
  }
};

showTabList();
showProducts(1, "Бургеры");
