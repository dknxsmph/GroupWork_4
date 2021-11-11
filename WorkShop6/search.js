import { addProduct } from "./ProductList.js";
import { product } from "./Product.js";
const productList = document.querySelector("#product");
let click = false;
function toggleSearch() {
  const show_search = document.querySelector("#input");
  click = !click;
  if (click) {
    show_search.setAttribute("class", "visible");
    show_search.style = "width:100%";
    text_search.value = "";
  } else {
    show_search.setAttribute("class", "invisible");
    show_search.style = "width:60%";
  }
}

const search = document.querySelector("#search");
search.addEventListener("click", toggleSearch);
const text_search = document.querySelector("#input-text");
const btn_search = document.querySelector("#btn-search");
btn_search.addEventListener("click", () => {
  if (text_search.value.length != 0) {
    let proListsearch = product.filter(
      (p) =>
        p.productName.toLowerCase().search(text_search.value.toLowerCase()) !=
          -1 ||
        p.productDesc.toLowerCase().search(text_search.value.toLowerCase()) !=
          -1
    );
    productList.innerHTML = "";
    addProduct(proListsearch);
  }
});
