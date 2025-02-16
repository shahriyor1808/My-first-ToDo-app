// Get DOM variables
const taskInput = document.querySelector('#task-input');
const addTaskbtn = document.querySelector('#add-task-btn');
const tasklist = document.querySelector('#task-list');
// Myfunc to run task function
function myfunc() {
    const taskText = taskInput.value.trim();
    if (taskText !== ''){
        addTask(taskText);
        taskInput.value = '';
    }
}
// Add task function
addTaskbtn.addEventListener('click', myfunc);

// function to add a new task
function addTask(taskText){
    const taskitem = document.createElement('li');
    taskitem.classList.add('task-item');
    // Making new task with span
    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = taskText;
    // Delete button
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>'; 
    // Marking as done
    taskitem.addEventListener('click', () => {
        taskTextSpan.classList.toggle('done');
});
    // Delete task
    delBtn.addEventListener('click', () => {
        taskitem.remove();
    });
    // Enter key to add task
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            myfunc();
        }
    })
    // Append the span and delete button to the task item
    taskitem.appendChild(taskTextSpan);
    taskitem.appendChild(delBtn);
    tasklist.appendChild(taskitem);

}
