//  switch = statement that explains a value for a match agaisnt many case clauses,
// more efficiently that many "else if" statements

// let payment = window.prompt("Have You Payed:");
// let stat = window.prompt("Have Your Order Delivered!")

// switch(true){
//     case payment == "done":
//         console.log("You're Order has been placed")
//         break;

//     case payment =="not done":
//         console.log("Pls pay and Proceed")
//         break;
    
//         case payment == "done":
//             console.log("You're Order has been placed")
//             break;
// }

// switch(true){
//     case stat =="delivered":
//         console.log("Thanks!, for ordering in blueble.in");
//         break;
    
//     case stat == "not delivered":
//         console.log("Sorry!, for the inconvinence")
//         break;
// }

const subbtn = document.getElementById("subsCheckbox")
const gpaybtn = document.getElementById("gpaybtn");
const phonepaybtn = document.getElementById("phonepaybtn");
const paytmbtn = document.getElementById("paytmbtn");

document.getElementById("submit").onclick = function() {
switch (true) {
    
    case subbtn.checked:
        console.log("you have subs")
        break;

    default:
        console.log("not subs");
        break;
}
}