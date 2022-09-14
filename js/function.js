const products = document.querySelector('#products');

// Conteúdo da vitrine
let
  id,
  item, 
  description, 
  gameImg, 
  tagDiv, 
  tags, 
  gameTitle, 
  gameDescription, 
  gamePrice, 
  addToCart;

createItems(games);

// Conteúdo do carrinho
let
  cartItem,
  cartImg,
  cartItemDesc,
  cartName,
  cartPrice,
  cartRemoveItem;

let count = [];
function renderCard(arr) {

  let list = document.querySelector('#shoppingList');
  list.innerHTML = '';

  catchList()
  for (let i = 0; i < arr.length; i++) {

    cartItem       = document.createElement('li');
    cartImg        = document.createElement('img');
    cartItemDesc   = document.createElement('div');
    cartName       = document.createElement('strong');
    cartPrice      = document.createElement('span');
    cartRemoveItem = document.createElement('button');

    cartAddClasses();

    addId(arr[i].id);

    cartAddContent(arr, i);

    cartAppendItems();

  }
}

function createItems(arr) {

  for (let i = 0; i < arr.length; i++) {
    item            = document.createElement('li');
    description     = document.createElement('div');
    gameImg         = document.createElement('img');
    tagDiv          = document.createElement('div');
    gameTitle       = document.createElement('strong');
    gameDescription = document.createElement('p');
    gamePrice       = document.createElement('strong');
    addToCart       = document.createElement('button');

    addClasses();

    addContent(arr, i);

    createTags(arr, i);

    appendItems(arr);

    addToCart.addEventListener('click', function() {

      cartItem       = document.createElement('li');
      cartImg        = document.createElement('img');
      cartItemDesc   = document.createElement('div');
      cartName       = document.createElement('strong');
      cartPrice      = document.createElement('span');
      cartRemoveItem = document.createElement('button');

      count.push(arr[i]);

      cartAddClasses();

      addId(arr[i].id);

      cartAddContent(arr, i);

      cartAppendItems();

      renderCard(count);
    });
  }
}

function addClasses() {

  item.classList.add('item');
  description.classList.add('description');
  gameImg.classList.add('gameImg');
  tagDiv.classList.add('tagDiv');
  gameTitle.classList.add('gameTitle');
  gameDescription.classList.add('gameDescription');
  gamePrice.classList.add('gamePrice');
  addToCart.classList.add('addToCart');
  
}

function addContent(arr, index) {
  
  gameImg.src = `../img/${arr[index].img}`;
  gameTitle.innerText = arr[index].name;
  gameDescription.innerText = arr[index].description;
  gamePrice.innerText = `R$ ${(arr[index].price).toFixed(2)}`;
  addToCart.innerText = "Adicionar ao carrinho";
  
  id = arr[index].id;
  addToCart.id = id;

}

function createTags(arr, index) {

    let tags;
    for (let i = 0; i < arr[index].tags.length; i++) {
      tags = document.createElement('small');
      tags.classList.add('tag');
      tags.innerText = arr[index].tags[i];
      tagDiv.appendChild(tags);
    }

}

function appendItems() {

  products.appendChild(item);
  item.appendChild(description);
  description.appendChild(gameImg);
  description.appendChild(tagDiv);
  description.appendChild(gameTitle);
  description.appendChild(gameDescription);
  description.appendChild(gamePrice);
  description.appendChild(addToCart);

}

function cartAddClasses() {

  cartItem.classList.add('cartItem');
  cartImg.classList.add('cartImg');
  cartItemDesc.classList.add('cartItemDesc');
  cartName.classList.add('nameStrong');
  cartRemoveItem.classList.add('removeItem');

}

function cartAddContent(arr, index) {

  cartImg.src = `../img/${arr[index].img}`;
  cartName.innerText = arr[index].name;
  cartPrice.innerText = `R$ ${(arr[index].price).toFixed(2)}`;
  cartRemoveItem.innerText = "Remover";

}

function cartAppendItems() {

  const cart = document.querySelector('#shoppingList');
  cart.appendChild(cartItem);
  cartItem.appendChild(cartImg);
  cartItem.appendChild(cartItemDesc);
  cartItemDesc.appendChild(cartName);
  cartItemDesc.appendChild(cartPrice);
  cartItem.appendChild(cartRemoveItem);

}

function addId(idObj) {

  cartRemoveItem.id = idObj;

}

function catchList() {

  let shoppingList = document.querySelector('#shoppingList');

    shoppingList.addEventListener('click', function removeCart(e) {

      if (e.target.tagName == 'BUTTON') {

        let event = e.target.id;
    
        count = count.filter((value)=> {
    
          if (value.id != event) {
            return value;
          }
    
        });
        renderCard(count);
      }
    });

}