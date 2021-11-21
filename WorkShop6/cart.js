import { product } from "./Product.js";
let cart_storage = JSON.parse(localStorage.getItem("cart"));
let cart = cart_storage != null ? cart_storage : [];
const amount = document.querySelector("#item-count");
amount.innerHTML = countCart();
const show = document.querySelector("#total");

function addToCart(id) {
    const select = product.find((p) => p.productId == id);
    alert(`${select.productName} has been added to your shopping cart`);
    const check = cart.find((c) => c.productId == id);
    if (check) {
        check.amount++;
    } else {
        cart.push({
            productId: select.productId,
            amount: 1,
        });
    }
    amount.innerHTML = countCart();
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function total() {
    return cart.reduce((acc, cur) => acc + cur.amount * product.find(p => p.productId == cur.productId).price, 0);
}

function update(id, item_amount) {
    item_amount = parseInt(item_amount);
    const item = cart.find((c) => c.productId == id);
    item.amount = item_amount;
    show.innerHTML = "Total : " + total();
    localStorage.setItem("cart", JSON.stringify(cart));
    amount.innerHTML = countCart();
}

function clearCart() {
    cart = [];
    amount.innerHTML = countCart();
    localStorage.setItem("cart", JSON.stringify([]));
}

function countCart() {
    return cart.reduce((acc, cur) => acc + cur.amount, 0);
}

export { addToCart, cart, total, update, clearCart };