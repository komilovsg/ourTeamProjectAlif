const videoPlay = () => {
  const root = document.getElementById("root");
  const videoContainer = document.createElement("div");
  videoContainer.className = "video-container";

  const photoContainer = document.createElement("div");
  photoContainer.className = "photo-container";

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  videoContainer.appendChild(photoContainer);
  videoContainer.appendChild(overlay);

  root.appendChild(videoContainer);
};

videoPlay();

const abdulloFunctionBlock1 = () => {
  const root = document.getElementById("root");
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const createNewsBlock = ({
    upperImage,
    lowerImage,
    title,
    description,
    additionalText,
    price
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
    leftIcon.src = "../src/shared/icons/blueArrow.png";
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
    lowerText.append(priceContainerLower); // Добавление цены в нижнюю часть

    const rightButton = document.createElement("div");
    rightButton.className = "nav-button-secont-gr nav-button-right";
    const rightIcon = document.createElement("img");
    rightIcon.src = "../src/shared/icons/blueArrow.png";
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
    upperImage: "../src/shared/images/Rectangle7.png",
    lowerImage: "../src/shared/images/Rectangle8.png",
    title: "ДОСТАВКА ПО ВСЕЙ РОССИИ",
    description: "Мини текст описания новости и ее актуальности",
    additionalText: "СБОРКА"
  });

  const newsBlock2 = createNewsBlock({
    upperImage: "../src/shared/images/Rectangle9.png",
    lowerImage: "../src/shared/images/Rectangle10.png",
    title: "КАК ВЫБРАТЬ МАТРАС",
    description: "Мини текст описания новости и ее актуальности",
    additionalText: "КАКОЙ ШКАФ ВЫБРАТЬ В 2022 ГОДУ"
  });

  mainContainer.append(newsBlock1);
  mainContainer.append(newsBlock2);

  root.append(mainContainer);
};

abdulloFunctionBlock1();
