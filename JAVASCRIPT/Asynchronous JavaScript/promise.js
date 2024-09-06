// let promise = new Promise((resolve,reject) => {
//    console.log("I am a Promise");
//    resolve("resolved");
//    reject("some error")
// })


// function getData(dataId) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");
//             // reject("error")
//         },5000)
//     });
// }
// const promise = getData(123);
// console.log(promise);

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a Promise");
        // resolve("succes");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((result) => {
    console.log("promise fullfilled",result);
});
promise.catch((error) => {
    console.log("promise rejected",error);
})