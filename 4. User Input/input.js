// Easy way to create user input using window.prompt

let username = window.prompt("Enter Your Name");
console.log(username);

// difficult way with html 


document.getElementById("submit").onclick = function() {
    username = document.getElementById("theName").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username;
    console.log(username);
}

