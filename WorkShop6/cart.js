import { product } from "./Product.js";
let cart_storage = JSON.parse(localStorage.getItem("cart"));
let cart = cart_storage != null ? cart_storage : [];
let count = cart_storage != null ? cart_storage.length : 0;
const amount = document.querySelector("#item-count");
amount.innerHTML = count;
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
}
function total() {
  return cart.reduce((x, y) => x + y.total, 0);
}
function calPrice(product) {
  product.total = product.amount * product.price;
}
function update(id, amount) {
  let item = cart.find((c) => c.productId == id);
  item.amount = amount;
  calPrice(item);
  let show = document.querySelector("#total");
  show.innerHTML = "Total : " + total();
  localStorage.setItem("cart", JSON.stringify(cart));
}
function remove(id) {
  cart = cart.filter((c) => c.productId != id);
  count--;
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
