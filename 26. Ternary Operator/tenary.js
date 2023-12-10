// ternary operator = shortcut for if else statement 
//                  = takes three operands
//                  = 1. a condition with ?
//                  = 2. expression if true :
//                  = 3. expression if false 

//  condition ? exprIfTrue : exprIfFalse


let age = window.prompt("Enter your age: ");

age < 18 ? console.log("You are Minor, You can't vote now"): 
age >= 18 & age<=60 ? console.log("You are Major, You can vote now") : 
console.log("You are senior citizon"); 