const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let Height = document.getElementById("height").value;
    let Weight = document.getElementById("weight").value;
    let result = document.querySelector("#result");
    let conclusion = document.querySelector("#conclusion");

    let bmi = (Weight / ((Height * Height)/1000)).toFixed(2);
    console.log(bmi);
    result.innerHTML = `Your BMI is : ${bmi}`;
     
    if(bmi < 18.6) {
        conclusion.innerHTML = `You are under Weight`;
    } else if (bmi > 18.6 && bmi < 24.9){
        conclusion.innerHTML = `you are Normal`;
    } else if(bmi > 24.9){
        conclusion.innerHTML = `You are Over-Weight`;
    }

    console.log(Height);
    console.log(Weight);
});