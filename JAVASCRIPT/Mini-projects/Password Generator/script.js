const password_ele = document.getElementById("pwd_txt");
var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";
const special_chars = "@#$%^&*";;
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

var pwd_length = document.querySelectorAll(".slider");

generate.addEventListener("click", () => {
    let password = ""
    var checked = document.getElementById("checkbox");
    var final_string = string;
    console.log(checked);
    if (checked) {
        final_string += "@#$%^&*";
    }
    for (var i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    password_ele.innerText = password;
    final_string = string;
});

clipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(password_ele.innerText);
    alert("password is copied to clipboard");
})