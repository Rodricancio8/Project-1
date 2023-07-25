class Game {
    constructor() {
        this.gameScreen = document.getElementById("game-screen")

        this.gameIntro = document.getElementById("game-intro")
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


        this.gameIntro.style.display= "none"


        this.gameScreen.style.display = "block"


        this.gameLoop()
    }

    gameLoop() {
    
        if (this.gameIsOver) {
            console.log("The game is over")
            return
        }

        this.update()

        window.requestAnimationFrame(() => this.gameLoop())

    }


    update() {

    }
}