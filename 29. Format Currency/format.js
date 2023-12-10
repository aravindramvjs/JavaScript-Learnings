// tolocalestring() = returns a string with a language sensitive representation of this 
// number.tolocalestring(locale, {options})
// locale = specify that language (undefined = default set by the browser)
// option = object with formatting option

let currency = 9876543.231;

let dollar = currency.toLocaleString("us-EN",{style: "currency", currency:"USD"})
let inr = currency.toLocaleString("hi-IN",{style: "currency", currency:"INR"})
let euro = currency.toLocaleString("de-DE",{style: "currency", currency:"EUR"})



document.getElementById("Label-1").innerHTML = "Dollar " + dollar;
document.getElementById("Label-2").innerHTML = "Ruppes " + inr;
document.getElementById("Label-3").innerHTML = "Euro " + euro;


let percentage = 0.5;
 
let percent = percentage.toLocaleString(undefined,{style: "percent"})

// document.getElementById("Label-4").innerHTML = percent;
console.log(percent);

let myUnit = 10;
 
let celcius = myUnit.toLocaleString(undefined,{style: "unit",unit:"celsius"})

// document.getElementById("Label-4").innerHTML = percent;
console.log(myUnit);



