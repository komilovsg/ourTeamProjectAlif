import { tabs } from "./data.js";
import { products } from "./data.js";

export const getTadList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorOccurred = false;

      if (errorOccurred) {
        reject("Failed to fetch tabs");
      } else {
        resolve(tabs);
      }
    }, 1000);
  });
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorOccurred = false;

      if (errorOccurred) {
        reject("Failed to fetch products");
      } else {
        resolve(products);
      }
    }, 1000);
  });
};
