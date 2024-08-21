 // creating an array
 const cars = ["car1", "car2", "car3"]
 // creat an araray, and then provide the elements
 const carss = [];
 carss[0] = "Saab";
 carss[1] = "Volvo";
 carss[2] = "BMW"
 // creat an array ans assigns value
 const carname = new Array("Saab", "Volvo", "BMW")
 // Accessing Array Elements
 const name = ["shreya", "mihir", "krish"]
 let namee = name[2];
 //  changing an array element
 name[0] = "palat";
 // Converting array to string
 // const fruits = ["Banana", "Orange", "Apple", "Mango"];
 // document.getElementById("demo").innerHTML = fruits.toString();
 // arrays are not associative 
 let test = [];
 test[0] = "something";
 test[5] = "something";
 test['maths'] = 99;
 console.log(test['maths']);
 console.log(test.maths);
 //Array Methods
 // at()
 const fruits = ["Banana", "Orange", "Apple", "Mango"]
 document.getElementById("at1").innerHTML = fruits.toString();
 document.getElementById("at2").innerHTML = fruits.at();
 // concat()
 const arr1 = ["Cecilie", "Lone"];
 const arr2 = ["Emil", "Tobias", "Linus"];
 document.getElementById("concat").innerHTML = arr1.concat(arr2);
 // copyWithin()
 const fruitsa = ["Banana", "Orange", "Apple", "Mango"];
 document.getElementById("copy").innerHTML = fruitsa.copyWithin(2, 0)
 // entries()
 const fruitsb = ["Banana", "Orange", "Apple", "Mango"];
 const f = fruitsb.entries();

 for (let x of f) {
     document.getElementById("entries").innerHTML += x + "<br>";
 }
 //every()
 const ages = [14, 34, 60, 19];
 function checkAge(age) {
     return age > 18;
 }
 document.getElementById("every").innerHTML = ages.every(checkAge);
 //filter()
 const agesa = [14, 34, 60, 19];
 function checkAge1(age1) {
     return age1 >= 18;
 }
 document.getElementById("filter").innerHTML = agesa.filter(checkAge1);
 // find(), findlast() findIndex() findLast Index()
 const agesb = [30, 34, 23, 45];
 function checkFirstAge(age2) {
     return age2 >= 18;
 }
 document.getElementById("find").innerHTML = agesb.find(checkFirstAge);
 document.getElementById("findindex").innerHTML = agesb.findIndex(checkFirstAge);
 document.getElementById("lastindex").innerHTML = agesb.findLastIndex(checkFirstAge);
 // flat()
 const myArr = [[1, 2], [3, 4], [5, 6]];
 const newArr = myArr.flat(2);

 document.getElementById("flat").innerHTML = newArr
 // map()
 const numbers = [4, 9, 16, 25];
 document.getElementById("sqrrt").innerHTML = numbers.map(Math.sqrt);
 document.getElementById("map").innerHTML = numbers.map(multiplyFunction);
 function multiplyFunction(num) {
     return num * 10;
 }
 // forEach()