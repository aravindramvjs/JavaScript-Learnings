//return statement = return a value back to the place where you invoked the function


let height = window.prompt("Enter Height: ")
let width = window.prompt("Enter Width: ")



let area = getArea(height, width)
console.log(area);

function getArea(height,width){
    return height * width
}


