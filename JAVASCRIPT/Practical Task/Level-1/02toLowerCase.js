function lower_case(str) {
    str = str.split(" ");
    console.log(str);
    
    let x = str.length;

    for(let i = 0; i < x; i++){
        str[i] = str[i].toLowerCase();
    }

    console.log(str);
    return str.join(" ")
    
}

console.log("Task 2");


console.log(lower_case("WRITE A JAVASCRIPT PROGRAM TO CAPITALIZE THE FIRST LETTER OF EACH WORD OF A GIVEN STRING."));
