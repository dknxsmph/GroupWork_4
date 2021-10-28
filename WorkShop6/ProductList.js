// import { product } from "./Product"

function addProduct(id, name, desc, price, img, stock, ) {
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
    b_btn.setAttribute("class", "btn btn-secondary my-3")
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
addProduct(
    'P001',
    'MATCHSPEL',
    'gaming chair Bomstad black',
    4990,
    'img/1.png',
    3
);
addProduct(
    'P002',
    'LINNMON',
    'Desk, white100x60 cm',
    749,
    'img/2.png',
    8
);
addProduct(
    'P003',
    'SKÅDIS ',
    'Pegboard, white76x56 cm',
    650,
    'img/3.png',
    20
);
addProduct(
    'P004',
    'CHILISTRÅN',
    'Hanging planter, in/outdoor white12 cm',
    299,
    'img/4.png',
    15
);
addProduct(
    'P005',
    'FEJKA',
    'Artificial potted plant, in/outdoor Monstera 9 cm',
    249,
    'img/5.png',
    14
);
addProduct(
    'P006',
    'LAUTERS',
    'Floor lamp, ash/white',
    1990,
    'img/6.png',
    4
);
addProduct(
    'P007',
    'TÅRBÄK',
    'Rug, flatwoven, handmade/multicolour170x240 cm',
    7990,
    'img/7.png',
    19
);
addProduct(
    'P008',
    'BLÅHAJ',
    'Soft toy, shark100 cm',
    590,
    'img/8.png',
    16
);
addProduct(
    'P009',
    'VRETSTORP',
    'Cover for 3-seat sofa-bed, Hallarp grey',
    16990,
    'img/9.png',
    16
);
addProduct(
    'P010',
    'UPPTÅG',
    'Cushion, red45x27 cm',
    390,
    'img/10.png',
    16
);
addProduct(
    'P011',
    'POÄNG',
    'Armchair cushion, Knisa light beige',
    3590,
    'img/11.png',
    16
);
addProduct(
    'P012',
    'NISSAFORS',
    'Trolley, black50.5x30x83 cm',
    890,
    'img/12.png',
    16
);