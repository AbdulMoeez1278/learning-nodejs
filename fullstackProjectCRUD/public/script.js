// // FIRST REVISION
// // Get DOM elements
// const form = document.getElementById("todo-form");
// const input = document.getElementById("todo-input");
// const list = document.getElementById("todo-list");

// // API Endpoint
// const API_URL = "/api/todos";

// // Load todos on page load
// document.addEventListener("DOMContentLoaded", fetchTodos);

// // Fetch all todos from the server and render
// async function fetchTodos() {
//   try {
//     const res = await fetch(API_URL);
//     const todos = await res.json();
//     list.innerHTML = "";
//     todos.forEach((todo) => addTodoToDOM(todo));
//   } catch (error) {
//     console.error("Error fetching todos:", error);
//   }
// }

// // Add a single todo to the DOM
// function addTodoToDOM(todo) {
//   const li = document.createElement("li");
//   li.className = "todo-item";

//   const todoText = document.createElement("span");
//   todoText.className = "todo-text";
//   todoText.innerHTML = `<i class="fas fa-check-circle"></i> ${todo.text}`;

//   // Button group container
//   const btnGroup = document.createElement("div");
//   btnGroup.className = "btn-group";

//   // Edit Button
//   const editBtn = document.createElement("button");
//   editBtn.className = "edit-btn";
//   editBtn.setAttribute("aria-label", "Edit todo");
//   editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
//   editBtn.onclick = () => {
//     const newText = prompt("Edit todo:", todo.text);
//     if (newText && newText.trim() !== "") {
//       updateTodo(todo._id, newText.trim());
//     }
//   };

//   // Delete Button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.className = "delete-btn";
//   deleteBtn.setAttribute("aria-label", "Delete todo");
//   deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
//   deleteBtn.onclick = () => {
//     if (confirm("Are you sure you want to delete this todo?")) {
//       deleteTodo(todo._id);
//     }
//   };

//   btnGroup.appendChild(editBtn);
//   btnGroup.appendChild(deleteBtn);

//   li.appendChild(todoText);
//   li.appendChild(btnGroup);
//   list.appendChild(li);
// }

// // Create a new todo via POST
// async function createTodo(text) {
//   try {
//     await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });
//     fetchTodos();
//   } catch (error) {
//     console.error("Error creating todo:", error);
//   }
// }

// // Update a todo by ID via PUT
// async function updateTodo(id, text) {
//   try {
//     await fetch(`${API_URL}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });
//     fetchTodos();
//   } catch (error) {
//     console.error("Error updating todo:", error);
//   }
// }

// // Delete a todo by ID via DELETE
// async function deleteTodo(id) {
//   try {
//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     fetchTodos();
//   } catch (error) {
//     console.error("Error deleting todo:", error);
//   }
// }

// // Handle form submit
// form.onsubmit = (e) => {
//   e.preventDefault();
//   const text = input.value.trim();
//   if (text) {
//     createTodo(text);
//     input.value = "";
//   }
// };

// SECOND REVISION

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-completed");
const darkModeToggle = document.getElementById("dark-mode-toggle");

const API_URL = "/api/todos";

// Load todos and dark mode on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchTodos();
  initDarkMode();
});

// Fetch all todos
async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    const todos = await res.json();
    list.innerHTML = "";
    todos.forEach((todo) => addTodoToDOM(todo));
  } catch (error) {
    console.error("Failed to fetch todos:", error);
  }
}

// Add todo to DOM
function addTodoToDOM(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (todo.completed) li.classList.add("completed");

  const todoText = document.createElement("span");
  todoText.className = "todo-text";
  todoText.innerHTML = `<i class="fas fa-check-circle"></i> ${todo.text}`;
  todoText.onclick = () => toggleCompleted(todo._id, !todo.completed);

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
  editBtn.title = "Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit todo:", todo.text);
    if (newText && newText.trim()) {
      updateTodo(todo._id, newText.trim());
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteBtn.title = "Delete";
  deleteBtn.onclick = () => {
    showConfirm("Are you sure you want to delete this todo?", () => {
      deleteTodo(todo._id);
      showMessage("Todo deleted successfully!", "success");
    });
  };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(todoText);
  li.appendChild(btnGroup);
  list.appendChild(li);
}

// Create todo
async function createTodo(text) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false }),
    });
    fetchTodos();
  } catch (error) {
    console.error("Failed to create todo:", error);
  }
}

// Update todo text
async function updateTodo(id, text) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    fetchTodos();
  } catch (error) {
    console.error("Failed to update todo:", error);
  }
}

// Toggle completed
async function toggleCompleted(id, completed) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    fetchTodos();
  } catch (error) {
    console.error("Failed to toggle completed:", error);
  }
}

// Delete todo
async function deleteTodo(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTodos();
  } catch (error) {
    console.error("Failed to delete todo:", error);
  }
}

// Handle form submit
form.onsubmit = (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    createTodo(text);
    input.value = "";
  }
};

// Clear all todos (with on-screen message)
clearBtn.onclick = async () => {
  try {
    const res = await fetch(API_URL);
    const todos = await res.json();

    if (todos.length === 0) {
      showMessage("No todos to clear.", "warning");
      return;
    }

    const confirmClear = confirm(
      `Are you sure you want to delete all ${todos.length} todos?`
    );
    if (!confirmClear) return;

    await Promise.all(
      todos.map((todo) => fetch(`${API_URL}/${todo._id}`, { method: "DELETE" }))
    );

    showMessage("All todos cleared successfully!", "success");
    fetchTodos();
  } catch (error) {
    console.error("Failed to clear all todos:", error);
    showMessage("An error occurred while clearing todos.", "warning");
  }
};

// Dark mode
function initDarkMode() {
  const isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDark);
  updateDarkIcon(isDark);

  darkModeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    const newMode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", newMode);
    updateDarkIcon(newMode);
  };
}

function updateDarkIcon(isDark) {
  darkModeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

// status message
function showMessage(text, type = "success") {
  const messageEl = document.getElementById("status-message");
  messageEl.textContent = text;
  messageEl.className = ""; // Reset previous classes
  messageEl.style.display = "block";
  messageEl.classList.add(
    type === "success" ? "status-success" : "status-warning"
  );

  // Auto-hide after 3 seconds
  setTimeout(() => {
    messageEl.style.display = "none";
  }, 3000);
}

// Ask to delete or not
function showConfirm(message, onConfirm) {
  const box = document.getElementById("confirm-box");
  const text = document.getElementById("confirm-text");
  const yesBtn = document.getElementById("confirm-yes");
  const noBtn = document.getElementById("confirm-no");

  text.textContent = message;
  box.classList.remove("hidden");

  // Clean up previous handlers
  yesBtn.onclick = () => {
    onConfirm(); // run callback
    box.classList.add("hidden");
  };
  noBtn.onclick = () => {
    box.classList.add("hidden");
  };
}
