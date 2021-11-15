import { product } from "./Product.js";
let cart_storage = JSON.parse(localStorage.getItem("cart"));
let cart = cart_storage != null ? cart_storage : [];
let count =
    cart_storage != null ? cart_storage.reduce((x, y) => x + y.amount, 0) : 0;
const amount = document.querySelector("#item-count");
amount.innerHTML = count;
let show = document.querySelector("#total");

function addToCart(id) {
    count++;
    let select = product.find((p) => p.productId === id);
    alert(`${select.productName} has been added to your shopping cart`);
    let item = {
        productId: select.productId,
        price: select.price,
        amount: 1,
    };
    // item.total = item.amount * item.price;
    calPrice(item);
    let check = cart.find((c) => c.productId === id);
    if (check) {
        check.amount++;
        // check.total = check.amount * check.price;
        calPrice(check);
    } else {
        cart.push(item);
    }
    amount.innerHTML = count;
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.stringify(cart));
}

function total() {
    return cart.reduce((x, y) => x + y.total, 0);
}

function calPrice(product) {
    product.total = product.amount * product.price;
}

function update(id, item_amount) {
    item_amount = parseInt(item_amount);
    let item = cart.find((c) => c.productId == id);
    item.amount = item_amount;
    calPrice(item);
    show.innerHTML = "Total : " + total();
    localStorage.setItem("cart", JSON.stringify(cart));
    count = cart.reduce((x, y) => x + y.amount, 0);
    amount.innerHTML = count;
}

function remove(id) {
    let item_remove = cart.find((c) => c.productId == id);
    cart = cart.filter((c) => c.productId != id);
    count -= item_remove.amount;
    amount.innerHTML = count;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
    cart = [];
    count = 0;
    amount.innerHTML = count;
    localStorage.setItem("cart", JSON.stringify([]));
}

export { addToCart, cart, total, update, remove, clearCart };