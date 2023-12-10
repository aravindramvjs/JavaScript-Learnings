// objects = A group of properties and methods 
// which is used when a block of code must be grouped

const car = {
    company: "Ferrari",
    model : "Ferrari F40",
    year: 1987, 
    color: "red",

    drive : function drive() {
        console.log("You're driving the car");
        },


    brake : function brake() {
        console.log("You step on the brake");
        }

}

console.log(car.company);
console.log(car.model);

car.drive()
car.brake()