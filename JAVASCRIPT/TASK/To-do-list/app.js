let list = document.querySelector(".list");
let btnAdd = document.getElementById("btnAdd");
let listTask = [
    // {
    //     content: "content task 1",
    //     status: "doing"
    // },
    // {
    //     content: "content task 2",
    //     status: "complete"
    // }
];
// Check if has data listTask in localStorage

if (localStorage.getItem("listTask") != null) {
    listTask = JSON.parse(localStorage.getItem("listTask"));
}

//This funtion is used to save your tasks to localstorage so that they will not disappear when you close the browser 

function saveLocalStorage() {
    localStorage.setItem("listTask", JSON.stringify(listTask));
}

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    let content = document.getElementById("task").value;
    if (content != "") {
        listTask.unshift({
            content: content,
            status: "doing"
        })
    }

    addTaskToHTML();

    content = document.getElementById("task").value = "";


    saveLocalStorage();

})

// Create a function to put task datas out of HTML

function addTaskToHTML() {
    list.innerHTML = "";
    listTask.forEach((task, index) => {
        let newTask = document.createElement("li");
        newTask.classList.add(task.status);
        newTask.innerHTML = `<div class="complete-icon" >
                    <i class="fa-regular fa-circle-check" onClick = 'completTask(${index})'></i>
                </div>
                <div class="content">${task.content}</div>
                <div class="trash-icon">
                    <i class="fa-solid fa-trash" onClick = 'deleteTask(${index})'></i>

                </div>`;
        list.appendChild(newTask);
    })
}

// When click complete icon, run this function to chage status task indes is order position this task in array 

function completTask(index) {
    // console.log("Complete");

    listTask[index].status = "complete";
    addTaskToHTML();
    saveLocalStorage();
}

// Run this function to delete task
function deleteTask(index) {
    // console.log("delete");

    listTask = listTask.filter((task, newIndex) => { return newIndex != index });
    addTaskToHTML();
    saveLocalStorage();
}