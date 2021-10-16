function add(id, amount, stock, cart) {
    cart.push(stock[id - 1]);
    cart[cart.length - 1]["amount"] = amount;
    return cart;
}

function remove(index, cart) {
    delete cart[index - 1];
    return cart;
}

function operate(fn, x, y, stock, cart) {
    if (arguments.length == 2) return fn(x, cart);
    return fn(x, y, stock, cart);
}

function bill(cart) {
    let total = 0;
    console.log("--------- Bill --------");
    cart.forEach((item) => {
        total += item.price * item.amount;
        console.log(`${item.name} price: ${item.price} amount: ${item.amount}`);
    });
    console.log("-----------------------");
    console.log(`total is ${total}`);

    function change(money = 0) {
        let change = money - total;
        if (change < 0) {
            return "not enough money";
        } else {
            const cash = {};
            let change_money = [500, 100, 50, 20, 10, 5, 2, 1];
            change_money.map((num) => {
                cash[num] = Math.floor(change / num);
                change -= num * cash[num];
            });
            console.log(cash);
        }
    }
    return change;
}

export { operate, add, remove, bill };