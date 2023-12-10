// An array is a collection of similar or diffirent types of data arraged in a row in a single variable


// let cars = ["BMW", "Ferari", "Lamborgini", "McLaren","Rolls Royce"]

// cars[0] = "Benz"    // changes an array element index of 0 BMW TO Benz

// cars.push("Kia")  //add element last to an array
// cars.pop()       // removes last element of an array

// cars.unshift("Maruthi") // add element to the beginning 
// cars.shift();          // removes element in the beginning 

// // console.log(cars);


// let length = cars.length // finds length of an array
// let index = cars.indexOf("Lamborgini") // finds index of an array
// console.log(index);
// If indexof returs -1 that means that element not found
// console.log(index);


// ------------------------------------------------------------loop of an array -----------------------------------------------------------------

// let clock = [1,2,3,4,5,6,7,8,9,10,11,12]

// for (let i = 0; i < clock.length; i+=1){
//     console.log(clock[i]);
// }

// backwards looping

// for(let j = clock.length - 1; j >= 0; j-=1){
//     console.log(clock[j]);
// }

// best method of looping array
// for(let time of clock){
//     console.log(time);
// }



// a = [1,2,4,5]
// for(let i of a){
//     a[i] = "hello"
//     console.log(a[i]);
// }
// ----------------------------------------------------- sorting of an array of string ----------------------------------------------------------

// let students = ["barath","naresh","pranav","aravind","prathiusha","mathan","dharun"]

// students.sort()            // will sort in assending according to the alphabet of the string
// students.sort().reverse() // will sort in decending according to the alphabet of the string


// for(let name of students){
//     console.log(name);
// }


// -------------------------------------------------------- 2 Dimensional arrays ----------------------------------------------------------------

// 2D arrays = an array of arrays
// it has rows and columns so it called 2d arrays 

// let mobileGame = ["pubg","clashofclans","Roblox","CallofDuty","minecraft"]

// let pcGames =    ["asphat9","fortnite","gtav","ApexLegends","witcher3"]

// let psGames =    ["godofwar","marvelspiderman","Assassin's Creed","Horizon Forbidden "]

// let games = [mobileGame,pcGames,psGames]

// games[1][2] = "League of Legends" // 2d array has rows and columns so we need to declared row nad column to change anything

// for (let list of games){ // outer loop logs only three array 
//     for (let game of list){ // inner loop gets inside of array
//         console.log(list));
//     }
// }
// console.log(games); //to access Assassin Creed

// -------------------------------------------------------- spread operator --------------------------------------------------------------------

// spread operator => allows an iterable such as an array or string to be expanded in place where zero or more arguments are expected (unpacks the elements)
// spread operator = ...

// let numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ]

// console.log(...numbers); // instead of for loop it unpacks each element in array it is best method to expand arrays 

// let name = 'aravindram';
// console.log(...name); // spread operator also works for string it also works without array

// let class1 = ["spogebob","patrick","sandy"]
// let class2 = ["squidward", "Mr.Krabs","plankton"]

// class1.push(...class2) // unpack every element in class2 and push in class1 instead of using for loop
// console.log(class1);

// let color1=['red','blue','green']
// let color2=['orange','black','grey']

// color1.push(...color2);
// console.log(color1);

// -------------------------------------------------------- rest parameters --------------------------------------------------------------------

// rest parameters = represent an indefinite numbers of parameters (packs arguments into an array)
// rest parameter => ...

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;

console.log(sum(a,b,c,e,6));

function sum(...numbers) { //change the a,b,c separate aruguments into an array  and numbers is the name of the array // numbers = [a,b,c,e,5]
    let total = 0;
    for(let num of numbers){ // iterate numbers array
        total += num
    }

    return total;
}

// -------------------------------------------------------- callback function ------------------------------------------------------------------

// callback function = a function passed as an arguments to another function

// ensures that a function is not going to run before a task is completed. Helps us develop async code. (when one funcion has to wait for another function) that helps us avoid errors and potential function ) 
// for eg: wait for a file to load

// sum(4,3,displayDOM) // make sure do not enter the parenthesis () after the function name

// function sum(x,y,z) {
//     let result = x + y; 
//     z(result) // callback runs after the sum runs //displayDOM(7)
// }

// function displayDOM(output){
//     document.getElementById('label').innerHTML = output;
// }

// ---------------------------------------------------------- array.forEach() -------------------------------------------------------------------

// array.forEach() => executes a provided callback function once for each array element

let users = ['aravind','ram','tony']
users.forEach(capitalize);  


function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1); 
    
}

console.log(...users)

// ---------------------------------------------------------- array.Map() --------------------------------------------------------------------

// array.Map () =>creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// let numbers = [1,2,3,4,5,6,7,8]

// for(let i=0; i<numbers.length; i++){
// numbers[i] = Math.pow(numbers[i],2)
// }

// console.log(numbers);

// instead of creating for loop and implementing the function we can use map method to execute calback function and create a array and store in given variable
// function square(element) {
//     return Math.pow(element,2)
// }

// let sqr = numbers.map(square)

// console.log(sqr);

// function print(element) {
//     console.log(element);
// }

// sqr.forEach(print)// to print each element in an array separately we can use callback func

// ---------------------------------------------------------- array.filter() --------------------------------------------------------------------

// array.filter() => creates a new array with all elements that pass the test provided by a function 


// let num = [Math.floor(Math.random() *10 ) + 1];  // !!! it works only in array
// // let num = [23,34,43,43,43,43,4,34,23,2,4,125,23,12,3452]

// function checkOdd(element) {
//     return element %2 == 1 ; 
// }

// let odd = num.filter(checkOdd);

// // console.log(odd);

// odd.forEach(print)

// ---------------------------------------------------------- array.reduce() --------------------------------------------------------------------

// array.reduce() => reduces an array to a single array && really used to sum up an array

let prices = [12,3,432,43,1,34,246,3,74,834,53,5,2]

function checkOut(total, element) {
    return total + element;
}

let total = prices.reduce(checkOut); // !!!reduces only works in function 
console.log(`The Total is ₹${total}`);

// ----------------------------------------------------- sorting of an array of number ----------------------------------------------------------

let marks = [100,50,20,30,10,69,73]
marks = marks.sort(assendingSort)

function assendingSort(a, b) {
  return a - b;
};

console.log(marks);
marks.forEach(print)