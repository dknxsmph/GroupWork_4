import { product } from "./Product.js";
let cart_storage = JSON.parse(localStorage.getItem("cart"));
let cart = cart_storage != null ? cart_storage : [];
const amount = document.querySelector("#item-count");
amount.innerHTML = countCart();
let show = document.querySelector("#total");

function addToCart(id) {
    let test = document.querySelector("#" + id);
    console.log(test.parentElement);
    let select = product.find((p) => p.productId == id); //แก้ เพราะหา 2 รอบ
    alert(`${select.productName} has been added to your shopping cart`);
    let item = {
        productId: select.productId,
        price: select.price,
        amount: 1,
    };
    // item.total = item.amount * item.price;
    // calPrice(item);
    let check = cart.find((c) => c.productId == id);
    if (check) {
        check.amount++;
        // check.total = check.amount * check.price;
        // calPrice(check);
    } else {
        cart.push(item);
    }
    amount.innerHTML = countCart();
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.stringify(cart));
}

function total() {
    return cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);
}
// function calPrice(product) {
//   product.total = product.amount * product.price;
// }
function update(id, item_amount) {
    item_amount = parseInt(item_amount);
    let item = cart.find((c) => c.productId == id);
    item.amount = item_amount;
    // calPrice(item);
    show.innerHTML = "Total : " + total();
    localStorage.setItem("cart", JSON.stringify(cart));
    amount.innerHTML = countCart();
}
// function remove(id) {
//   let item_remove = cart.find((c) => c.productId == id);
//   cart = cart.filter((c) => c.productId != id);
//   count -= item_remove.amount;
//   amount.innerHTML = count;
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
function clearCart() {
    cart = [];
    amount.innerHTML = countCart();
    localStorage.setItem("cart", JSON.stringify([]));
}

function countCart() {
    return cart.reduce((acc, cur) => acc + cur.amount, 0);
}

export { addToCart, cart, total, update, clearCart };