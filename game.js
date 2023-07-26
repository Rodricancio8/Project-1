class Game {
    constructor() {
        // Get references to various DOM elements
        this.gameScreen = document.getElementById("game-screen");
        this.gameIntro = document.getElementById("game-intro");
        this.gameEndScreen = document.getElementById("game-over");

        // Set the initial dimensions of the game screen
        this.width = "500px"; //1200
        this.height = "700px"; //800

        // Initialize game variables
        this.obstacles = [];
        this.score = 0;
        this.gameIsOver = false;
    }

    start() {
        // Hide the game intro and display the game screen
        this.gameIntro.style.display = "none";
        this.gameScreen.style.display = "block";
        // this.gameScreen.style.width = this.width
        // this.gameScreen.style.height = this.height

        // Start the game loop
        this.gameLoop();
    }

    gameLoop() {
        // Check if the game is over; if so, stop the loop
        if (this.gameIsOver) {
            console.log("The game is over");
            return;
        }

        // Continue the game loop by requesting the next animation frame
        window.requestAnimationFrame(() => this.gameLoop());
        document.addEventListener("keydown",(event) => {
         
             if (!this.gameIsOver) {
                 playerMove(event.key)
             }
             });
    }




    update() {
        // CONTENIDO AQUI
    }
}