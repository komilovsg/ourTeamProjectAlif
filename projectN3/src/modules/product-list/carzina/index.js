import { showOrderDetails } from "../modal/index.js";

let cart = [];

const updateCartProduct = () => {
  const cartItemsContainer = document.getElementById("productsCarzina");
  const cartItemCount = document.getElementById("carzinaQuantity");
  const emptyTitle = document.getElementById("emptyTitle");
  cartItemsContainer.innerHTML = "";

  const orderContainer = document.createElement("div");
  const orderButton = document.createElement("button");
  const deliveryContent = document.createElement("div");
  const orderIcon = document.createElement("img");
  const orderDes = document.createElement("p");

  const totalContent = document.createElement("div");
  const totalTitle = document.createElement("p");
  const totalPrices = document.createElement("p");

  if (cart.length === 0) {
    totalContent.style.display = "none";
    emptyTitle.textContent = "Тут пока пусто 😣";
    orderContainer.style.display = "none";
  } else {
    emptyTitle.textContent = "";
  }

  let totalItems = 0;
  let totalPrice = 0;
  
  totalTitle.textContent = "Итого";
  orderIcon.src = "../src/shared/icons/Доставка.png";
  orderDes.textContent = "Бесплатная доставка";
  orderButton.textContent = "Оформить заказ";

  cart.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.quantity * item.price;

    const cartItem = document.createElement("div");
    const cartContent = document.createElement("div");
    const cartImg = document.createElement("img");
    const cartItemDetails = document.createElement("div");
    const cartTitle = document.createElement("p");
    const cartPrice = document.createElement("p");

    const cartButtons = document.createElement("div");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");
    const quantityButton = document.createElement("p");

    cartItem.classList.add("cartItem");
    cartButtons.classList.add("cartButtons");
    cartContent.classList.add("cartContent");
    cartItemDetails.classList.add("cartItemDetails");
    cartTitle.classList.add("cartTitle");
    cartImg.classList.add("cartImg");
    totalContent.classList.add("totalContent");
    orderContainer.classList.add("orderContainer");
    orderButton.classList.add("orderButton");
    deliveryContent.classList.add("deliveryContent");

    cartImg.src = item.img;
    cartTitle.innerHTML = `${item.title} <span>${item.weight}</span>`;
    cartPrice.textContent = ` ${item.price}₽`;
    quantityButton.textContent = item.quantity;
    incrementButton.textContent = "+";
    decrementButton.textContent = "-";

    incrementButton.onclick = () => {
      item.quantity++;
      quantityButton.textContent = item.quantity;
      updateCartProduct();
    };

    decrementButton.onclick = () => {
      if (item.quantity > 1) {
        item.quantity--;
        quantityButton.textContent = item.quantity;
      } else {
        cart = cart.filter((cartItem) => cartItem.id !== item.id);
      }
      updateCartProduct();
    };

    orderButton.onclick = () => {
      showOrderDetails();
      console.log("done");
    };

    cartPrice.textContent = `${item.price * item.quantity}₽`;

    cartButtons.append(decrementButton, quantityButton, incrementButton);
    cartItemDetails.append(cartTitle, cartPrice);
    cartContent.append(cartImg, cartItemDetails);
    cartItem.append(cartContent, cartButtons);
    cartItemsContainer.append(cartItem);
  });

  cartItemCount.textContent = totalItems;
  totalPrices.textContent = `${totalPrice}₽`;
  totalContent.append(totalTitle, totalPrices);
  deliveryContent.append(orderIcon, orderDes);
  orderContainer.append(orderButton, deliveryContent);
  cartItemsContainer.append(emptyTitle, totalContent, orderContainer);
};

export const addButtons = (product, quantity = 1) => {
  const currentProduct = cart.find((current) => current.id === product.id);

  if (currentProduct) {
    currentProduct.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  updateCartProduct();
};
