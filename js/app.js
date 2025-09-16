document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskTitle = document.getElementById('task-title');
    const taskDesc = document.getElementById('task-desc');

    function renderTasks() {
        const tasks = Storage.getTasks();
        ['todo', 'in-progress', 'done'].forEach(status => {
            const column = document.getElementById(status);
            column.innerHTML = '';
            tasks.filter(t => t.status === status).forEach(task => {
                const taskEl = createTaskElement(task);
                column.appendChild(taskEl);
            });
        });
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        const tasks = Storage.getTasks();
        const newTask = {
            id: Date.now().toString(),
            title: taskTitle.value,
            description: taskDesc.value,
            status: 'todo'
        };
        tasks.push(newTask);
        Storage.saveTasks(tasks);
        renderTasks();
        taskTitle.value = '';
        taskDesc.value = '';
    });

    renderTasks();
    setupDragAndDrop();
});
