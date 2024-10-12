console.log("Шахрон Комилов");

export const shakhronFunctionBlock1 = () => {
  const root = document.getElementById("root");
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const createNewsBlock = ({
    upperImage,
    lowerImage,
    title,
    description,
    additionalText,
    price,
  }) => {
    const newsUpper = document.createElement("div");
    newsUpper.className = "news-upper";

    const upperImageContainer = document.createElement("div");
    upperImageContainer.className = "news-upper-image";
    upperImageContainer.style.backgroundImage = `url("${upperImage}")`;

    const upperText = document.createElement("div");
    upperText.className = "news-upper-text";

    const newsTitle = document.createElement("div");
    newsTitle.className = "news-title";
    newsTitle.textContent = title;
    upperText.append(newsTitle);

    const newsDescription = document.createElement("p");
    newsDescription.className = "news-description";
    newsDescription.textContent = description;
    upperText.append(newsDescription);

    const priceContainer = document.createElement("div");
    priceContainer.className = "news-price";
    priceContainer.textContent = price;
    upperText.append(priceContainer);

    const leftButton = document.createElement("div");
    leftButton.className = "nav-button nav-button-left";
    const leftIcon = document.createElement("img");
    leftIcon.src = "../../../shered/icons/blueArrow.png";
    leftIcon.className = "button-icon";
    leftButton.append(leftIcon);
    upperText.append(leftButton);

    newsUpper.append(upperImageContainer);
    newsUpper.append(upperText);

    const newsLower = document.createElement("div");
    newsLower.className = "news-lower";

    const lowerText = document.createElement("div");
    lowerText.className = "news-lower-text";

    const lowerTitle = document.createElement("div");
    lowerTitle.className = "news-title";
    lowerTitle.textContent = additionalText;
    lowerText.append(lowerTitle);

    const lowerDescription = document.createElement("p");
    lowerDescription.className = "news-description";
    lowerDescription.textContent = description;
    lowerText.append(lowerDescription);

    const priceContainerLower = document.createElement("div");
    priceContainerLower.className = "news-price";
    priceContainerLower.textContent = price;
    lowerText.append(priceContainerLower);

    const rightButton = document.createElement("div");
    rightButton.className = "nav-button-secont-gr nav-button-right";
    const rightIcon = document.createElement("img");
    rightIcon.src = "../../../shered/icons/blueArrow.png";
    rightIcon.className = "button-icon-second-gr";
    rightButton.append(rightIcon);
    lowerText.append(rightButton);

    const lowerImageContainer = document.createElement("div");
    lowerImageContainer.className = "news-lower-image";
    lowerImageContainer.style.backgroundImage = `url("${lowerImage}")`;

    newsLower.append(lowerText);
    newsLower.append(lowerImageContainer);

    const newsBlock = document.createElement("div");
    newsBlock.className = "news-block";
    newsBlock.append(newsUpper);
    newsBlock.append(newsLower);

    return newsBlock;
  };

  const newsBlock1 = createNewsBlock({
    upperImage: "../../../shered/images/Rectangle1.png",
    lowerImage: "../../../shered/images/Rectangle2.png",
    title: "ДОСТАВКА ПО ВСЕЙ РОССИИ",
    description: "Мини текст описания новости и ее актуальности",
    additionalText: "СБОРКА",
    price: "Цены от: 42.000р",
  });

  const newsBlock2 = createNewsBlock({
    upperImage: "../../../shered/images/Rectangle3.png",
    lowerImage: "../../../shered/images/Rectangle4.png",
    title: "КАК ВЫБРАТЬ МАТРАС",
    description: "Мини текст описания новости и ее актуальности",
    additionalText: "КАКОЙ ШКАФ ВЫБРАТЬ В 2022 ГОДУ",
    price: "Цены от: 50.000р",
  });

  mainContainer.append(newsBlock1);
  mainContainer.append(newsBlock2);

  root.append(mainContainer);
};

export const shakhronFunctionBlock2 = () => {
  const root = document.getElementById("root");
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const createNewsBlock = ({ upperImage, title, description, price }) => {
    const newsUpper = document.createElement("div");
    newsUpper.className = "news-upper";

    const upperImageContainer = document.createElement("div");
    upperImageContainer.className = "news-upper-image-block2";
    upperImageContainer.style.backgroundImage = `url("${upperImage}")`;

    const upperText = document.createElement("div");
    upperText.className = "news-upper-text";

    const newsTitle = document.createElement("div");
    newsTitle.className = "news-title";
    newsTitle.textContent = title;
    upperText.append(newsTitle);

    const newsDescription = document.createElement("p");
    newsDescription.className = "news-description";
    newsDescription.textContent = description;
    upperText.append(newsDescription);

    const priceContainer = document.createElement("div");
    priceContainer.className = "news-price";
    priceContainer.textContent = price;
    upperText.append(priceContainer);

    const leftButton = document.createElement("div");
    leftButton.className = "nav-button nav-button-left";
    const leftIcon = document.createElement("img");
    leftIcon.src = "../../../shared/icons/blueArrow.png";
    leftIcon.className = "button-icon";
    leftButton.append(leftIcon);
    upperText.append(leftButton);

    newsUpper.append(upperImageContainer);
    newsUpper.append(upperText);

    return newsUpper;
  };

  const newsBlock3 = createNewsBlock({
    upperImage: "../../../shered/images/Rectangle5.png",
    title: "ДОСТАВКА ПО ВСЕЙ РОССИИ",
    description: "Мини текст описания новости и ее актуальности",
    price: "Цены от: 42.000р",
  });

  mainContainer.append(newsBlock3);
  root.append(mainContainer);
};
