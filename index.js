createBoard(16);
let color = "black";

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll(".board >div");
  squares.forEach((div) => div.remove());
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    square.addEventListener("mouseover", (event) => {
      if (event.target.style.backgroundColor == color){
        event.target.style.filter= color;
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

function changeColorBlue() {
  color = "blue";
}
function changeColorOrange() {
  color = "orange";
}
function changeColorWhite() {
  color = "white";
}
function changeColorBlack() {
  color = "black";
}
