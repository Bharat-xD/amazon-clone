const products = [
  { image: '/images/066464a5-760b-4afa-9dc0-11e2da5e42e3.jpeg',
  name: '7 Shirt Combo - for men',
  rating: {
    stars: 5,
    count: 65
  },
  priceCents: 4234 },
  
  { image: '/images/9f5185b1-b76e-4b7a-b475-30e570c25855.jpeg',
    name: 'Grey Unisexual Hoodie (1977 edition)',
    rating: {
      stars: 45,
      count: 861
    },
    priceCents: 1270 },

  { image: '/images/Apple AirPods (2nd Generation) Ear Buds, with Lightning Charging Case Included, 24 Hours Battery.jpeg',
    name: 'Apple AirPods',
    rating: {
      stars: 4,
      count: 71
    },
    priceCents: 6499 },
  
  { image: '/images/b6a0d6a9-3fe3-478d-a28a-56f396a0580e.jpeg',
    name: 'The Ordinary',
    rating: {
       stars: 5,
       count: 211
     },
    priceCents: 3200 },
    
   { image: '/images/Download Blank T shirt photo for mockup design for free.jpeg',
     name: 'Yellow T-Shirt (Unisexual)',
     rating: {
      stars: 45,
      count: 77
     },
     priceCents: 1299 },
    
    { image: '/images/Sony headphones 📍.jpeg',
      name: 'Sony Headphones',
      rating: {
        stars: 4,
        count: 67
      },
      priceCents: 4099 },
        
    { image: '/images/Camilo G.jpeg',
     name: 'Gentlemen Givachy Perfume',
     rating: {
       stars: 4,
       count: 344
       },
       priceCents: 2333 },
        
     { image: '/images/paint canisters.jpeg',
      name: 'painting Color Set',
      rating: {
       stars: 5,
       count: 56
      },
      priceCents: 899 }
];


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
        <button class="atc-btn">Add to Cart</button>
      </div>`;
});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;