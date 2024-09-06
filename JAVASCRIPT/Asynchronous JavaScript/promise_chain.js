function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("sucess");
        }, 4000);
    })
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("sucess");
        }, 4000);
    })
}

// console.log("fetching data1...");
// asyncFun1().then((res) => {
//     console.log("fetching data2...");
//     asyncFun2().then((res) => {
//     })
// });

console.log("fetching data1...");

asyncFun1().then((res) => {
    console.log("fetching data2..");
    return asyncFun2();
})
.then((res)=> {
    console.log(res);
})

