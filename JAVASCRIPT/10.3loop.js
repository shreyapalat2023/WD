//for loop START
let sum = 0;
for(let i = 0; i <= 5; i++){
  
    console.log("i =", i);
}
console.log("loop has ended");
//for loop END
//while loop START
let j = 1;
while(j < 5){
    console.log("J =",j);
    j++;
}
console.log("loop has ended");
//while loop END
//do while loop START
let k = 1;
do{

    console.log("K =",k);
    k++;
}
while(k <= 5)
//do while loop END
//for of loop START
//used to iterate strings and arrays
let str = "javascript"
let size = 0
for(val of str){
    console.log("val=",val);
    size++
}
console.log("string size=",size);
//for of  loop END
//for in  loop START
const human = {
    name: "shreya",
    surname: "palat",
    age: 24,
    degree: "BE"
}
for(key in human){
    console.log("key =",key, "value =",human[key]);
}
//for in  loop END