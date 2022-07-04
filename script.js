//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const mainSection = document.querySelector(".task-header");
const newlist = document.querySelector(".list-container");
const tasksContaier = document.querySelector(".main-section");
const addTask = document.getElementById("add-task-container");
let newListArray = document.querySelectorAll(".list");
let headerTask = document.querySelector(".task-list");
let newTasksDiv = document.querySelectorAll(".task-container");
let standardLists = document.querySelectorAll(".standard-list");
const standardText = document.querySelectorAll("#standard-text");
const standardListsContainer = document.querySelectorAll(".lists-origin-each");
console.log(standardListsContainer);
function createStandardLists() {
  for (i = 0; i < standardListsContainer.length; i++) {
    const newStandardDiv = document.createElement("div");
    newStandardDiv.setAttribute("id", `${standardText[i].innerText}`);
    newStandardDiv.setAttribute("class", "standard-list");
    tasksContaier.children[0].insertAdjacentElement("afterEnd", newStandardDiv);
  }
}

createStandardLists();
function CreateNewList() {
  standardLists = document.querySelectorAll(".standard-list");
  hideTaskBoards();
  console.log(standardLists);
  addTask.style.display = "flex";
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

//Priority of tasks /drag and drop / highlight
//clean list
//task assign to list
function switchList() {
  hideTaskBoards();
  addTask.style.display = "flex";
  const currentActiveInput = document.activeElement.id;
  console.log(currentActiveInput);
  const currentActiveDiv = document.getElementById(
    `list-${currentActiveInput}`
  );
  console.log(currentActiveDiv);
  currentActiveDiv.style.display = "flex";
  headerTaskBoard();
}
for (i = 0; i < standardListsContainer.length; i++) {
  standardListsContainer[i].addEventListener("dblclick", function (event) {
    hideTaskBoards();
    const standardHeader = event.target.innerText;
    headerTask.textContent = standardHeader;
    console.log(standardHeader);
    if (standardHeader == "All") {
      document.getElementById("All").style.display = "flex";
    } else if (standardHeader == "Completed") {
      document.getElementById("Completed").style.display = "flex";
    } else if (standardHeader == "Important") {
      document.getElementById("Important").style.display = "flex";
    }
    addTask.style.display = "none";
  });
}
function hideTaskBoards() {
  for (i = 0; i < newTasksDiv.length; i++) {
    newTasksDiv[i].style.display = "none";
  }
  for (i = 0; i < standardListsContainer.length; i++) {
    standardLists = document.querySelectorAll(".standard-list");
    standardLists[i].style.display = "none";
  }
}
//add new tasks
const newTasksInput = document.getElementById("add-task");

let current_tasks = [];

function createNewTask() {
  const idCheckboxRound = `checkbox-${current_tasks.length}`;
  const idCheckboxStar = `star-${current_tasks.length}`;
  const idCheckboxDivRound = `round-${current_tasks.length}`;
  const idInput = `input-${current_tasks.length}`;
  console.log(newTasksDiv);
  for (i = 0; i < newTasksDiv.length; i++) {
    if (newTasksDiv[i].style.display === "flex") {
      newTasksDiv[
        i
      ].innerHTML += `<div class="task-each-container" id="${idCheckboxDivRound}">
  <div class="task-each" >
        <div class="round" >
<input type="checkbox" name="checkbox" id="${idCheckboxRound}" onclick="switchClass('${idCheckboxDivRound}','${idInput}')" />
<label for="${idCheckboxRound}"></label>
</div>
<input class="task-name" id="${idInput}"type="text" value="${newTasksInput.value}">
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
      headerTask.textContent = changeValue[i].value;
    }
  }
}

newTasksInput.onchange = createNewTask;

//search for task
//checkboxes change if task is done and different class

/*for (i = 0; i < current_tasks.length; i++) {
  completedCurrentTask[0].addEventListener("click", function () {
    console.log("hello");
  });
} */
function switchClass(element, inputElement) {
  let targetDiv = document.getElementById(element);
  const targetInput = document.getElementById(inputElement);
  targetDiv.classList.toggle("completed");
  targetInput.classList.toggle("completed");
}
