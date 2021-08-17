var x ="Say Hello";

console.log(x);
var x = `Hello`;
console.log(x);
const Timeout = 1500;
setTimeout(function() {
    console.log(`Good bye`);
},Timeout);
let greetingCards = ['Good luck' , 'Unlucky' , 'Have a good day'];

let ran = Math.floor(Math.random() * 3);
let wish = greetingCards[ran];
console.log(wish);
if(wish == 'Unlucky'){
    console.log("wish you happy");
}


