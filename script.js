let input = document.querySelector("input");
const button = document.querySelector("button");

let list = document.getElementById("myList");

button.addEventListener("click", () => {
  const task = document.createElement("li");

  const deleteBtn = document.createElement("button");

  task.innerText = input.value;
  deleteBtn.innerText = "delete";

  input.value = "";
  if (task.innerText === "") {
    return;
  }

  list.appendChild(task);
  task.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    let newList = Array.from(list.children);
    //
    newList = newList.pop();
    return (list.innerHTML = newList.innerHTML);
  });
});

// ______________________________________________
// let board = [];
// let boardTasks = writteTask("water", "butter");

// function writteTask(...task) {
//   board.push(task);
//   return (board = board[0]);
// }
// board.pop();

// console.log(board);
