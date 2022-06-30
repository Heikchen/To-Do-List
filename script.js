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
//add new tasks
//search for tasks
