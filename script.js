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

let currentTasks = [];

function createNewTask() {
  const currentTasksHalf = currentTasks.length / 2;
  console.log(currentTasksHalf);
  const idCheckboxRound = `checkbox-${currentTasksHalf}`;
  const idCheckboxStar = `star-${currentTasksHalf}`;
  const idCheckboxDivRound = `round-${currentTasksHalf}`;
  const idInput = `input-${currentTasksHalf}`;
  console.log(newTasksDiv);
  for (i = 0; i < newTasksDiv.length; i++) {
    if (newTasksDiv[i].style.display === "flex") {
      const listElementNumber = newTasksDiv[i].id;
      newTasksDiv[
        i
      ].innerHTML += `<div class="task-each-container" id="${idCheckboxDivRound}">
  <div class="task-each" >
        <div class="round" >
<input type="checkbox" name="checkbox" id="${idCheckboxRound}" onclick="switchClass('${idCheckboxDivRound}','${idInput}', '${currentTasksHalf}', '${listElementNumber}')" />
<label for="${idCheckboxRound}"></label>
</div>
<input class="task-name" id="${idInput}"type="text" value="${newTasksInput.value}">
</div>
<div class="star">
    <input type="checkbox" id="${idCheckboxStar}" onclick="checkedStar('${idCheckboxDivRound}','${currentTasksHalf}')"/>
    <label for="${idCheckboxStar}"></label>
</div>
</div>
`;
      cloneElement(idCheckboxDivRound, "All");
      const taskCheckbox = document.querySelectorAll(".task-each-container");
      currentTasks = taskCheckbox;
      newTasksInput.value = "";
      console.log(currentTasks);
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

function switchClass(element, inputElement, number, listElement) {
  let targetDiv = document.querySelectorAll(`#${element}`);
  console.log(targetDiv);

  const targetInput = document.getElementById(inputElement);
  targetDiv[0].classList.toggle("completed");
  targetInput.classList.toggle("completed");
  let listAllElement = document.querySelectorAll("#All.standard-list");
  checkedStandardLists(listAllElement, targetDiv, number);
  isChecked(targetDiv, listElement);
}
function checkedStandardLists(idList, targetDiv, number) {
  let listCompletedElement = document.querySelectorAll(
    "#Completed.standard-list"
  );
  let listElement = idList[0];
  if (targetDiv[0].children[0].children[0].children[0].checked) {
    console.log(targetDiv[0].children[1].children[0]);
    console.log(number);
    listElement.children[
      number
    ].children[0].children[0].children[0].checked = true;

    listElement.children[number].classList.add("completed");
    listElement.children[number].children[0].children[1].classList.add(
      "completed"
    );
  } else {
    console.log(targetDiv);
    console.log(listCompletedElement);
    listElement.children[
      number
    ].children[0].children[0].children[0].checked = false;
    listElement.children[number].classList.remove("completed");
    listElement.children[number].children[0].children[1].classList.remove(
      "completed"
    );
    listCompletedElement[0].children[
      number
    ].children[0].children[0].children[0].checked = false;

    listCompletedElement[0].children[number].classList.remove("completed");
    listCompletedElement[0].children[
      number
    ].children[0].children[1].classList.remove("completed");
  }
}
function checkedStar(element, number) {
  let listImportantElement = document.querySelectorAll(
    "#Important.standard-list"
  );
  let targetDiv = document.querySelectorAll(`#${element}`);
  let listElement = document.querySelectorAll("#All.standard-list")[0];
  console.log(listElement);
  if (targetDiv[0].children[1].children[0].checked) {
    console.log(number);
    console.log(listElement.children[number].children[1].children[0]);
    listElement.children[number].children[1].children[0].checked = true;
    cloneElement(element, "Important");
  } else {
    listElement.children[number].children[1].children[0].checked = false;
    listImportantElement[0].children[
      number
    ].children[1].children[0].checked = false;
    console.log(
      listImportantElement[0].children[number].children[1].children[0]
    );
    deleteClone(number);
  }
}

function isChecked(divChecked, listElement) {
  let listCompleted = document.querySelector("#Completed.standard-list");
  let parent = divChecked[0].parentElement.id;
  if (
    divChecked[1].children[0].children[0].children[0].checked &&
    parent != "All"
  ) {
    listCompleted.appendChild(divChecked[0]);
  } else if (!divChecked[0].children[0].children[0].children[0].checked) {
    document.getElementById(listElement).appendChild(divChecked[1]);
  }
}
function cloneElement(cloneNode, list) {
  let divClone = document.getElementById(cloneNode);
  let cloneCompleted = divClone.cloneNode(true);
  document.querySelector(`#${list}`).appendChild(cloneCompleted);
}

function deleteClone(element) {
  let listImportantElement = document.querySelectorAll(
    "#Important.standard-list"
  );
  listImportantElement[0].children[element].remove();
}
