console.log("Абдулло");
// const abdulloFunction = () => {
//   let root = document.getElementById("root");

//   let container = document.createElement("div");
//   container.className = "presentation-container";

//   let title = document.createElement("div");
//   title.className = "presentation-title";
//   title.textContent = "ВИДЕОПРЕЗЕНТАЦИЯ";

//   let subtitle = document.createElement("div");
//   subtitle.className = "presentation-subtitle";
//   subtitle.textContent = "<<ЛЕРОМ>>";

//   let playButton = document.createElement("button");
//   playButton.className = "presentation-play-button";

//   let playIcon = document.createElement("img");
//   playIcon.src = "/img/Play.png";
//   playIcon.style.width = "55px";

//   let aboutButton = document.createElement("button");
//   aboutButton.className = "presentation-about-button";
//   aboutButton.textContent = "Читать о компании";

//   container.append(title);
//   container.append(subtitle);
//   container.append(playButton);
//   playButton.append(playIcon);
//   container.append(aboutButton);

//   root.append(container);
// };

// abdulloFunction();

const abdulloFunction2 = () => {
  let root = document.getElementById("root");

  //главный контейнер
  let container = document.createElement("container");
  container.className = "main-container";

  //ПЕРВЫЙ БЛОК
  //HEADER 1
  let div1 = document.createElement("div");
  div1.className = "div";
  let header = document.createElement("div");
  header.className = "header";
  header.textContent = "ИНФОРМАЦИЯ";

  //ВЕРХНИЙ КОНТЕНТ ПЕРВОГО БЛОКА

  let minidivup1 = document.createElement("div");
  minidivup1.className = "minidiv-up";
  let blokupimg1 = document.createElement("div");
  blokupimg1.className = "blokupimg1";
  let imgleft = document.createElement("img");
  imgleft.src = "/img/Стрелка влево.png";
  imgleft.style.width = "28px";
  imgleft.style.height = "28px";
  imgleft.className = "img-left";
  let blokuptext1 = document.createElement("div");
  blokuptext1.className = "bloktext";
  blokuptext1.textContent = "ДОСТАВКА ПО ВСЕЙ РОССИИ";
  let text = document.createElement("p");
  text.className = "text";
  text.textContent = "Мини текст описания новости и ее актуальности";
  let buttonLeft1 = document.createElement("button");
  buttonLeft1.className = "button-left";
  let img3 = document.createElement("img");
  img3.src = "img/Left.png";
  img3.className = "img-left2";

  //НИЖНИЙ КОНТЕНТ ПЕРВОГО БЛОКА

  let minidivdown1 = document.createElement("div");
  minidivdown1.className = "minidiv-down";
  let blokDownText1 = document.createElement("div");
  blokDownText1.className = "bloktext";
  let blackText = document.createElement("div");
  blackText.className = "black-text";
  blackText.textContent = "СБОРКА";
  let redText = document.createElement("div");
  redText.className = "red-text";
  redText.textContent = "БЕСПЛАТНАЯ";
  let text2 = document.createElement("p");
  text2.className = "text";
  text2.textContent = "Мини текст описания новости и ее актуальности";
  let blokDownImg1 = document.createElement("div");
  blokDownImg1.className = "blokdownimg1";
  let imgRight1 = document.createElement("img");
  imgRight1.src = "/img/Стрелка вправо.png";
  imgRight1.style.width = "28px";
  imgRight1.style.height = "28px";
  imgRight1.className = "img-right";
  let buttonRight1 = document.createElement("button");
  buttonRight1.className = "button-right";
  let img6 = document.createElement("img");
  img6.src = "img/Right.png";
  img6.className = "img-right2";

  //HEADER 2

  let div2 = document.createElement("div");
  div2.className = "div";
  let header2 = document.createElement("div");
  header2.className = "header";
  header2.textContent = "ИНТЕРЕСНОЕ";

  //ВТОРОЙ БЛОК

  //ВЕРХНИЙ КОНТЕНТ ВТОРОГО БЛОКА

  let minidivup2 = document.createElement("div");
  minidivup2.className = "minidiv-up";
  let blokupimg2 = document.createElement("div");
  blokupimg2.className = "blokupimg2";
  let imgleft2 = document.createElement("img");
  imgleft2.src = "/img/Стрелка влево.png";
  imgleft2.style.width = "28px";
  imgleft2.style.height = "28px";
  imgleft2.className = "img-left";
  let blokuptext2 = document.createElement("div");
  blokuptext2.className = "bloktext";
  blokuptext2.textContent = "КАК ВЫБРАТЬ МАТРАС";
  let text3 = document.createElement("p");
  text3.className = "text";
  text3.textContent = "Мини текст описания новости и ее актуальности";
  let buttonLeft2 = document.createElement("button");
  buttonLeft2.className = "button-left";
  let img4 = document.createElement("img");
  img4.src = "img/Left.png";
  img4.className = "img-left2";

  //НИЖНИЙ КОНТЕНТ ВТОРОГО БЛОКА

  let minidivdown2 = document.createElement("div");
  minidivdown2.className = "minidiv-down";
  let blokDownText2 = document.createElement("div");
  blokDownText2.className = "bloktext";
  blokDownText2.textContent = "КАКОЙ ШКАФ ВЫБРАТЬ В 2022 ГОДУ";
  let text4 = document.createElement("p");
  text4.className = "text";
  text4.textContent = "Мини текст описания новости и ее актуальности";
  let blokDownImg2 = document.createElement("div");
  blokDownImg2.className = "blokdownimg2";
  let imgRight2 = document.createElement("img");
  imgRight2.src = "/img/Стрелка вправо.png";
  imgRight2.style.width = "28px";
  imgRight2.style.height = "28px";
  imgRight2.className = "img-right";
  let buttonRight2 = document.createElement("button");
  buttonRight2.className = "button-right";
  let img5 = document.createElement("img");
  img5.src = "img/Right.png";
  img5.className = "img-right2";

  //FOOTER
  let footer = document.createElement("footer");
  footer.className = "footer";
  let foot1 = document.createElement("div");
  foot1.className = "foot1";
  foot1.textContent = "ЛЕРОМ";
  let foot2 = document.createElement("div");
  foot2.className = "foot2";
  foot2.textContent = "ПОКАЗАТЬ ЕЩЕ НОВОСТИ";
  let img = document.createElement("img");
  img.src = "img/Down.png";
  img.className = "img1";
  let foot3 = document.createElement("div");
  foot3.className = "foot3";
  foot3.textContent = "ОТКРЫТЬ РАЗДЕЛ НОВОСТИ";
  let img2 = document.createElement("img");
  img2.className = "img2";
  img2.src = "img/Down Blue.png";
  let foot4 = document.createElement("div");
  foot4.className = "foot4";
  foot4.textContent = "ЛЕРОМ";

  div1.append(header);
  div2.append(header2);

  //ПЕРВЫЙ БЛОК

  blokupimg1.append(imgleft);
  blokuptext1.append(text);
  buttonLeft1.append(img3);
  blokuptext1.append(buttonLeft1);

  minidivup1.append(blokupimg1);
  minidivup1.append(blokuptext1);

  blokDownText1.append(redText);
  blokDownText1.append(blackText);
  blokDownText1.append(text2);
  blokDownText1.append(buttonRight1);
  buttonRight1.append(img5);
  blokDownImg1.append(imgRight1);

  minidivdown1.append(blokDownText1);
  minidivdown1.append(blokDownImg1);

  //ВТОРОЙ БЛОК

  blokupimg2.append(imgleft2);
  blokuptext2.append(text3);
  buttonLeft2.append(img4);
  blokuptext2.append(buttonLeft2);

  minidivup2.append(blokupimg2);
  minidivup2.append(blokuptext2);

  blokDownText2.append(text4);
  blokDownText2.append(buttonRight2);
  buttonRight2.append(img6);
  blokDownImg2.append(imgRight2);

  minidivdown2.append(blokDownText2);
  minidivdown2.append(blokDownImg2);
  //

  div1.append(minidivup1, minidivdown1);
  div2.append(minidivup2, minidivdown2);

  //FOOTER
  footer.append(foot1);
  footer.append(foot2);
  foot2.append(img);
  footer.append(foot3);
  foot3.append(img2);
  footer.append(foot4);

  container.append(div1, div2);
  container.append(footer);
  root.append(container);
};
abdulloFunction2();
