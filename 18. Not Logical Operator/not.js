// ! NOT logival Operator 
// typically used to reverse a condition's boolean value
// true = false or false = true

let temp =window.prompt("What is the temp?");
let sunny = true;

// if (temp >  0) { //if it is more than 0 it is warm
//     console.log("The Weather is Warm Outside");
// }
// else{//if it is less than 0 it is cold 
//     console.log("The Weather is cold outside");
// }

//it is opp of above statement
if ( ! (temp > 0)) { 
    console.log("The Weather is Cold Outside");
}
else{
    console.log("The Weather is Warm outside");
}
if (! (sunny)){
    console.log("It is couldy Outside")
}
else{
    console.log("It is Sunny Outside")
}