let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player checking

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// Reste game function

// add Eventlistenr for event
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
// diable function after get the winner
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
// show  the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

// fucntion for checking winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
// reset function for restart the game
const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}

// enable the boxes after click the reset button
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText=""
    }
};
newGamebtn.addEventListener("click", resetGame);
resetGame.addEventListener("click",resetGame)
