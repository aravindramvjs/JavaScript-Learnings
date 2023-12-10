// while loop = repeat some code 
// while some codition is true 
// It will potentially infinite.

// let i = 0;
// while (i<=10){
//     console.log(i);
//     i++
// }

let userName;


// This while loop checks username contains nothing or null if it is true ask first again and again 
// if both are false it goes to console
while(userName=="" || userName == null || userName == undefined){
    userName = window.prompt("Enter Your First Name:");
}
console.log("Hello",userName);


// console.log("Welcome Back,", userName,"!");

// let repeat = 1;
// let a = 0; 
// while (repeat <= 33){
//     a++
//     console.log(a, "SuperStar")
//     repeat2 = 1;
//     while(repeat2 <= 2){
//         a++
//         console.log(a,"Rajini")
//         repeat2++;
//     }
//     repeat++;
// }

// while (repeat <=10){
//     console.log(repeat, "Superstar")
//     repeat++;
// }

// let i = 0;
// while(i <= 7){
//     console.log(i)
//     i = i + 1
// }