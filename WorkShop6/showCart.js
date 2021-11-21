import { cart, total, update, clearCart } from "./cart.js";
import { product } from "./Product.js";
const table_body = document.querySelector("#show-body");
document.querySelector("#cart").addEventListener("click", showCart);
const total_price = document.querySelector("#total");

function showCart() {
  table_body.innerHTML = "";
  if (cart == null || cart.length == 0) {
    table_body.innerHTML =
      "<p style='color:red;text-align:center'>Not have product</p>";
    total_price.innerHTML = "";
  } else {
    total_price.innerHTML = "Total : " + total();
    cart.forEach((c, index) => {
      let pro_show = product.find((p) => p.productId == c.productId);
      let trow = document.createElement("tr");
      trow.setAttribute("class", "align-middle");
      let row1 = document.createElement("td"); //NO.
      row1.innerText = index + 1;
      let row2 = document.createElement("td"); //Details
      let div = document.createElement("div");
      div.setAttribute("class", "d-flex");
      let img = document.createElement("img");
      img.setAttribute("src", pro_show.img);
      img.setAttribute("height", "150px");
      let p = document.createElement("p");
      p.setAttribute("style", "text-align:left");
      p.setAttribute("class", "mt-5");
      p.innerHTML = `<b> Name : ${pro_show.productName} </b> <br> ${pro_show.productDesc} `;
      let row3 = document.createElement("td"); //Quantity
      let row4 = document.createElement("td"); //Price
      let input = document.createElement("input");
      input.setAttribute("class", "form-control");
      input.setAttribute("style", "width:60%");
      input.setAttribute("type", "number");
      input.setAttribute("min", "1");
      input.setAttribute("max", pro_show.stocks);
      input.value = c.amount;
      input.addEventListener("input", (e) =>
        update(pro_show.productId, e.target.value)
      );
      row4.innerText = c.price;
      // let row5 = document.createElement("td");
      // let icon_del = document.createElement("i");
      // icon_del.setAttribute("class", "bi bi-trash-fill text-danger");
      // icon_del.setAttribute(
      //   "style",
      //   "cursor:pointer;font-size:1.5rem;text-align:right"
      // );
      // icon_del.addEventListener("click", () => {
      //   remove(pro_show.productId);
      //   showCart();
      // });

      //add
      trow.appendChild(row1);
      row2.appendChild(div);
      div.appendChild(img);
      div.appendChild(p);
      trow.appendChild(row2);
      row3.appendChild(input);
      trow.appendChild(row3);
      trow.appendChild(row4);
      // row5.appendChild(icon_del);
      // trow.appendChild(row5);
      table_body.appendChild(trow);
    });
  }
}
document.querySelector("#clear-cart").addEventListener("click", () => {
  clearCart();
  showCart();
});
export { showCart };
