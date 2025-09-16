function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = `task ${task.status}`;  // Adds 'todo', 'in-progress', or 'done' class
    div.draggable = true;
    div.dataset.id = task.id;
    div.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;
    return div;
}
