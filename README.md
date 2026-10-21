# To-Do List

This is a simple to-do list I made using HTML, CSS and JavaScript for the CS Society technical evaluation. It has a notebook style design and lets you add tasks, set a priority and delete them.

## Live Demo
https://YOUR-SITE-NAME.onrender.com

## Features
- Add a task by clicking the Add button or pressing Enter
- Delete a task with one click
- Choose a priority (High, Medium or Low), shown with a coloured border on the left of each task
- Notebook style design with a ruled paper background, handwriting font and a highlighted title
- New tasks slide in when they are added
- A message shows when the list is empty
- The layout adjusts to different screen sizes, including phones

## Built With
- HTML for the structure of the page
- CSS for the design, layout, animation and responsiveness
- JavaScript for adding and deleting tasks and reading the priority

## Project Structure
```
todo-list/
├── index.html
├── style.css
└── script.js
```

## How to Run
Download or clone this repository and open `index.html` in any web browser. No installation is needed.

## How It Works
When a task is added, JavaScript creates a new list item and gives it a class based on the chosen priority (high, medium or low). The CSS uses that class to colour the task's left border. Each task also has a Delete button that removes that task from the list.

## What I Learned
This was my first time using JavaScript. I learned how to use it to change the page when a user clicks a button, like adding and deleting tasks.

## Future Improvements
- Mark tasks as complete
- Filter tasks by All, Active and Completed
- Save tasks using local storage
- Add an interactive calendar so that tasks are linked to due dates

## Author
Yiranesh Visvanathan
