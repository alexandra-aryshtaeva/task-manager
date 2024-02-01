// let input = document.querySelector("input");
// const button = document.querySelector("button");

// let list = document.getElementById("myList");

// button.addEventListener("click", () => {
//   const task = document.createElement("li");
//   task.innerText = input.value;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "delete";

//   task.appendChild(deleteBtn);
//   list.appendChild(task);

//   input.value = "";
//   if (task.innerText === "") {
//     return;
//   }

//   deleteBtn.addEventListener("click", () => {
//     //new list is a copy of list but it becomes an array
//     let newList = Array.from(list.children);

//     // modify newList with an array method
//     newList = newList.filter((_, index) => {
//       if (index > 1) return true;
//     });

//     // the final result is going inside the original l;ist
//     list.innerHTML = "";
//     newList.forEach((node) => {
//       list.appendChild(node);
//     });
//   });
// });

// ______________________________________________

let board = [];
writteTask("water", "butter");

function writteTask(...task) {
  board.push(...task);
}
board.pop();

console.log(board);

// _______________________________________________________

let input = document.querySelector("input");

const button = document.querySelector("button");

let list = [];

function displayList() {
  document.getElementById("board").innerHTML = "";
  list.forEach((node) => {
    document.getElementById("board").appendChild(node);
  });
}

button.addEventListener("click", () => {
  let task = document.createElement("li");
  task.innerText = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  task.appendChild(deleteBtn);
  input.value = "";
  list.push(task);

  deleteBtn.addEventListener("click", () => {
    list = list.filter((t) => {
      if (task === t) {
        return false;
      }
      return true;
    });

    displayList();
  });

  if (task.innerText === "") {
    return;
  }

  displayList();
});
