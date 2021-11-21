let product = [
  { price: 200, amount: 2 },
  { price: 300, amount: 2 },
];
const total = (pre, cur) => pre + cur.amount * cur.price;
const result = product.reduce(total, 0);
console.log(result);
// let num = [1, 2, 3, 4];
// function sum(pre, cur) {
//   return pre + cur;
// }
// console.log(num.reduce(sum, 5));

// //count
// const count = product.reduce((pre, cur) => pre + cur.amount, 0);
// console.log(count);
// import { product } from "./Product.js";
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = num.filter(greaterThanFive);
// function greaterThanFive(num) {
//   return num > 5;
// }
// console.log(result);

// function notMatch(p) {
//   let text = "lin";
//   return (
//     !p.productName.toLowerCase().includes(text) &&
//     !p.productDesc.toLowerCase().includes(text)
//   );
// }
// let product_filter = product.filter(notMatch);
// console.log(product_filter);
