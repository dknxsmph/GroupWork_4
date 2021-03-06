import { product } from "./Product.js";
import { cart } from "./cart.js";
const productList = document.querySelector("#product");

function addProduct() {
  product.forEach((p) => {
    const div_col = document.createElement("div"); // create div_col parent
    div_col.setAttribute("class", "col-4 pb-2");
    const card = document.createElement("div"); // child div_col
    card.setAttribute("class", "card shadow");
    card.setAttribute("style", "width: 100%");

    const h_title = document.createElement("h5"); // child card_body
    h_title.setAttribute("class", "card-title m-2");
    h_title.innerHTML = p.productName;
    const p_text = document.createElement("p"); // child card_body
    p_text.setAttribute("class", "card-text m-1");
    p_text.innerHTML = p.productDesc;

    const card_body = document.createElement("div"); // child card
    card_body.setAttribute("class", "card-body");
    const div_img = document.createElement("img"); // child card_body
    div_img.setAttribute("src", p.img);
    div_img.setAttribute("height", "300px");

    const p_price = document.createElement("p"); // child card_body
    p_price.setAttribute("class", "m-1");
    p_price.innerHTML = "Price: " + p.price;
    const p_stock = document.createElement("p"); // child card_body
    p_stock.setAttribute("class", "m-1");
    p_stock.innerHTML = "Stock: " + p.stocks;

    const b_btn = document.createElement("a"); // child card_body
    b_btn.setAttribute("class", "btn btn-secondary my-3");
    b_btn.setAttribute("style", "width: 100%");
    b_btn.setAttribute("id", p.productId);
    b_btn.innerHTML = "Buy";

    productList.appendChild(div_col);
    div_col.appendChild(card);

    card_body.appendChild(h_title);
    card_body.appendChild(p_text);

    card.appendChild(card_body);
    card_body.appendChild(div_img);

    card_body.appendChild(p_price);
    card_body.appendChild(p_stock);

    card_body.appendChild(b_btn);

    b_btn.addEventListener("click", (e) => {
      cart.addToCart(e.target.id);
    });
  });
}

addProduct();
