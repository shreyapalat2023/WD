
const array = [Number("3.14"),  //3.14
    Number(Math.PI),  //3.141592653589793
    Number("  "),    //0
    Number(""),       //0
    Number("99 88"),  //NaN
    Number("John") ]  //NaN

    array.forEach(element => {
        console.log(element);
    });
// console.log(Number("3.14"));
// console.log(Number(Math.PI));

// The unary + operator can be used to convert a variable to a number
document.write("String to Number")

let y = "5";
let x = + y;

console.log(x);
console.log(typeof y);
console.log(typeof x);


let a = "Shreya";
let b = + a;

console.log(b);
console.log(typeof a);
console.log(typeof b);