
let selectElement = document.querySelector(".select-slot");
selectElement.addEventListener("change", (event) => {
    if (event.target.value == "halfday") {
        document.querySelector(".halfday").style.display = "block";
        document.querySelector(".custom").style.display = "none"
        document.querySelector(".fullday").style.display = "none"
    }
    else if (event.target.value == "fullday") {
        document.querySelector(".fullday").style.display = "block";
        document.querySelector(".custom").style.display = "none"
        document.querySelector(".halfday").style.display = "none"

    }
    else if (event.target.value == "custom") {

        document.querySelector(".custom").style.display = "block"
        document.querySelector(".halfday").style.display = "none"
        document.querySelector(".fullday").style.display = "none"

    }  
});


// Functio required first name and last name START
function requiredname(e, msg) {
    // console.log("name is blurred");
    let regex = /^[a-zA-Z]/
    let str = e.value;
    if (regex.test(str) == true) {
        document.getElementById(msg).innerHTML = "";
        // console.log("It matched!!");
        console.log(regex.exec(str));
    }
    else if (str == "") {
        document.getElementById(msg).innerHTML = "Please enter your name";
        document.getElementById(msg).style.color = "red";

    }
    else {
        document.getElementById(msg).innerHTML = "not matched!!";
        document.getElementById(msg).style.color = "red";

        // console.log("not matched!!");
    }
}
// Functio required first name and last name END
// Functio required email START
let email = document.getElementById("email");

function requiredemail() {
    let regex1 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let strr = email.value;
    if (regex1.test(strr) == true) {
        document.getElementById("emailerror").innerHTML = "";
        console.log(regex1.exec(strr));

    }
    else if (strr == "") {
        document.getElementById("emailerror").innerHTML = "Please enter your email.";
        document.getElementById("emailerror").style.color = "red";

    }
    else {
        document.getElementById("emailerror").innerHTML = "invalid email address";
        document.getElementById("emailerror").style.color = "red";

    }

}
// Functio required email END

// Button START

document.getElementById("ins-btn").addEventListener("click", () => {
    alert("form is submitted suceessfully!!")
    // console.log("submit");
})
// Button END