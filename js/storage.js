const Storage = {
    saveTasks(tasks) {
        localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
    },

    getTasks() {
        return JSON.parse(localStorage.getItem('kanban-tasks')) || [];
    }
};
