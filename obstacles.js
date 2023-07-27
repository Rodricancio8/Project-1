class Obstacles {
    constructor(gameScreen, game,) {
        // Game screen
        this.gameScreen = gameScreen;
        this.game = game
        this.width = this.gameScreen.offsetWidth;

        this.createEnemy()
        this.createScore()
        this.animateEnemies()
        this.animateScore()
       
    }



    createEnemy() {

        this.obstacle = document.createElement("div")
        this.obstacle.className = "vegetables"
        this.gameScreen.appendChild(this.obstacle)


        let randomNumber = Math.floor(Math.random() * this.gameScreen.offsetWidth)

        this.obstacle.style.left = randomNumber + "px"

        this.game.obstacles.push(this.obstacle)

        document.getElementById("game-screen").appendChild(this.obstacle)

    }

    createScore() {

        this.score = document.createElement("div")
        this.score.className = "meat"


        let randomNumber2 = Math.floor(Math.random() * this.gameScreen.offsetWidth)

        this.score.style.left = randomNumber2 + "px"

        this.game.obstacles.push(this.score)

        document.getElementById("game-screen").appendChild(this.score)

    }


    animateEnemies() {


        let position = this.obstacle.offsetTop + 9;
        this.obstacle.style.top = position + "px";

        window.requestAnimationFrame(() => {
            this.animateEnemies()
        })
    }

    animateScore() {

        let position = this.score.offsetTop + 7;
        this.score.style.top = position + "px";
        // console.log(this.score.style.top)

        window.requestAnimationFrame(() => {
            this.animateScore()
        
        })
    }


}
