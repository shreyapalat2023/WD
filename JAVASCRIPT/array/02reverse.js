const reverse = () => {
    const reversed = [];

    for (let i = array.length - 1; i >= 0; i -= 1) {
        reversed.push(array[i]);
    }

    return reversed;
}

let array = [1, 2, 3, 4, 5];
console.log(reverse());

let newArray = array.map((item, idx) => array[array.length - 1 - idx]);
console.log(newArray);









