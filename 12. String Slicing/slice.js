// slice() extracts a section of a string
// and returns a new string 
// without modifying the orginal string

// let fullName = "aravind ram"
let fullName =  window.prompt("Enter Your Full Name: ")
let firstName;
let lastName;

// firstName = fullName.slice(0, 8);
firstName = fullName.slice(0, fullName.indexOf(" "));
console.log("The First name is ",firstName);

// lastName = fullName.slice(8);
lastName = fullName.slice(fullName.indexOf(" ") + 1); // add +1 to get rid of space
console.log("The last name is ",lastName);


