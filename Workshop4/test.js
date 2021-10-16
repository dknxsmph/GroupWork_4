import { operate, add, remove, bill } from "./shop.js"; //import เพื่อเอา func มาใช้งาน
const stock = [
    { id: 1, name: "SSD", price: 3900 },
    { id: 2, name: "Monitor", price: 5000 },
    { id: 3, name: "Mouse", price: 2500 },
    { id: 4, name: "Key Board", price: 3500 },
    { id: 5, name: "CPU", price: 7800 },
]; //สร้าง Array เก็บ id ชื่อ และราคา ของสินค้า
let cart = []; //ทำตะกร้าสินค้าเป็น Array
operate(add, 4, 2, stock, cart); //เรียก operate() โดยส่ง param เป็น add() index = 4 amount = 2 stock(ที่ประกาศอยู่ด้านบน) cart(ที่ประกาศอยู่ด้านบน) 
operate(add, 2, 1, stock, cart); //เรียก operate() โดยส่ง param เป็น add() index = 2
//amount = 1 stock(ที่ ประกาศอยู่ ด้ านบน) cart(ที่ ประกาศอยู่ ด้ านบน)
operate(remove, 2, cart); //เรียก operate() โดยส่ง param เป็น func remove , index ที่ 2 , cart(ที่ประกาศอยู่ด้านบน)
let pay = bill(cart); // เรียก bill() แล้วนำไปเก็บในตัวแปร (ใน pay จะมี total และ change() ที่รอเรียกอยู่)
pay(9999); // เงินที่จ่ายไป