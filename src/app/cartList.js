const shoppingList = document.querySelector("#shopping-list");

class CartList {
  addProductToCart(product) {
    const cartListHTML = `
      <li class="cart-item">
        <img class="cart-img" src="../src/media/img/${product.img}">
        <div class="cart-item-desc">
          <div>
            <strong class="name-strong">${product.name}</strong>
            <span>R$ ${product.price.toFixed(2)}</span>
          </div>
          <button class="remove-item" data-id=${product.id}>Remover</button>
        </div>
      </li>
    `;

    shoppingList.insertAdjacentHTML("beforeend", cartListHTML);
  }

  putRemoveEventOnCartProducts(list) {
    const buttons = [...document.querySelectorAll(".remove-item")];

    for (let button of buttons) {
      const buttonId = parseInt(button.dataset.id);

      button.addEventListener("click", (event) => {
        let removeElement = event.target;
        removeElement = removeElement.parentElement.parentElement;

        const product = list.find((item) => item.id === buttonId);
        const productIndex = list.findIndex((item) => item.id === buttonId);

        if (product) {
          list.splice(productIndex, 1);

          shoppingList.removeChild(removeElement);

          this.changeCartInfoValues(list);

          this.updateProductAddButton(list);
        }
      });
    }
  }

  updateProductAddButton(list) {
    const buttons = [...document.querySelectorAll(".add-to-cart")];

    for (const button of buttons) {
      const buttonId = parseInt(button.dataset.id);

      const inCart = list.find((item) => item.id === buttonId);

      if (!inCart) {
        button.disabled = false;
        button.innerText = "Comprar";
      }
    }
  }

  changeCartInfoValues(list) {
    let totalValue = 0;

    list.map((item) => {
      totalValue += item.price;
    });

    const quantityElement = document.querySelector(".quantity.number");
    const totalValueElement = document.querySelector(".total.value");

    if (list.length > 0) {
      quantityElement.innerText = list.length;
      totalValueElement.innerText = `R$ ${totalValue.toFixed(2)}`;
    } else {
      quantityElement.innerText = 0;
      totalValueElement.innerText = "R$ 0.00";
    }
  }
}

export { CartList };
