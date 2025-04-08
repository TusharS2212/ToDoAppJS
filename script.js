const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<img src="Images/delete.png">`;
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();