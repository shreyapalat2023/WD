function getData(datId, getNextData) {
    setTimeout(() => {
        console.log("data", datId);
        if (getNextData) {
            getNextData();
        };
    }, 2000)
}
//callbac khell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        })
    })
});

