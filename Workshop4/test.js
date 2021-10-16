import { operate, add, remove, bill } from "./shop.js";
const stock = [
    { id: 1, name: "SSD", price: 3900 },
    { id: 2, name: "Monitor", price: 5000 },
    { id: 3, name: "Mouse", price: 2500 },
    { id: 4, name: "Key Board", price: 3500 },
    { id: 5, name: "CPU", price: 7800 },
];
let cart = [];
operate(add, 4, 2, stock, cart);
operate(add, 2, 1, stock, cart);
operate(remove, 2, cart);
let pay = bill(cart);
pay(13000);