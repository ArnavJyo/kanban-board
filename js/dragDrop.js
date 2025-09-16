function setupDragAndDrop() {
    document.querySelectorAll('.task-list').forEach(column => {
        column.addEventListener('dragover', event => {
            event.preventDefault();  // Allow drop
        });

        column.addEventListener('drop', event => {
            event.preventDefault();

            const taskId = event.dataTransfer.getData('text/plain');
            const taskElement = document.querySelector(`[data-id='${taskId}']`);

            column.appendChild(taskElement);  // Move DOM element

            updateTaskStatus(taskId, column.id);

            // Update CSS class immediately
            taskElement.classList.remove('todo', 'in-progress', 'done');
            taskElement.classList.add(column.id);
        });
    });

    document.addEventListener('dragstart', event => {
        if (event.target.classList.contains('task')) {
            event.dataTransfer.setData('text/plain', event.target.dataset.id);
        }
    });
}

function updateTaskStatus(taskId, newStatus) {
    const tasks = Storage.getTasks();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = newStatus;
        Storage.saveTasks(tasks);
    }
}

