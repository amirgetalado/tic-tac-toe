function startGame() {
  const startBtn = document.querySelector(".startBtn");
  const btns = document.querySelectorAll(".btn");

  startBtn.addEventListener("click", () => {
    for (btn of btns) {
      btn.textContent = "";
    }

    startBtn.textContent = "Restart";
  });
}

startGame();
