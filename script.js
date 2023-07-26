window.onload = function () {
  // DOM elements
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameScreen = document.getElementById("game-screen");

  // Initialize game-related variables
  // Hold the current game instance
  let game;
  // Create a new player instance and bind it to the game screen
  const newPlayer = new Player(gameScreen);

  // Add a click event listener to the "Start" button
  startButton.addEventListener("click", function () {
    startGame();
  });

  // Function to start the game
  function startGame() {
    // Create a new game instance
    game = new Game();
    // Start the game
    game.start();
    console.log("startGame");
  }

  // Function to handle keyboard input and move the player
  function handleKeyboardInput(key) {
    if (key === "ArrowLeft") {
      newPlayer.playerMove("left");
    } else if (key === "ArrowRight") {
      newPlayer.playerMove("right");
    }
  }

  setInterval(() => {
    new Obstacles(gameScreen, game)
    console.log(game)
  }, 4000)
  


  // Add a keydown event listener to the window to capture keyboard input
  window.addEventListener("keydown", (event) => {
    // Prevent default keyboard behavior (e.g., scrolling)
    event.preventDefault()
    // Call the function to handle keyboard input
    handleKeyboardInput(event.key)

  })

  


}
