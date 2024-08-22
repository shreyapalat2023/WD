// String Length START
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;
document.getElementById("string").innerHTML = `Length of ${text1} is ${length}`;
// String Length END


// String charat() START
let text2 = "HELLO WORLD";
let char = text2.charAt(0);
document.getElementById("charat").innerHTML = `charAt(0) in ${text2} is ${char}`;
// String charat() END

// String at() START
const name = "W3Schools";
let letter = name.at(2);
document.getElementById("at").innerHTML = `at(2) in ${name} is ${letter}`;
// String at() END

// String slcie() START
let text3 = "Apple, Banana, Kiwi";
let part = text3.slice(7, 13);
document.getElementById("slice").innerHTML = `slice(7,13) in ${text3} gives result as ${part}`;

// String slcie() END
// String substring() START
let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 13);
document.getElementById("substring").innerHTML = `substring(7,13) in ${str} gives result as ${part1}`;
// String substring() END
// String substr() START
let str1 = "Apple, Banana, Kiwi";
let part2= str.substr(7, 6);
document.getElementById("substr").innerHTML = `substr(7,6) in ${str1} gives result as ${part2}`;

// String substr() END
// String uppercase() START
let text4 = "Hello World!";
let text5 = text4.toUpperCase();
document.getElementById("uppercase").innerHTML = `toUpperCase() in ${text4} results in ${text5}`;

// String lorwercase() start
let text6 = "Hello World!";       
let text7 = text6.toLowerCase();
document.getElementById("lowercase").innerHTML = `toLowerCase() in ${text6} results in ${text7}`;

// String lowercase() END
// String concat() start
let text8 = "Hello";
let text9 = "World";
let text10 = text8.concat(" ", text9);
document.getElementById("concat").innerHTML = `text8.concat("", text9) with ${text8} results in ${text10}`

// String concat() END
// String padstart() START
let text11 = "5";
let padded = text11.padStart(4,"0");
document.getElementById("padstart").innerHTML = `In ${text11} padStart(4, "0") results in ${padded}`;
// String padstart() END
// String padEND() START
let text12 = "5";
let padded2 = text12.padEnd(4,"0");
document.getElementById("padend").innerHTML = `In ${text12} padEnd(4, "0") results in ${padded2}`

// String padEND() END
// String split() START
let text13 = "a,b,c,d";
console.log(text13.split(","));

// String Split() END
// String repeat() END
let str2 = "Hello!"
const rep = str2.repeat(4);
document.getElementById("repeat").innerHTML = `repeat(4) for ${str2} give result as ${rep}`
// String repeat() END

