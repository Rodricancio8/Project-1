window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameScreen = document.getElementById("game-screen")
  let game;
  const newGame = new Game();
  const newPlayer = new Player(gameScreen);




  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
    console.log("startGame")
  }

  function handleKeyboardInput(key) {

    if (key === "ArrowLeft"){ 
      newPlayer.x -= 10;

    }
    else if (key === "ArrowRight") {
      newPlayer.x += 10;
    
    }
  newPlayer.checkBoundaries()

  }

  window.addEventListener("keydown", (event) => {
    event.preventDefault()
    handleKeyboardInput(event.key)
  })
}