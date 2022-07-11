//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const addTask = document.getElementById("add-task-container");
let todoLists = [];
const newlist = document.querySelector(".list-container");
let listNumber = 0;
addTask.style.display = "none";
function CreateNewList() {
  addTask.style.display = "flex";
  listNumber++;
  const todoList = {
    active: true,
    id: Date.now(),
    value: "",
    number: listNumber,
  };
  todoLists.push(todoList);

  newlist.insertAdjacentHTML(
    "beforeend",
    `<div class="list">
<input id="${todoList.id}" class ="list-input"value="">
<p id="number-of-tasks"> </p>
        </div>`
  );
  let inputList = document.getElementById(todoList.id);
  console.log(todoLists);
  inputList.focus();
  inputList.addEventListener("change", function (event) {
    const inputId = event.target.id;
    updatePropertyValue(inputId);
  });
}

newListBtn.addEventListener("click", function () {
  for (let i = 0; i < todoLists.length; i++) {
    todoLists[i].active = false;
  }
  CreateNewList();
});

newlist.addEventListener("click", function (event) {
  if (event.target.classList.contains("list-input")) {
    const inputId = event.target.id;
    changeList(inputId);
    let listInput = document.getElementById(inputId);

    listInput.addEventListener("change", function (event) {
      const inputId = event.target.id;
      updatePropertyValue(inputId);
    });
  }
});
function changeList(elementId) {
  for (let i = 0; i < todoLists.length; i++) {
    todoLists[i].active = false;
  }
  const index = todoLists.findIndex((item) => item.id === Number(elementId));
  todoLists[index].active = true;
  updatePropertyValue(elementId);
  showTasks(index);
  addTask.style.display = "flex";
}

function showTasks(idList) {
  const todoItemsDiv = document.querySelectorAll(".task-each-container");
  for (let i = 0; i < todoItemsDiv.length; i++) {
    todoItemsDiv[i].style.display = "none";
    if (todoItems[i].checked === false) {
      todoItemsDiv[i].style.display = "flex";
    }
  }
  const lsNumber = todoLists[idList].number;
  const itemNumber = todoItems.filter(
    (item) => item.listNumber !== Number(lsNumber)
  );
  for (let i = 0; i < itemNumber.length; i++) {
    const parent = document.getElementById(itemNumber[i].id);
    console.log(parent);
    parent.style.display = "none";
  }
}
const todoHeader = document.querySelector(".task-list");
function updatePropertyValue(elementId) {
  const index = todoLists.findIndex((item) => item.id === Number(elementId));
  const newValue = document.getElementById(elementId);
  if (newValue.value !== "") {
    todoLists[index].value = newValue.value;
    todoHeader.textContent = todoLists[index].value;
  }
}

const tasksContaier = document.querySelector(".main-section");
const standardText = document.querySelectorAll("#standard-text");
const standardListsContainer = document.querySelectorAll(".lists-origin-each");

//add new tasks
let todoItems = [];
let input = document.querySelector("#add-task");
const list = document.querySelector(".task-container");

function addToDo(text, lsnumber) {
  const todo = {
    text,
    checked: false,
    important: false,
    id: Date.now(),
    listNumber: lsnumber,
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
  const active = todoLists.findIndex((item) => item.active === true);

  const numberList = todoLists[active].number;
  addToDo(text, numberList);
  input.value = "";
});

//checkboxes change if task is done and different class
function taskCompleted(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  if (todoItems[index].checked === false) {
    const todoDiv = document.getElementById(key);
    todoItems[index].checked = true;
    todoDiv.classList.add("completed");
    todoDiv.style.display = "none";
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

function standardList(list) {
  let allTodo = document.querySelectorAll(".task-each-container");
  for (let i = 0; i < allTodo.length; i++) {
    allTodo[i].style.display = "none";
  }
  if (list === "done") {
    todoHeader.textContent = "Completed";
    addTask.style.display = "none";
    for (let i = 0; i < todoItems.length; i++) {
      console.log(todoItems);
      const index = todoItems.filter((item) => item.checked !== false);
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
    addTask.style.display = "none";
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
    addTask.style.display = "none";
    for (let i = 0; i < allTodo.length; i++) {
      allTodo[i].style.display = "flex";
    }
  }
}
//search for tasks
function search() {
  const input = document.getElementById("search");
  let filter = input.value.toUpperCase();
  for (let i = 0; i < todoItems.length; i++) {
    for (text in todoItems[i]) {
      textValue = todoItems[i].text;
      if (textValue.toUpperCase().indexOf(filter) != -1) {
        console.log("Hello");
        const parent = document.getElementById(todoItems[i].id);
        console.log(parent);
        parent.style.display = "";
      } else {
        const parent = document.getElementById(todoItems[i].id);
        parent.style.display = "none";
      }
    }
  }
}
