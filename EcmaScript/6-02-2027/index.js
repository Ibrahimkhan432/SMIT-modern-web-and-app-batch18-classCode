const addTodo = document.getElementById("addTodo");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Load the saved todos when the page loads
getData();

addTodo.addEventListener("click", () => {
  const todoText = todoInput.value;
  if (todoText) {
    console.log(todoText);

    // Create a new li element
    const li = document.createElement("li");
    li.textContent = todoText;

    // Append it to the todo list
    todoList.appendChild(li);

    // Save the new todo to localStorage
    saveData(todoText);
  }
});

function saveData(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];  // Retrieve existing todos or start with an empty array
  todos.push(todoText);  // Add the new todo
  localStorage.setItem("todos", JSON.stringify(todos));  // Save the updated list back to localStorage
}

function getData() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  
  // Populate the list with saved todos if they exist
  savedTodos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}
