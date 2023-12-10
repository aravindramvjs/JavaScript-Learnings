let cards = ['A','2','3','4','5','6','7','8','9','10','J','K','Q']

function suffle(array) { // suffle(cards)
    let currentIndex = array.length // cards.length = 13

    while(currentIndex != 0){ //13 != 0
        // it generates a random number between 0 to 12 and round off the num ** index value of array is btwn 0 to 12
        let randomIndex = Math.floor(Math.random() *array.length ); //ri = 3
        currentIndex -=1; // 13 - 1 = 12

        let temp = array[currentIndex]; // temp = a[12] = 'Q'
        array[currentIndex] = array[randomIndex] //a[12]'Q' = a[3]'4'
        array[randomIndex] = temp // a[3]'4' = a[12]'Q'
    }
    return array;
}

suffle(cards)
cards.forEach(element => console.log(element))