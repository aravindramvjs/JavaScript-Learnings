// variable is simply a name of storage location.

// let a = 21;

// a += 1; // instead of typing a = a + 1; 

// console.log('age =',a);

let name = 'Aravind'; // string in single quotes
let secondname = "ram"; // string in double quotes
let age = 19; // number data type
let student = true; // bollean

console.log(name, secondname, age, 'is', student);
console.log(name);

document.getElementById("p1").innerText = "<p>First Name</p> = " + name
document.getElementById("p2").innerHTML = "<marquee>Second Name</marquee> " + secondname
document.getElementById("p3").innerHTML = "Age  = " + age;
document.getElementById("p4").innerHTML = "Does he is studying in fssa = " + student;