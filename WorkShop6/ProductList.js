import { product } from "./Product.js";
const cart = [];
let productList = document.querySelector("#product");
let amount = document.querySelector("#item-count");
let count = 0;
let click = false;

function addProduct(product_list) {

    product_list.forEach((p) => {
        let div_col = document.createElement("div"); // create div_col parent
        div_col.setAttribute("class", "col-4 pb-2");
        let card = document.createElement("div"); // child div_col
        card.setAttribute("class", "card shadow");
        card.setAttribute("style", "width: 100%");

        let h_title = document.createElement("h5"); // child card_body
        h_title.setAttribute("class", "card-title m-2");
        h_title.innerHTML = p.productName;
        let p_text = document.createElement("p"); // child card_body
        p_text.setAttribute("class", "card-text m-1");
        p_text.innerHTML = p.productDesc;

        let card_body = document.createElement("div"); // child card
        card_body.setAttribute("class", "card-body");
        let div_img = document.createElement("img"); // child card_body
        div_img.setAttribute("src", p.img);
        div_img.setAttribute("height", "300px");

        let p_price = document.createElement("p"); // child card_body
        p_price.setAttribute("class", "m-1");
        p_price.innerHTML = "Price: " + p.price;
        let p_stock = document.createElement("p"); // child card_body
        p_stock.setAttribute("class", "m-1");
        p_stock.innerHTML = "Stock: " + p.stocks;

        let b_btn = document.createElement("a"); // child card_body
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

        b_btn.addEventListener("click", () => {
            alert(`${p.productName} has been added to your shopping cart`);
            let select = product.find((pd) => pd.productId === p.productId);
            let item = { productId: select.productId, price: select.price, amount: 1 };
            let check = cart.find((c) => c.productId === p.productId);
            count++;
            if (check) {
                check.amount++;
            } else {
                cart.push(item);
            }
            amount.innerHTML = count;
            console.log(cart);
        });

    });
}

addProduct(product);

function toggleSearch() {
    const show_search = document.querySelector("#input");
    click = !click;
    if (click) {
        show_search.setAttribute("class", "visible");
        text_search.value = "";
    } else {
        show_search.setAttribute("class", "invisible");
    }
}

const search = document.querySelector("#search");
search.addEventListener("click", toggleSearch);
const text_search = document.querySelector("#input-text");
const btn_search = document.querySelector("#btn-search");
btn_search.addEventListener("click", () => {
    if (text_search.value.length != 0) {
        let proListsearch = product.filter((p) => p.productName.toLowerCase().search(text_search.value.toLowerCase()) != -1 || p.productDesc.toLowerCase().search(text_search.value.toLowerCase()) != -1);
        productList.innerHTML = '';
        addProduct(proListsearch, 0);
    }
});