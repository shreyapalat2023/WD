document.write("Automatic Type Conversions");

console.log(5 + null); //5
console.log("5" + null); //5null
console.log("5" + 2); //52
console.log("5" - 2); //3
console.log("5" * "2"); //10
console.log("5" / "2"); //2.5

let result = "3" + true; 
console.log(result,typeof result); //3true string

let resulttwo = "4" + null;
console.log(resulttwo, typeof resulttwo); //4null string