// Class Car START
class Car {
    name
    company
    color
}
const myCar1= new Car()
myCar1.name = "Car1"
myCar1.company = "Toyota"
myCar1.color = "White"

const myCar2 = new Car()
myCar2.name = "Car2"
myCar2.company = "KIA"
myCar2.color = "Grey"

console.log(myCar1);
console.log(myCar1.name);
console.log(myCar2.color);
console.log(myCar2);
// Class Car END

class Mathoperation {
    mathAddition(a,b){
        return a + b ;
    }
    mathMulti(c,d){
        return c * d;
    }
    mathSubtraction(e,f){
        return e - f;
    }
    mathDivision(g,h){
        return g / h;
    }
}

const sum1 = new Mathoperation();
console.log(sum1.mathAddition(2,5));
console.log(sum1.mathAddition(8,10));

const mul = new Mathoperation()
console.log(mul.mathMulti(4,5));

const subtraction = new Mathoperation()
console.log(subtraction.mathSubtraction(9,4));

const division = new Mathoperation()
console.log(division.mathDivision(81,9));

