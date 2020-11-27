const form = document.getElementById("taskForm");
const list = document.getElementById("tasks");

form.addEventListener("submit", addTask);

let taskCount = 0;

function addTask(e) {
    e.preventDefault();
    
    let task = document.getElementById("task-input").value;
    if (task && taskCount < 8) {
        taskCount++;

        let newTask = document.createElement("li");
        newTask.className = "task";
        let newTaskTitle = document.createTextNode(task);
        let button = document.createElement("button");
        button.className = "button";
        newTask.appendChild(button);
        newTask.appendChild(newTaskTitle);

        list.appendChild(newTask);
        form.reset();
    } else {
        alert("Invalid task.")
    }
    
}

tasks.addEventListener("click", modifyTask)
function modifyTask(e) {
    if (e.target.tagName == "BUTTON") {
        let task = e.target.parentElement;
        // Complete/uncomplete task.
        if (task.className == "task"){
            e.target.className = "button completed-button";
            task.className = "task completed-task";
        } else if (task.className = "task completed-task"){
            e.target.className = "button";
            task.className = "task";
        }
        // Delete task.
        if (e.shiftKey) {
            task.remove();
        }

    }
}