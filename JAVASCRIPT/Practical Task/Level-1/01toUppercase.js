


function uppercase(str) {
    str = str.split(" ");
    console.log(str);

    let x = str.length;

    for (let i = 0; i < x; i++) {
        str[i] = str[i].toUpperCase();
    }

    console.log(str);

    return str.join(" ")

}

console.log("Task 1");


console.log(uppercase("Write a JavaScript program to capitalize the first letter of each word of a given string."));


