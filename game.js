class Game {
    constructor() {
        // Get references to various DOM elements
        this.gameScreen = document.getElementById("game-screen");
        this.gameIntro = document.getElementById("game-intro");
        this.gameEndScreen = document.getElementById("game-over");
        this.messiWin = document.getElementById("win-messi")
        // this.display = document.getElementById("imagen-fondo")
        this.buttonScore = document.getElementById("score-button")


        // Set the initial dimensions of the game screen
        this.width = "500px"; //1200
        this.height = "700px"; //800

        // Initialize game variables
        this.obstacles = [];
        this.score = 0
        this.scoreElement = document.getElementById("score-text")
        this.gameIsOver = false;
    }



    start() {
        // Hide the game intro and display the game screen
        this.messiWin.style.display = "none";
        this.gameIntro.style.display = "none";
        this.gameScreen.style.display = "block";
        this.buttonScore.style.display = "block";

        // Start the game loop
        this.gameLoop();
    }


    gameLoop() {
        // Check if the game is over; if so, stop the loop
        if (this.gameIsOver) {
            console.log("The game is over");
            return;
        }
        this.finishWin()
        this.finish()
        this.desappear()
        this.collissionDetectionForSquares()

        // Continue the game loop by requesting the next animation frame
        window.requestAnimationFrame(() => this.gameLoop());
        document.addEventListener("keydown", (event) => {

        });
    }




    desappear() {
        this.obstacles.forEach((obstacle) => {
            if (obstacle.offsetTop > 800) {
                obstacle.remove();
            }
        })
    }

    collissionDetectionForSquares() {
        const newPlayer = document.getElementById("player");
        this.obstacles.forEach(obstacle => {

            // In this case we check the collission with the reward that is already on the page


            const playerPosition = newPlayer.getBoundingClientRect();
            const obstaclePosition = obstacle.getBoundingClientRect();


            // COLLISSION DETECTION STANDARD ALGORITHM (SQUARE VS SQUARE)
            if (
                playerPosition.x < obstaclePosition.x + obstaclePosition.width &&
                playerPosition.x + playerPosition.width > obstaclePosition.x &&
                playerPosition.y < obstaclePosition.y + obstaclePosition.height &&
                playerPosition.y + playerPosition.height > obstaclePosition.y
            ) {


                if (obstacle.className === "vegetables") {
                    const errorSound = document.getElementById("error-sound");
                    errorSound.currentTime = 0;
                    errorSound.play();
                    this.score -= 1;
                    this.scoreElement.textContent = `SCORE: ${this.score}`;

                }

                else if (obstacle.className === "meat") {
                    const collisionSound = document.getElementById("collision-sound");
                    collisionSound.currentTime = 0;
                    collisionSound.play();
                    this.score += 1;
                    this.scoreElement.textContent = `SCORE: ${this.score}`;
                    console.log(this.score);
                }



                obstacle.remove()
            }
        });

    }



    finish() {

        if (this.score < 0) {
            this.gameIsOver = true
            this.gameScreen.style.display = "none";
            this.gameEndScreen.style.display = "block"
            this.buttonScore.style.display = "none"
        }


    }

    finishWin() {
        if (this.score >= 6) {
            this.gameIsOver = true
            this.gameScreen.style.display = "none";
            this.messiWin.style.display = "block"
            this.buttonScore.style.display = "none"

        }


    }
}
