//Different Boxes for Different Lists for example Grocceries, work etc.
const newListBtn = document.getElementById("new-list");
const newListDiv = document.querySelector(".list");
const newListArray = [newListDiv];

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
//checkboxes change if task is done and different class
//Priority of tasks /drag and drop / highlight
//clean list
//task assign to list
//add new tasks
const newTasksInput = document.getElementById("add-task");
const newTasksDiv = document.querySelector(".task-container");
let newTaskArray = [];

function createNewTask() {
  const idCheckboxRound = `checkbox-${newTaskArray.length}`;
  const idCheckboxStar = `star-${newTaskArray.length}`;

  newTasksDiv.innerHTML += `<div class="task-each-container"><div class="task-each">
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
  const taskCheckbox = document.getElementsByClassName("task-each-container");
  newTaskArray = taskCheckbox;
  console.log(newTaskArray);
}

newTasksInput.onchange = createNewTask;
//search for task
