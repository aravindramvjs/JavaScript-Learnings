// Template literals = delimited with (`)
//  used instead of using single ('') and double quotes("")
//  allows embeded variables and experssion without disturbance


let name = "Aravind"
let items = 4;
let total = 750;

console.log(`Hello ${name}, you have ${items} items in your cart, your total is ${total} Rs`);


let text = `Hello ${name}, <br>
 you have ${items} items in your cart, <br>
 your total is ${total} Rs`;

document.getElementById("myLabel").innerHTML = text;

