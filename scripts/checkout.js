import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadCart } from "../data/cart.js";


Promise.all([
    new Promise((reslove) => {
        loadProducts(() => {
         reslove('value1');
        });
     }),
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

