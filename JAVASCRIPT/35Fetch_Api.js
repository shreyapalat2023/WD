const URL_CAT= "https://cat-fact.herokuapp.com/facts";

const factList = document.getElementById("fact")
const btn = document.getElementById("btn");
// asyn await

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL_CAT);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
};

getFacts();

// Promise Chaining
// function getFacts() {
//     fetch(URL_CAT).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factList.innerText = data[2].text;
//     })
// }

btn.addEventListener("click", getFacts);



