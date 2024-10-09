console.log("products");

const products = [
  {
    title: "ГОСТИНЫЕ",
    description:
      "Мини текст описания и преимущества покупки данного направления.",
    stock: 2030,
    price: "42.000р",
    imagePath: "./shared/images/rectangle1.png",
    iconPath: "./shared/icons/blueArrow.png",
  },
  {
    title: "СПАЛЬНИ",
    description:
      "Мини текст описания и преимущества покупки данного направления.",
    stock: 2030,
    price: "42.000р",
    imagePath: "./shared/images/rectangle2.png",
    iconPath: "./shared/icons/blueArrow.png",
  },
  {
    title: "ДЕТСКИЕ",
    description:
      "Мини текст описания и преимущества покупки данного направления.",
    stock: 2030,
    price: "42.000р",
    imagePath: "./shared/images/rectangle3.png",
    iconPath: "./shared/icons/blueArrow.png",
  },
  {
    title: "ПРИХОЖИЕ",
    description:
      "Мини текст описания и преимущества покупки данного направления.",
    stock: 2030,
    price: "42.000р",
    imagePath: "./shared/images/rectangle3.png",
    iconPath: "./shared/icons/blueArrow.png",
  },
];

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.imagePath;
  img.alt = product.title;

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const title = document.createElement("h2");
  title.textContent = product.title;

  const description = document.createElement("p");
  description.textContent = product.description;

  const stock = document.createElement("p");
  stock.innerHTML = `Товары под заказ в наличии: <span>${product.stock}шт</span>`;

  const price = document.createElement("p");
  price.textContent = `Цены от: ${product.price}`;

  const icon = document.createElement("img");
  icon.src = product.iconPath;
  icon.alt = "Иконка перехода";
  icon.classList.add("icon");

  textContainer.append(title, description, stock, price, icon);
  card.append(img, textContainer);

  return card;
}

function renderProducts() {
  const root = document.getElementById("root");
  products.forEach((product) => {
    const productCard = createProductCard(product);
    root.append(productCard);
  });
}

renderProducts();
