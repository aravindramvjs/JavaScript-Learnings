// ----------------------------------------------------------- function expression --------------------------------------------------------------
// function expression = function without a name (anonymous function) used to avoid polluting the global scope with names, 
// write it, then forget about it

// let count = 0;

// function increasefunc(){
//     count +=1; 
//     document.getElementById('countlabel').innerHTML = count;
// }

// function decreasefunc(){
//     count -=1; 
//     document.getElementById('countlabel').innerHTML = count;
// }

// get rid of these function with function 



// document.getElementById('increasebtn').onclick = function(){
//     count +=1; 
//     document.getElementById('countlabel').innerText = count;

// }

// document.getElementById('decreasebtn').onclick = function(){
//     count -=1; 
//     document.getElementById('countlabel').innerText = count;
// }

// -------------------------------------------------------- callback function ------------------------------------------------------------------

// callback function = a function passed as an arguments to another function

// ensures that a function is not going to run before a task is completed. Helps us develop async code. (when one funcion has to wait for another function) that helps us avoid errors and potential function ) 
// for eg: wait for a file to load


// function sum(x,y, callback) {
//     let result = x + y; 
//     callback(result) // callback runs after the sum runs  /// here it changes callback(result)= displayDOM(output)
// }

// function displayDOM(output){ // output = result = 7
//     document.getElementById('label').innerHTML = output;
// }

// sum(4,3,displayDOM) // make sure do not enter the parenthesis () after the function name
// ----------------------------------------------------------- arrow function ----------------------------------------------------------------

// arrow function = compcat alternative to a traditionak function 
// arrow function - => 

// percent function using function expression
// let percent = function(x,y){
//     return ((x / y * 100))+"%"
// }

// console.log(percent(1,2)); 

// arrow function
// eleminate function keyword
// if there is one argument donot put ()
// if there is no arguments put ()
// after that put => 
// if there is one statement eleminate {}
// if there is more statement put {}
// no need of return here

// let percent = (x,y) => ((x / y * 100))+"%"

// console.log(percent(1,2));

// console.log(percent(2,5));

// console.log(`The percentage is ${Math.floor(percent(24,43))}%`);




// another example 
// let grades = [10,8,7,6,2,3,4,5]

// // traditional function 
// function ascendingSort(x,y) {
//     return y - x ;
// }
// function print(element) {
//     console.log(element);
// }

// grades.sort(ascendingSort);
// grades.forEach(print)

//  function expression
// let ascendingSort = function (x,y) {return x - y; }
// let print = function (element) {console.log(element); }

// grades.sort(ascendingSort);
// grades.forEach(print)

// // callback function 
// grades.sort(function(x,y){ return x - y; });
// grades.forEach(function(element){ console.log(element)});


// // arrow function
// grades.sort((x,y) => x-y);
// grades.forEach(element => console.log(element));

// ----------------------------------------------------------- nested function ----------------------------------------------------------------

// nested function = Funtions inside other function \.
// Outer functions have access to inner function 
// Inner function are hidden from the outside funcition
// used in closure

// let userName = "Aravind"
// let userInbox = 0;

// function login() {
//     displayUserName();
//     displayuserInbox();

//     function displayUserName() {
//         console.log(`Welcome ${userName}`);
//     }
//     function displayuserInbox() {
//         console.log(`You Have ${userInbox} new message`);
//     }
// }

// login()


