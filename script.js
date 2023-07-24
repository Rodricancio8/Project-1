window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    startButton.addEventListener("click", function () {
        startGame();
    });

    function startGame() {
        game = new Game();
        game.start();
        console.log("startGame")
    }

    function handleKeyboardInput(key){
        if(key === "ArrowUp"){
          game.player.directionY = -1;
        }
        else if(key === "ArrowDown"){
          game.player.directionY = 1;
        }
        else if(key === "ArrowLeft"){
          game.player.directionX = -1;
        }
        else if(key === "ArrowRight"){
          game.player.directionX = 1;
        }
      }
      window.addEventListener("keydown",(event)=>{
        handleKeyboardInput(event.key)
      })
}

