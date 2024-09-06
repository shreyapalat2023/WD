// callbacks
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);
// nesting

let age = 19;

if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}

// nested loops

for (let i = 0; i < 5; i++) {
    let str = ""
    for (let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(i, str);
}
//nested Callback
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// getData(1,getData(2)) //Wrong way to pass a callbackfunction

// Callback hell START

getData(1, () => {
    console.log("Getting data2...");
    getData(2, () => {
        console.log("Getting data3....");
        getData(3, () => {
            console.log("Getting data4....");
            getData(4)
        })
    })
});
// Callback hell END

