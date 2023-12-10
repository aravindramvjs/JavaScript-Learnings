// Map = object that holds key value pairs of any data type

const BookStore = new Map([
    ["Think and Grow Rich", 150],
    ["Elon Musk", 450],
    ["Attitude is Everthing", 100],
    ["The 5 Second Rule", 250],
    ["Deep Work", 350],
])

BookStore.forEach((value, key) => console.log(`${key} : ₹${value}`));

let cart = 0;
cart += BookStore.get("Elon Musk");
cart += BookStore.get("Deep Work");

console.log(`you have to pay ₹${cart}`);

// to add more element inside the map

BookStore.set("Rich Dad Poor Dad", 200)