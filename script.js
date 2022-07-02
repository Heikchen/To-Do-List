//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const mainSection = document.querySelector(".task-header");
const newlist = document.querySelector(".list-container");
let newListArray = document.querySelectorAll(".list");
let headerTask = document.querySelector(".task-list");
let newTasksDiv = document.querySelectorAll(".task-container");

function CreateNewList() {
  for (i = 0; i < newTasksDiv.length; i++) {
    newTasksDiv[i].style.display = "none";
  }
  headerTask.innerText = "";
  console.log(newTasksDiv);
  newlist.insertAdjacentHTML(
    "afterbegin",
    `<div class="list" >
<input id="${newListArray.length}" ondblclick="switchList()" onchange="headerTaskBoard()"class ="list-input"value="">
<p id="number-of-tasks"> 5</p>
        </div>`
  );
  console.log(newListArray);
  mainSection.insertAdjacentHTML(
    "afterend",
    `<div class="task-container" id="list-${newListArray.length}">

  </div>`
  );
  headerTaskBoard();
  newTasksDiv = document.querySelectorAll(".task-container");

  console.log(newTasksDiv);
  console.log(headerTask);
  newTasksDiv[0].style.display = "flex";
  document.getElementById(newListArray.length).focus();
  newListArray = document.querySelectorAll(".list");
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
  console.log(currentActiveInput);
  const currentActiveDiv = document.getElementById(
    `list-${currentActiveInput}`
  );
  console.log(currentActiveDiv);
  currentActiveDiv.style.display = "flex";
  headerTaskBoard();
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

function headerTaskBoard() {
  console.log(newTasksDiv);
  for (i = 0; i < newTasksDiv.length; i++) {
    if (newTasksDiv[i].style.display === "flex") {
      const changeValue = document.querySelectorAll(".list-input");

      console.log(changeValue);
      headerTask.innerText = changeValue[i].value;
    }
  }
}

newTasksInput.onchange = createNewTask;
//search for task
