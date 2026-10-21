const priority = document.getElementById("priority");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function addTask() {
  const text = input.value.trim();
  if (text === "") return; // ignore empty tasks

  const li = document.createElement("li");
  li.classList.add(priority.value); // adds high, medium or low for the colour

  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    li.remove(); // Level 3: delete the task
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
}

addBtn.onclick = addTask; // Level 2: add a task
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});