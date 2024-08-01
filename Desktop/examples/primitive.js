let a = 67
console.log(typeof a) // The data type of a
let b; // b contains undefined by default
b = 23; // b now contains a number
// We can change the type b contains because js is dynamically typed
console.log(b)

let c = false; 
c = true;
console.log(c)

let d = "Harry"
console.log(d)
console.log(typeof d)

let e = null 
console.log(e)

// Objects in JavaScript
let obj = {
    "Harry": 98,
    "Shagun": 90,
    "Ritika": 89,
    "Lovish": 78,
    "Rohan Das": 56
}
// console.log(obj.Rohan Das) // This is not going to work because of the space in the key
console.log(obj["Rohan Das"])