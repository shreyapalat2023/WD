// resolve this proble using promise

function getDatanew(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("sucess");
        }, 5000);
    })
}
console.log("getting data1...");

getDatanew(1).then((res) => {
    console.log("getting data2...");
    return getDatanew(2);
}).then((res) => {
    console.log("getting data3....");
    return getDatanew(3);
}).then((res) => {
    console.log(res);
})