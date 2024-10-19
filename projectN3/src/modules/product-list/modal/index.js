import { addButtons } from "../carzina/index.js";

export const showProductDetails = (product) => {
  const productList = document.getElementById("productList");

  const modal = document.createElement("div");
  const parts = document.createElement("div");
  const alltext = document.createElement("div");
  const navPart = document.createElement("div");
  const leftPart = document.createElement("div");
  const rightPart = document.createElement("div");
  const modalInside = document.createElement("div");
  const modalButtons = document.createElement("div");
  const generalContentOfCount = document.createElement("div");

  const leftPartAdaptive = document.createElement("div");
  const rightPartAdaptive = document.createElement("div");
  const priceAdaptive = document.createElement("div");

  const compound = document.createElement("p");
  const quantity = document.createElement("span");
  const priceProduct = document.createElement("p");
  const modalHeader = document.createElement("h1");
  const description = document.createElement("p");

  const imgLeft = document.createElement("img");
  const closeButton = document.createElement("img");

  const addButton = document.createElement("button");
  const incrementButton = document.createElement("button");
  const decrementButton = document.createElement("button");

  let count = 1;

  imgLeft.src = product.img;
  quantity.textContent = count;
  incrementButton.textContent = "+";
  decrementButton.textContent = "-";
  addButton.textContent = "Добавить";
  modalHeader.textContent = product.title;
  priceProduct.textContent = `${product.price}₽`;
  closeButton.src = "../src/shared/icons/close.png";
  compound.innerHTML = `Состав: <br/>Пшеничная булочка<br/>Котлета из говядины<br/>Красный лук<br/>Листья салата<br/>Соус горчичный<br/><span>${product.weight}, ккал 430</span>`;
  description.textContent =
    "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.";

  modal.classList.add("modal");
  parts.classList.add("parts");
  alltext.classList.add("alltext");
  navPart.classList.add("navPart");
  leftPart.classList.add("leftPart");
  compound.classList.add("compound");
  rightPart.classList.add("rightPart");
  modalInside.classList.add("modalInside");
  modalButtons.classList.add("modalButtons");
  generalContentOfCount.classList.add("generalContentOfCount");
  leftPartAdaptive.classList.add("leftPartAdaptive");
  rightPartAdaptive.classList.add("rightPartAdaptive");
  addButton.classList.add("addButton");
  priceAdaptive.classList.add("priceAdaptive");

  incrementButton.onclick = () => {
    count++;
    quantity.textContent = count;
    priceProduct.textContent = `${product.price * count}₽`;
  };

  decrementButton.onclick = () => {
    if (count > 1) {
      count--;
      quantity.textContent = count;
      priceProduct.textContent = `${product.price * count}₽`;
    }
  };

  closeButton.onclick = () => {
    modal.remove();
  };

  addButton.onclick = () => {
    modal.remove();
    addButtons(product, count);
  };

  modalButtons.append(decrementButton, quantity, incrementButton);
  generalContentOfCount.append(modalButtons, priceProduct);
  alltext.append(description, compound);
  rightPart.append(alltext, generalContentOfCount);
  leftPart.append(imgLeft, addButton);
  leftPartAdaptive.append(imgLeft, alltext);
  rightPartAdaptive.append(addButton, modalButtons);
  priceAdaptive.append(priceProduct);
  navPart.append(modalHeader, closeButton);
  parts.append(
    leftPart,
    leftPartAdaptive,
    rightPart,
    rightPartAdaptive,
    priceAdaptive
  );
  modalInside.append(navPart, parts);
  modal.append(modalInside);
  productList.append(modal);

  modal.style.display = "block";
};

export const showOrderDetails = () => {
  const productList = document.getElementById("productList");

  const modalOrders = document.createElement("div");
  const modalIn = document.createElement("div");
  const contentCloseButton = document.createElement("div");
  const closeButton = document.createElement("img");
  const modalLeft = document.createElement("div");
  const modalRight = document.createElement("div");
  const modalLeftImg = document.createElement("img");

  const todoOrder = document.createElement("div");
  const titleOrderRight = document.createElement("p");

  const inputsContent = document.createElement("div");
  const inputName = document.createElement("input");
  const inputPhone = document.createElement("input");

  const contentRadio = document.createElement("div");
  const radioOptionDelivery = document.createElement("div");
  const deliveryOption = document.createElement("input");
  const deliveryLabel = document.createElement("label");

  const radioOptionYourself = document.createElement("div");
  const yourselfOption = document.createElement("input");
  const yourselfLabel = document.createElement("label");

  const containerUserAdress = document.createElement("div");
  const inputStreet = document.createElement("input");
  const contentAdressStreet = document.createElement("div");
  const inputFloor = document.createElement("input");
  const inputIntercom = document.createElement("input");

  const orderButtonDelivery = document.createElement("button");

  deliveryOption.type = "radio";
  deliveryOption.checked = true;
  deliveryLabel.for = "delivery";
  deliveryLabel.textContent = "Самовывоз";
  deliveryOption.name = "deliveryType";
  yourselfOption.name = "deliveryType";
  yourselfOption.type = "radio";
  yourselfOption.checked = false;
  yourselfLabel.for = "yourselfDelivery";
  yourselfLabel.textContent = "Доставка";

  inputStreet.type = "text";
  inputStreet.placeholder = "Улица, дом, квартира";
  inputFloor.type = "text";
  inputFloor.placeholder = "Этаж";
  inputIntercom.type = "text";
  inputIntercom.placeholder = "Домофон";
  orderButtonDelivery.textContent = "Оформить";
  inputName.placeholder = "Ваше имя";
  inputPhone.placeholder = "Ваше телефон";
  inputName.type = "text";
  inputPhone.type = "phone";
  closeButton.src = "../src/shared/icons/close.png";
  modalLeftImg.src = "../src/shared/images/g12.png";
  titleOrderRight.textContent = "Доставка";

  modalIn.classList.add("modalIn");
  contentCloseButton.classList.add("contentCloseButton");
  modalLeft.classList.add("modalLeft");
  modalRight.classList.add("modalRight");
  todoOrder.classList.add("todoOrder");
  inputsContent.classList.add("inputsContent");
  titleOrderRight.classList.add("titleOrderRight");
  contentRadio.classList.add("contentRadio");
  contentAdressStreet.classList.add("contentAdressStreet");
  inputStreet.classList.add("inputStreet");
  containerUserAdress.classList.add("containerUserAdress");
  orderButtonDelivery.classList.add("orderButtonDelivery");
  modalOrders.classList.add("modalOrders");

  closeButton.onclick = () => {
    modalOrders.remove();
  };

  orderButtonDelivery.onclick = () => {
    modalOrders.remove();
    setTimeout(() => {
      alert("Ваш заказ принят");
    }, 0);
  };

  contentAdressStreet.append(inputFloor, inputIntercom);
  containerUserAdress.append(inputStreet, contentAdressStreet);
  radioOptionDelivery.append(deliveryOption, deliveryLabel);
  radioOptionYourself.append(yourselfOption, yourselfLabel);
  contentRadio.append(radioOptionDelivery, radioOptionYourself);
  inputsContent.append(inputName, inputPhone);
  todoOrder.append(
    titleOrderRight,
    inputsContent,
    contentRadio,
    containerUserAdress,
    orderButtonDelivery
  );
  modalLeft.append(modalLeftImg);
  contentCloseButton.append(closeButton);
  modalRight.append(contentCloseButton, todoOrder);
  modalIn.append(modalLeft, modalRight);
  modalOrders.append(modalIn);
  productList.append(modalOrders);

  modalOrders.style.display = "block";
};
