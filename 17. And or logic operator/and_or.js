//  gives us the ability t check more than 1 condition concurrently 
// && AND (BOTH condition must be true)
// || OR (EITHER condition can be true)

let temp = window.prompt("What is the weather? ")
// let sunny = ;

// if(temp > 0 && temp <30){
//     console.log("The Weather is good  Outside");

// }
// else{
//     console.log("The Weather is bad outside");
// }

// if(temp <= 0 ||  temp > 30){// the temp is less than 0 and more than 30
//     console.log("The Weather is Bad Outside");

// }
// else{
//     console.log("The Weather is Good outside");
// }

if(temp > 0 & temp <30  || temp > 50 & temp < 80){
    console.log("The Weather is good Outside");

}
else{
    console.log("The Weather is bad outside");
}

