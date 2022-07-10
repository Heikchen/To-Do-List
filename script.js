//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const newListDiv = document.querySelector(".list");
const newListArray = [newListDiv];
const tasksContaier = document.querySelector(".main-section");
const standardText = document.querySelectorAll("#standard-text");
const standardListsContainer = document.querySelectorAll(".lists-origin-each");

function CreateNewList() {
  newListDiv.style.display = "flex";
  let listElement = newListDiv.cloneNode(true);
  listElement.id = "new-List" + newListArray.length;
  document.querySelector(".list-container").appendChild(listElement);
  const newListChildren = document.querySelectorAll(
    "#new-List" + newListArray.length + " > *"
  );
  const newListInput = newListChildren[0];
  console.log(newListChildren);
  newListInput.removeAttribute("id");
  newListInput.id = "list-each" + newListArray.length;
  document.getElementById("list-each" + newListArray.length).focus();
  newListArray.push(listElement);
  newListDiv.style.display = "none";
}
newListBtn.onclick = CreateNewList;

//Priority of tasks /drag and drop / highlight
//clean list
//add new tasks
let todoItems = [];
let input = document.querySelector("#add-task");
const list = document.querySelector(".task-container");

function addToDo(text) {
  const todo = {
    text,
    checked: false,
    important: false,
    id: Date.now(),
  };
  todoItems.push(todo);
  let checkboxChecked = `checkbox-${todoItems.length}`;
  let starChecked = `star-${todoItems.length}`;
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="task-each-container" id="${todo.id}">
    <div class="task-each">
        <div class="round">
<input type="checkbox"  id=${checkboxChecked} data-key="${todo.id}" class="round-checkbox"/>
    <label for=${checkboxChecked}></label>
</div>
<p class="task-name">${todo.text}</p>
</div>
<div class="star">
    <input type="checkbox"  id=${starChecked}  data-key="${todo.id}" class="star-checkbox"/>
    <label for=${starChecked}></label>
</div>
</div>`
  );
}
input.addEventListener("change", function () {
  const text = input.value;
  addToDo(text);
  input.value = "";
});

//search for tasks
//checkboxes change if task is done and different class
function taskCompleted(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  if (todoItems[index].checked === false) {
    const todoDiv = document.getElementById(key);
    todoItems[index].checked = true;
    todoDiv.classList.add("completed");
  } else {
    const todoDiv = document.getElementById(key);
    todoItems[index].checked = false;
    todoDiv.classList.remove("completed");
  }
}
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("round-checkbox")) {
    const keyItem = event.target.dataset.key;
    taskCompleted(keyItem);
  }
});

function taskImportant(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  if (todoItems[index].important === false) {
    todoItems[index].important = true;
  } else {
    todoItems[index].important = false;
  }
}
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("star-checkbox")) {
    const keyItem = event.target.dataset.key;
    taskImportant(keyItem);
  }
});
const todoHeader = document.querySelector(".task-list");
function standardList(list) {
  let allTodo = document.querySelectorAll(".task-each-container");
  for (let i = 0; i < allTodo.length; i++) {
    allTodo[i].style.display = "none";
  }
  if (list === "done") {
    todoHeader.textContent = "Completed";
    for (let i = 0; i < todoItems.length; i++) {
      console.log(todoItems);
      const index = todoItems.filter((item) => item.checked !== false);

      console.log(index[i]);
      if (index.length > 0) {
        for (let i = 0; i < index.length; i++) {
          const parent = document.getElementById(index[i].id);
          console.log(parent);
          parent.style.display = "flex";
        }
      } else if (index.length === 0) {
        allTodo[i].style.display = "none";
      }
    }
  } else if (list === "important") {
    todoHeader.textContent = "Important";
    for (let i = 0; i < todoItems.length; i++) {
      const index = todoItems.filter((item) => item.important !== false);

      if (index.length > 0) {
        for (let i = 0; i < index.length; i++) {
          const parent = document.getElementById(index[i].id);
          parent.style.display = "flex";
        }
      } else if (index.length === 0) {
        allTodo[i].style.display = "none";
      }
    }
  } else if (list === "all") {
    todoHeader.textContent = "All";
    for (let i = 0; i < allTodo.length; i++) {
      allTodo[i].style.display = "flex";
    }
  }
}
