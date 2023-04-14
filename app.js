import { Products, ProductList } from "./src/app/productList.js";
import { Themes } from "./src/app/themes.js";

const products = new Products();
const productListInterface = new ProductList();

const themes = new Themes();

themes.switchThemes();

products.getProducts().then((products) => {
  productListInterface.createProductList(products);
  productListInterface.addEventOnProductButton();
});
