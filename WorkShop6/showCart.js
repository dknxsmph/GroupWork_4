import { cart } from "./cart.js";
import { product } from "./Product.js";
const table_body = document.querySelector("#show-body");
document.querySelector("#cart").addEventListener("click", showCart);
const total_price = document.querySelector("#total");

function showCart() {
  table_body.innerHTML = "";
  if (cart.items == null || cart.items.length == 0) {
    table_body.innerHTML =
      "<p style='color:red;text-align:center'>Not have product</p>";
    total_price.innerHTML = "";
  } else {
    total_price.innerHTML = "Total : " + cart.total();
    cart.items.forEach((c, index) => {
      const prod_show = product.find((p) => p.productId == c.productId);
      const trow = document.createElement("tr");
      trow.setAttribute("class", "align-middle");
      const row1 = document.createElement("td"); //NO.
      row1.innerText = index + 1;
      const row2 = document.createElement("td"); //Details
      const div = document.createElement("div");
      div.setAttribute("class", "d-flex");
      const img = document.createElement("img");
      img.setAttribute("src", prod_show.img);
      img.setAttribute("height", "150px");
      const p = document.createElement("p");
      p.setAttribute("style", "text-align:left");
      p.setAttribute("class", "mt-5");
      p.innerHTML = `<b> Name : ${prod_show.productName} </b> <br> ${prod_show.productDesc} `;
      const row3 = document.createElement("td"); //Quantity
      const row4 = document.createElement("td"); //Price
      const input = document.createElement("input");
      input.setAttribute("class", "form-control");
      input.setAttribute("style", "width:60%");
      input.setAttribute("type", "number");
      input.setAttribute("min", "1");
      input.setAttribute("max", prod_show.stocks);
      input.value = c.amount;
      input.addEventListener("input", (e) =>
        cart.update(prod_show.productId, e.target.value)
      );
      row4.innerHTML = prod_show.price;

      //add
      trow.appendChild(row1);
      row2.appendChild(div);
      div.appendChild(img);
      div.appendChild(p);
      trow.appendChild(row2);
      row3.appendChild(input);
      trow.appendChild(row3);
      trow.appendChild(row4);
      table_body.appendChild(trow);
    });
  }
}
document.querySelector("#clear-cart").addEventListener("click", () => {
  cart.clear();
  showCart();
});
