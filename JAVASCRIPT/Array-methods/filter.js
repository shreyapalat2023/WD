// even number 
let numbers = [1,2,3,4,5,6,7,8,9];
let evenArr = numbers.filter((num) => {
    return num %2 === 0;
})
console.log("evennumbers:",evenArr);
// odd numbers

let oddArr = numbers.filter((oddnum) => {
    return oddnum % 2 !== 0;
});
console.log("oddnumbers:",oddArr);

// value greater than 3

let greaterThanThreeArr = numbers.filter((greaternum) => {
    return greaternum > 3;
})

console.log("numbers greater than three",greaterThanThreeArr);
 