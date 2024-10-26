import { contract } from "./date.js";

export const createContracting = () => {
  const contentContracting = document.createElement("div");
  const containerContracting = document.createElement("div");
  const hedaerContent = document.createElement("div");
  const hrAll = document.createElement("div");
  const header = document.createElement("h2");

  header.innerHTML = "Контрактное производство";

  header.classList.add("header");
  hrAll.classList.add("hrAll");
  hedaerContent.classList.add("hedaerContentR");
  contentContracting.classList.add("contentContracting");
  containerContracting.classList.add("containerContracting");

  contract.forEach((elem, index) => {
    const contentContract = document.createElement("div");
    const textContentContract = document.createElement("div");
    const titleContract = document.createElement("h3");
    const descContract = document.createElement("p");
    const imgContract = document.createElement("img");

    titleContract.textContent = elem.title;
    descContract.textContent = elem.description;
    imgContract.src = elem.img;

    contentContract.classList.add("contentContract");
    textContentContract.classList.add("textContentContract");

    if (index === 0) {
      contentContract.classList.add("active");
    }

    textContentContract.append(titleContract, descContract);
    contentContract.append(textContentContract, imgContract);
    containerContracting.append(contentContract);
  });

  hedaerContent.append(hrAll, header);
  contentContracting.append(hedaerContent, containerContracting);
  return contentContracting;
};
