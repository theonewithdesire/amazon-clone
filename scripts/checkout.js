import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';


async function loadPage(){
    await loadProductsFetch();
    await new Promise((reslove) => {
        loadCart(() => {
         reslove();
        });
    });
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();






/*
Promise.all([
   loadProductsFetch(),
    new Promise((reslove) => {
        loadCart(() => {
         reslove();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/







/*
new Promise((reslove) => {
   loadProducts(() => {
    reslove('value1');
   });

}).then((value) => {
    console.log(value);
    return new Promise((reslove) => {
        loadCart(() => {
         reslove();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/










/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
    
})
*/

