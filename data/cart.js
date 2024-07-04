export const cart = [];


export function addToCart(productId){
    let matchingItem;
          cart.forEach((cartItem) => {
              if(productId === cartItem.productId){
                  matchingItem = cartItem;
              }
          })
          if(matchingItem){
              matchingItem.qauntity += 1;
          }else{
              cart.push({
                  productId: productId, 
                  qauntity : 1
              });
          }
  }
  