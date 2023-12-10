// let = variable is limited to block of {}
// can't access outside of {}
// var = variable is limited to function(){}
// can access outside of {} but can't access outside of func(){}

// using var can affect the global variable (declared outside of a funnction)
// var will also CHANGE the BROWER WINDOW PROPERTIES


for (let i = 1; i <= 5; i++){
    console.log(i);
}
console.log(i);  // using let i can't accessable

for (var i = 1; i <= 5; i++){
    console.log(i);
}
console.log(i);  // using let i can accessable

function testFunction(){
    for (let j = 1; i <= 5; i++){
        console.log(i);
    }
}
console.log(j);  // using var i can't accessable outside of the function
