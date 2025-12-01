export const cart = [];

// add-to-cart button
export function addToCart(productName) {
  let sameItem;
    cart.forEach((cartItem) => {
      if(productName === cartItem.productName){
        sameItem = cartItem;
      }
    });

    if(sameItem){
      sameItem.quantity += 1;
    }
    else{
      cart.push({
        productName: productName,
        quantity: 1
      });
    }
};