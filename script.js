//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const newListDiv = document.querySelector(".list");
const mainSection = document.querySelector(".task-header");
let newListArray = [];
let newTasksDiv = document.querySelectorAll(".task-container");

function CreateNewList() {
  newListDiv.style.display = "flex";
  for (i = 0; i < newTasksDiv.length; i++) {
    newTasksDiv[i].style.display = "none";
  }
  console.log(newTasksDiv);
  let listElement = newListDiv.cloneNode(true);
  listElement.id = "new-List" + newListArray.length;
  document.querySelector(".list-container").appendChild(listElement);
  const newListChildren = document.querySelectorAll(
    "#new-List" + newListArray.length + " > *"
  );
  const newListInput = newListChildren[0];
  mainSection.insertAdjacentHTML(
    "afterend",
    `<div class="task-container" id="list-${newListArray.length}">

  </div>`
  );
  newTasksDiv = document.querySelectorAll(".task-container");
  console.log(newTasksDiv);
  newTasksDiv[0].style.display = "flex";
  newListInput.removeAttribute("id");
  newListInput.id = newListArray.length;
  document.getElementById(newListArray.length).focus();
  newListDiv.style.display = "none";
  newListArray.push(listElement);
  console.log(newListArray);
}
newListBtn.onclick = CreateNewList;
//checkboxes change if task is done and different class
//Priority of tasks /drag and drop / highlight
//clean list
//task assign to list
function switchList() {
  for (i = 0; i < newTasksDiv.length; i++) {
    newTasksDiv[i].style.display = "none";
  }
  const currentActiveInput = document.activeElement.id;
  const currentActiveDiv = document.getElementById(
    `list-${currentActiveInput}`
  );
  currentActiveDiv.style.display = "flex";
}
//add new tasks
const newTasksInput = document.getElementById("add-task");

let current_tasks = [];

function createNewTask() {
  const idCheckboxRound = `checkbox-${current_tasks.length}`;
  const idCheckboxStar = `star-${current_tasks.length}`;
  console.log(newTasksDiv);
  for (i = 0; i < newTasksDiv.length; i++) {
    if (newTasksDiv[i].style.display === "flex") {
      newTasksDiv[i].innerHTML += `<div class="task-each-container">
  <div class="task-each">
        <div class="round">
<input type="checkbox"  id="${idCheckboxRound}" />
<label for="${idCheckboxRound}"></label>
</div>
<input class="task-name" type="text" value="${newTasksInput.value}">
</div>
<div class="star">
    <input type="checkbox" id="${idCheckboxStar}" />
    <label for="${idCheckboxStar}"></label>
</div>
</div>
`;
      const taskCheckbox = document.querySelectorAll(".task-each-container");
      current_tasks = taskCheckbox;
      newTasksInput.value = "";
      console.log(current_tasks);
    }
  }
}
const headerTask = document.querySelector(".task-list");
function headerTaskBoard() {}
newTasksInput.onchange = createNewTask;
//search for task
