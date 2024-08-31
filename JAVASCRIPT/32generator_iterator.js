function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = myGenerator();
console.log("Example one");


console.log(generator.next());  //Output: value : 1, done: false
console.log(generator.next()); //Output : value : 2, done : false
console.log(generator.next());  //Output : value : 3, done : false
console.log(generator.next());   //Output : value : 4, done : false
console.log(generator.next());  //Output : value : undefined, done : true



// Example with Multiple parameters

function* greetGenerator(greeting, me, person) {
    yield `${greeting}!, from ${me}`
    yield `How are you, ${person}?`
}

const greeter = greetGenerator("Happy Birthday", "Shreya", "Krish");

console.log("Example with multiple parameters");


console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());
