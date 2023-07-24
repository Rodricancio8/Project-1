class Game {
    constructor() {
        this.gameScreen = document.getElementById("game-screen")
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
        )


        this.startScreen = document.getElementById("game-intro")
        this.width = "500px"
        this.height = "700px"
        this.obstacles = []
        this.score = 0
        this.gameIsOver = false
        this.gameEndScreen = document.getElementById("game-over")
    }

    start() {
        // this.gameScreen.style.width = this.width
        // this.gameScreen.style.height = this.height


        this.startScreen.style.display= "none"


        this.gameScreen.style.display = "block"


        this.gameLoop()
    }
}