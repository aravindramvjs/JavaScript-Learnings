const answer = Math.floor(Math.random() * 10 + 1); 
// this gives random num between 1 to 9 added 1 to make 10 and make it Math.floor to round off

let guesses = 0; 

document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses +=1;

    // if (guess == answer){
    //     alert(`${answer} is the number, It took you ${guesses} guesses`)
    // }
    // else if(guess < answer){
    //     alert("too small!") 
    // }
    // else{
    //     alert("too Large")
    // }


    
    guess == answer ? alert(`${answer} is the number, It took you ${guesses} guesses`) : 
    guess < answer ? alert(`too small!`) :
    alert(`too Large`)


}