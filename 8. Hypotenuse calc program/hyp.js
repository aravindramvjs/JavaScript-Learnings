// let a;
// let b;
// let c;

// a = window.prompt("Enter the value of a = ");
// a = Number(a);
// b = window.prompt("Enter the value of b = ");
// b = Number(b);



// c = Math.sqrt(a*a + b*b);

// console.log("The altitude is ", a,"cm");
// console.log("The Base is", b,"cm");
// console.log("The Hypotenuse is  is", c,"cm");

function hypotenuse(a,b) {
    
    a = document.getElementById("fora").value;
    a = Number(a);

    b = document.getElementById("forb").value;
    b = Number(b);



    c = math.sqrt(a*a + b*b);
    document.getElementById("forc").innerText = "Hypotenuse is " + c;
}  
document.getElementById("submit").onclick = hypotenuse (); 

