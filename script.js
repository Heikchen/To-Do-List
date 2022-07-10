//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const newListDiv = document.querySelector(".list");
const newListArray = [newListDiv];
let todoLists = [];
const newlist = document.querySelector(".list-container");
let listNumber = 0;
function CreateNewList() {
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
<p id="number-of-tasks"> 5</p>
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

//checkboxes change if task is done and different class
//Priority of tasks /drag and drop / highlight
//clean list
//add new tasks
//search for tasks
