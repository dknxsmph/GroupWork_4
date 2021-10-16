import { operate, add, remove, bill } from "./shop.js";
const stock1 = [
    { id: 1, name: "SSD", price: 3900 },
    { id: 2, name: "Monitor", price: 5000 },
    { id: 3, name: "Mouse", price: 2500 },
    { id: 4, name: "Key Board", price: 3500 },
    { id: 5, name: "CPU", price: 7800 },
];
let cart = [];
operate(add, 4, 2, stock1, cart);
operate(add, 2, 1, stock1, cart);
operate(remove, 2, cart);
let pay = bill(cart);
pay(9999);