import { scheme } from "./date.js";

export const createScheme = () => {
  const contentScheme = document.createElement("div");
  const hedaerContent = document.createElement("div");
  contentScheme.classList.add("contentScheme");

  const hrAll = document.createElement("div");
  const header = document.createElement("h2");
  const schemeItem = document.createElement("div");

  header.innerHTML = "Схема работы";

  header.classList.add("header");
  hrAll.classList.add("hrAll");
  hedaerContent.classList.add("hedaerContent");

  scheme.forEach((elem, index) => {
    const allContent = document.createElement("div");
    const titleContent = document.createElement("div");
    const idContent = document.createElement("h3");
    const hrContent = document.createElement("div");

    const contentText = document.createElement("div");
    const contentTitle = document.createElement("h3");
    const contentDesc = document.createElement("p");

    contentTitle.textContent = elem.title;
    contentDesc.textContent = elem.desc;
    idContent.textContent = elem.id;

    titleContent.classList.add("titleContent");
    hrContent.classList.add("hrContent");
    contentText.classList.add("contentText");
    schemeItem.classList.add("schemeItem");
    allContent.classList.add("allContent");

    contentText.append(contentTitle, contentDesc);
    titleContent.append(idContent, hrContent);
    allContent.append(titleContent, contentText);

    if (index === 0) {
      const containerForFirstIndex = document.createElement("div");
      const line = document.createElement("div");
      const lineTitle = document.createElement("lineTitle");

      lineTitle.textContent = "Оставить заявку";
      containerForFirstIndex.classList.add("containerForFirstIndex");

      containerForFirstIndex.append(line, lineTitle);
      contentText.append(containerForFirstIndex);
    }

    schemeItem.append(allContent);
  });

  hedaerContent.append(hrAll, header);
  contentScheme.append(hedaerContent, schemeItem);

  return contentScheme;
};
