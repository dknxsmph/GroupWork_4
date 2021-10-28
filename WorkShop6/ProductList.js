import { product } from "./Product.js";

function addProduct(name, desc, price, img, stock) {
  let productList = document.querySelector("#product");
  let div_col = document.createElement("div"); // create div_col parent
  div_col.setAttribute("class", "col pb-2");
  let card = document.createElement("div"); //create card child div_col
  card.setAttribute("class", "card shadow");
  card.setAttribute("style", "width: 100%");
  let card_body = document.createElement("div"); // child card
  card_body.setAttribute("class", "card-body");
  let h_title = document.createElement("h5"); // child card
  h_title.setAttribute("class", "card-title m-2");
  h_title.innerHTML = name;
  let p_text = document.createElement("p"); // child card
  p_text.setAttribute("class", "card-text m-1");
  p_text.innerHTML = desc;
  let p_price = document.createElement("p"); // child card
  p_price.setAttribute("class", "price-text m-1");
  p_price.innerHTML = "Price: " + price;
  let p_stock = document.createElement("p"); // child card
  p_stock.setAttribute("class", "stock-text m-1");
  p_stock.innerHTML = "Stock: " + stock;
  let div_img = document.createElement("img"); // child card
  div_img.setAttribute("src", img);
  div_img.setAttribute("height", "300px");
  let b_btn = document.createElement("a"); // child card
  b_btn.setAttribute("href", "#");
  b_btn.setAttribute("class", "btn btn-secondary my-3");
  b_btn.setAttribute("style", "width: 100%");
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
}

console.log(product);
product.forEach((product) =>
  addProduct(
    product.productName,
    product.productDesc,
    product.price,
    product.img,
    product.stocks
  )
);
