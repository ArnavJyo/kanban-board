#  Kanban Board

A simple web-based **Kanban Board** application with a dark theme, built using **HTML**, **CSS**, and **vanilla JavaScript**.  
Tasks can be created, dragged between columns, and persist in `localStorage`.  
Each task visually reflects its current status with distinct colors.

---

## Features

-  Create tasks with title and description.
-  Three columns:
    - 🔴 **To Do**
    - 🟡 **In Progress**
    - 🟢 **Done**
-  Drag & drop tasks between columns.
-  Persist tasks in localStorage so they stay on page reload.
-  Dynamic color theming:
    - Red theme for To Do tasks.
    - Yellow theme for In Progress tasks.
    - Green theme for Done tasks.
-  Modular code structure for separation of concerns.

---

##  How to Use

1. Open `index.html` in a browser.
2. Enter a task title and description, then click **Add Task**.
3. Drag tasks between columns.
4. Task colors update automatically as their status changes.
5. Data is saved in the browser’s localStorage and remains after page refresh.

---

##  Theme Colors

| Column          | Background Color |
| -------------  | --------------- |
| To Do          | 🔴 Red           |
| In Progress   | 🟡 Yellow        |
| Done           | 🟢 Green         |

---

