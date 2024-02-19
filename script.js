//placeMark
//Check For Win
//Check For Draw
//Switch Turns
const TicTacToe = (() => {
  const playerX = "X";
  const playerO = "O";
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  const btns = document.querySelectorAll("#btn");
  const startBtn = document.querySelector("#startBtn");
  const winningMessage = document.querySelector("#winningMessage");
  let playerTurn;

  startBtn.addEventListener("click", () => {
    startGame();
  });

  function startGame() {
    playerTurn = false;
    btns.forEach((btn) => {
      btn.innerText = "";
    });
    winningMessage.innerText = "";
    btns.forEach((btn) => {
      btn.removeEventListener("click", handleClick);
      btn.addEventListener("click", handleClick, { once: true }); //once:true makes the eventListener trigger only once
    });
  }

  function endGame(draw) {
    if (draw) {
      winningMessage.innerText = `It is a Draw!`;
    } else {
      winningMessage.innerText = `${
        playerTurn ? "Player O" : "Player X"
      } is the winner!`;
      btns.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
    }
    startBtn.innerText = `Play Again`;
  }

  function handleClick(e) {
    const btn = e.target;
    const currentTurn = playerTurn ? playerO : playerX;
    winningMessage.innerText = `${playerTurn ? "Player X" : "Player O"}'s turn`;
    placeMark(btn, currentTurn);
    if (checkWin(currentTurn)) {
      endGame(false);
    } else if (isDraw()) {
      endGame(true);
    } else {
      switchTurn();
    }
  }

  function placeMark(btn, currentTurn) {
    btn.innerText = currentTurn;
  }

  function switchTurn() {
    playerTurn = !playerTurn;
  }

  function checkWin(currentTurn) {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return btns[index].innerText.includes(currentTurn);
      });
    });
  }

  function isDraw() {
    return [...btns].every((btn) => {
      return btn.innerText.includes(playerX) || btn.innerText.includes(playerO);
    });
  }

  return {
    startgame,
  };
})();
