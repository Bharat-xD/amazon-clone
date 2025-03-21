import {cart, addToCart} from "./cart.js";
import {products} from "./product-data.js";
// function for making the product card
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="product-card">
        <img class="p-img card-padding" src="${product.image}" alt="">
        <section class="text-area">
        <div class="p-name card-padding">${product.name}</div>
        <div class="rating-star card-padding"><img src="/images/rating-${product.rating.stars}.png" alt="">${product.rating.count}</div>
        <h2 class="p-price">$ ${(product.priceCents / 100).toFixed(2)}</h2>
          <div class="product-quantity-container card-padding">
          <select class="js-quantity-selector" data-testid="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </section>
        <button class="atc-btn js-atc-btn"
        data-product-name="${product.name}">Add to Cart</button>
      </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;





function updatedCartQty(){
  let cartQuantity = 0;

    cart.forEach((cartItem) =>{
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-atc-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    addToCart(productName);
    updatedCartQty();   
  });
});