let promise = new Promise ( (resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello");
        resolve("success!!")
        // reject("error!!")
    },2000)
    // resolve("resolved")
})