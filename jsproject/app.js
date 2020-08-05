//selectors
console.log("hello");

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);

//function

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo); //sticking the contents of the sub div into the main div

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class = "fas fa-check"></i>';
  completeButton.classList.add("complete-button");
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
} 

// for the functionality of the delete button 
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}