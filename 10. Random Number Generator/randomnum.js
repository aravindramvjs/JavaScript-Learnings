// let a = Math.random() //it generates random num between 0 to 1.
// let b = Math.floor(Math.random() *6 ); // b creates random number between 0 to 5 and round off the num
// let c = Math.floor(Math.random() *6 ) + 1; // c creates random number between 0 to 6 and round off the num


// console.log("A creates random between 0 to 1, that is a =",a)
// console.log("B creates random between 0 to 5 and round off, that is a =",b)
// console.log("C creates random between 0 to 6 and round off, that is a =",c)

document.getElementById("roll").onclick = function(){
    
    let a = Math.floor(Math.random() *6 ) + 1 ;
    document.getElementById("x").innerHTML = a;

    let b = Math.floor(Math.random() *6 ) + 1 ;
    document.getElementById("y").innerHTML = b;

    let c = Math.floor(Math.random() *6 ) + 1;
    document.getElementById("z").innerHTML = c;
}