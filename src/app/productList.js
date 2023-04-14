import { Products } from "./products.js";
import { CartList } from "./cartList.js";

const productList = document.querySelector("#products");

const cartList = new CartList();

const cart = [];

class ProductList {
  createProductList(products) {
    for (const item of products) {
      const tagList = this.createProductTagList(item);

      const productListHTML = `
        <li class="item">
          <div class="description">
            <img class="game-img" src="./src/media/img/${item.img}">
            <div class="tag-div">
              ${tagList}
            </div>
            <strong class="game-title">${item.name}</strong>
            <p class="game-description">${item.description}</p>
            <strong class="game-price">R$ ${item.price.toFixed(2)}</strong>
            <button class="add-to-cart" data-id=${item.id}>Comprar</button>
          </div>
        </li>
        `;
      productList.insertAdjacentHTML("beforeend", productListHTML);
    }
  }

  createProductTagList(product) {
    let tagListHTML = "";

    for (const tag of product.tags) {
      tagListHTML += `
        <small class="tag">
          ${tag}
        </small>
      `;
    }

    return tagListHTML;
  }

  addEventOnProductButton() {
    const buttons = [...document.querySelectorAll(".add-to-cart")];

    for (const button of buttons) {
      const buttonId = parseInt(button.dataset.id);

      const inCart = cart.find((item) => item.id === buttonId);

      if (inCart) {
        button.innerText = "Carrinho";
        button.disabled = true;
      }

      button.addEventListener("click", async (event) => {
        event.target.innerText = "Carrinho";
        event.target.disabled = true;

        const productList = await new Products().getProducts();

        const targetProduct = productList.find(
          (item) => item.id === parseInt(event.target.dataset.id)
        );

        cart.push(targetProduct);

        cartList.addProductToCart(targetProduct);

        cartList.changeCartInfoValues(cart);

        cartList.putRemoveEventOnCartProducts(cart);
      });
    }
  }
}

export { Products, ProductList };
