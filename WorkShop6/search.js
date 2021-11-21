import { product } from "./Product.js";
let btn_toggle = false;
function toggleSearch() {
  const show_search = document.querySelector("#input");
  btn_toggle = !btn_toggle;
  if (btn_toggle) {
    show_search.setAttribute("class", "visible");
    show_search.style = "width:100%";
    text_search.value = "";
  } else {
    show_search.setAttribute("class", "invisible");
    show_search.style = "width:60%";
    refreshPage();
  }
  console.log(btn_toggle);
}
const search = document.querySelector("#search");
search.addEventListener("click", toggleSearch);
const text_search = document.querySelector("#input-text");
const btn_search = document.querySelector("#btn-search");
btn_search.addEventListener("click", () => {
  if (text_search.value.length != 0) {
    refreshPage();
    let proListsearch = product.filter(notMatch);
    filterProduct(proListsearch);
  }
});

function notMatch(p) {
  let text = text_search.value.toLowerCase();
  return (
    !p.productName.toLowerCase().includes(text) &&
    !p.productDesc.toLowerCase().includes(text)
  );
}

function filterProduct(product_filter) {
  console.log(product_filter);
  product_filter.forEach((p) => {
    document.querySelector(
      "#" + p.productId
    ).parentElement.parentElement.parentElement.style = "display:none";
  });
}

function refreshPage() {
  product.forEach((p) => {
    document.querySelector(
      "#" + p.productId
    ).parentElement.parentElement.parentElement.style = "";
  });
}
