let arr = [2, 4, 6, 8, 8, 9];
const sum = arr.reduce((res, current) => {
    return res + current;
});

console.log(`The sum of ${arr} is:`, sum);

// Find largest number

let number = [3, 6, 8, 2, 3, 9, 10, 34, 56];

const largeNumber = number.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(`Largest number from ${number} is:`, largeNumber);

// Marks scored above 90
let marks = [97, 64, 32, 49, 99, 98, 96];

let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(`toppers have secured marks:`, toppers);

// Create array numbers 1 to n
let n = prompt("Enter a number");

let numberArray = [];

for (let i = 1; i <= n; i++) {
    numberArray[i - 1] = i;
}
console.log(`Array of first ${n} numbers:`,numberArray);

// Calculate sumof arraynumbers

const summation = numberArray.reduce((res, curr) => {
    return res + curr;
});

console.log(`Sum:`,summation);

// Factorial

let factorial = numberArray.reduce((res, curr) => {
    return res * curr;
});

console.log(`Factorial of numbers:`,factorial);




