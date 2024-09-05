// Doubling numbers 
const num = [1,3,4,5,6];

const doubleNumber = num.map((number) => {
    return number*2;
});
console.log("Question one");

console.log(`Double the numbers ${num} : `,doubleNumber);

//Formatting Objects 

const users = [
    {firstname : "Palat", lastname: "Shreya", age: 24},
    {firstname : "Palat", lastname: "Mihir", age: 21},
    {firstname : "Palat", lastname: "Krish", age: 19},
];

const userDesciption = users.map((user) => {
    return `${user.firstname} ${user.lastname} is ${user.age} years old.`
});
console.log("Question Two");
console.log(userDesciption);