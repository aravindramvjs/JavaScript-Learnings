// Do While Loop = Do Something -> Then check the condition 
//                              -> Repeat IF condition is true;


let userName;

// If not value assign to username it skips the while so win prom must be repeat 
// while(userName=="" || userName == null){

//     userName = window.prompt("Enter Your First Name:");
// }


// console.log("Welcome Back,", userName,"!");


// here I do execute win prom and then check the condition 
do{

    userName = window.prompt("Enter Your First Name:");

}while(userName=="" || userName == null)


console.log("Welcome Back,", userName,"!");

x = 1;
let a =0;
do{
    a++
    console.log(a, "superstar");
    let y = 1;
    do{
        a++
        console.log(a, "Rajini")
        y++
    }while(y <=2)
    x++
}while(x <=10)