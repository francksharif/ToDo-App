const addForm = document.querySelector(".add"); // Get form reference to add task
const todos = document.querySelector(".todos"); // Get Ul reference
const search = document.querySelector(".search input"); // Get search form input

//This fucntion is used to add a new task with li template and updated by adding it to Ul form with todos.innerHtml += html;
const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center"  >
      <span>${todo}</span>
      <i class="fa-solid fa-trash-can delete"></i>
    </li>`;

  todos.innerHTML += html;
};

//Call action after user submit the adding task

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  // check that user typed something first before we add it
  if (todo.length) {
    generateTemplate(todo); // add task to template after user submit it
    addForm.reset(); // reset input bar with nothing inside
  }
});

//delete todos

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//filter todos tasks in search

const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(todos.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

//search form

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
