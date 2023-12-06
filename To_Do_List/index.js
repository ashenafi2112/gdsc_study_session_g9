document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <input type="checkbox" class="checkbox">
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">🗑️</button>
            </div>
        `;

        updateStatus();

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                updateStatus();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
                updateStatus();
            }
        }

        var edit_buttons = document.querySelectorAll(".edit");
        for(var i=0; i<edit_buttons.length; i++){
            edit_buttons[i].onclick = function(){
                var task = this.parentNode;
                var taskName = task.querySelector(".taskname");
                var newName = prompt("Edit task:", taskName.innerText);
                if (newName !== null && newName !== "") {
                    taskName.innerText = newName;
                }
                updateStatus();
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}

document.querySelector('#clear-all').onclick = function(){
    document.querySelector('#tasks').innerHTML = "";
    updateStatus();
}

function updateStatus() {
    var totalTasks = document.querySelectorAll(".task").length;
    var completedTasks = document.querySelectorAll(".task.completed").length;
    document.querySelector("#status").innerText = `Done: ${completedTasks} out of ${totalTasks} tasks.`;
}
