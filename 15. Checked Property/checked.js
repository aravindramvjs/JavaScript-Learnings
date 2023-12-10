const subbtn = document.getElementById("subsCheckbox")
const gpaybtn = document.getElementById("gpaybtn");
const phonepaybtn = document.getElementById("phonepaybtn");
const paytmbtn = document.getElementById("paytmbtn");


document.getElementById("submit").onclick = function() {
   
    if (subbtn.checked){
            console.log("Congratulation! You Have Subscribed and Joined in our 15,000+ Family");
    }
    else{
        console.log("Don't Miss to Join in Our 15,000+ Family")
    }

    if(gpaybtn.checked){
        console.log("Hurry! You Got 5% Cashback");
    }

    else if(paytmbtn.checked){
        console.log("Hurry! You Got 15% Cashback");
    }

    else if(phonepaybtn.checked){
        console.log("Oh No! You Got No Cashback");
    }

    else{
        console.log("You need to select any one payment method")
    }
}

