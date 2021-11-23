import { product } from "./Product.js";
const cart_storage = JSON.parse(localStorage.getItem("cart"));
const amount = document.querySelector("#item-count");
const show = document.querySelector("#total");

export const cart = {
  items: cart_storage != null ? cart_storage : [],
  addToCart: function (id) {
    alert(`${id} has been added to your shopping cart`);
    const check = this.items.find((c) => c.productId == id);
    if (check) {
      check.amount++;
    } else {
      this.items.push({
        productId: id,
        amount: 1,
      });
    }
    amount.innerHTML = this.countCart();
    console.log(this.items);
    localStorage.setItem("cart", JSON.stringify(this.items));
  },
  total: function () {
    return this.items.reduce(
      (acc, cur) =>
        acc +
        cur.amount * product.find((p) => p.productId == cur.productId).price,
      0
    );
  },
  update: function (id, item_amount) {
    item_amount = parseInt(item_amount);
    this.items.find((c) => c.productId == id).amount = item_amount;
    show.innerHTML = "Total : " + this.total();
    localStorage.setItem("cart", JSON.stringify(this.items));
    amount.innerHTML = this.countCart();
  },
  clear() {
    this.items = [];
    amount.innerHTML = this.countCart();
    localStorage.setItem("cart", JSON.stringify([]));
  },
  countCart: function () {
    return this.items.reduce((acc, cur) => acc + cur.amount, 0);
  },
};

amount.innerHTML = cart.countCart();
