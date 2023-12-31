createBoard(16);
let color = "black";

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll(".board >div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", (event) => {
      if (color === "random") {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
        event.target.style.backgroundColor = color;
      }
    });
    board.appendChild(square);
  }
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
    square.style.filter="brightness(100%)";
  });
}

function changeSize(input) {
  input = +input;
  if (input < 2 || input > 100) {
    alert("The input must be within 2 and 100");
  } else {
    createBoard(input);
  }
}

function changeColor(input) {
  color = input;
}


