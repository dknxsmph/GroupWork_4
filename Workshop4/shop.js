function add(index, amount, stock, cart) { // เพิ่มสินค้าใน cart มีการรับ param มา 4 ตัว คือ index(ตำแหน่งของสินค้า) , cart(ตะกร้าสินค้าที่ต่องการจะเพิ่ม) , amount(จำนวนสินค้าที่ต้องการจะซื้อ) , stock(คลังสินค้า) และ return cart 

    cart.push(stock[index - 1]); // เพิ่มสินค้าลงในตะกร้า โดยใช้ push() 
    cart[cart.length - 1]["amount"] = amount; //เพิ่ม property amount เพื่อบอกจำนวนสินค้าที่เลือก
    return cart;
}

function remove(index, cart) { // ลบสินค้าจาก cart มีการรับ param มา 2 ตัว คือ index(ตำแหน่งของสินค้า) , cart(ตะกร้าสินค้าที่ต้องการจะลบ) และ return cart 
    delete cart[index - 1]; // ลบสินค้าตาม index ที่รับมา 
    return cart;
}

function operate(fn, x, y, stock, cart) { // operate เป็น higher order function เนื่องจาก return ผลลัพธ์ที่จากการ excute funtion ที่รับมา 
    return fn(x, y, stock, cart);
}

function bill(cart) { //เป็น Closure ที่มี func bill ครอบ func change โดย bill จะ return change ที่อยู่ข้างใน  bill() ทำการสรุปยอดเงินจากสินค้าที่เลือกในตะกร้า
    let total = 0;
    console.log("--------- Bill --------");
    cart.forEach((item) => { // ใช้ forEach() เข้าถึง property ของ object ในแต่ละ element เพื่อคำนวณยอดเงิน 
        total += item.price * item.amount;
        console.log(`${item.name} price: ${item.price} amount: ${item.amount}`);
    });
    console.log("-----------------------");
    console.log(`total is ${total}`);

    function change(money = 0) { //change เป็น Nested Func มี default parameter คือ money กำหนดให้มีค่าเป็น 0 ถ้าไม่มีการรับ parameter เข้ามา
        let change = money - total; //มีการอ้างถึง total ที่อยู่ใน Func bill มาใช้ในการคำนวณ
        if (change < 0) {
            return "not enough money";
        } else {
            const cash = {};
            let change_money = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
            change_money.map((num) => { // ใช้ประโยชน์จาก map() ในการเพิ่ม property ให้กับ cash(object) 
                cash[num] = Math.floor(change / num);
                change -= num * cash[num];
            });
            console.log("Your change is")
            console.log(cash); // แสดงเงินทอน
        }
    }
    return change; //มีการ Return func change ที่ซ้อนอยู่ด้านใน func bill ซึ่งจะได้เป็นเงินทอนออกมา (ต้องเรียกใช้ถึงจะแสดงเงินทอน)
}

export { operate, add, remove, bill }; //ทำการexport เพื่อให้นำไปใช้งานกับไฟล์อื่นได้