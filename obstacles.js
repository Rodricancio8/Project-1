class Obstacles {
    constructor(gameScreen, game,) {
        // Game screen
        this.gameScreen = gameScreen;
        this.game = game
        this.width = this.gameScreen.offsetWidth;

        // Create a new img element for obstacles
        // this.element = document.createElement("img");
        // this.element.width = 50;
        // this.element.height = 50;
        // this.element.className = "obstacle"
        this.createEnemy()
        this.createScore()
        this.animateEnemies()
        this.animateScore()
        let obstacle = null
        let score = null
    }



    createEnemy() {

        this.obstacle = document.createElement("div")
        this.obstacle.className = "vegetables"


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


        let position = this.obstacle.offsetTop + 4;
        this.obstacle.style.top = position + "px";

        // console.log(this.obstacle.style.top)

        window.requestAnimationFrame(() => {
            this.animateEnemies()
        })
    }

    animateScore(){

        let position = this.score.offsetTop + 7;
        this.score.style.top = position + "px";
        // console.log(this.score.style.top)
        
        window.requestAnimationFrame(() => {
            this.animateScore()

        })
    }

    didCollide(obstacle) {
        const playerHitBox = this.element.getBoundingClientRect();
        const obstacleHitBox = obstacle.element.getBoundingClientRect();

        if (
            playerHitBox.left < obstacleHitBox.right &&
            playerHitBox.right > obstacleHitBox.left &&
            playerHitBox.top < obstacleHitBox.bottom &&
            playerHitBox.bottom > obstacleHitBox.top
        ) {
            return true;
        } else {
            return false;
        }
    }
}









// }


//   crear una funcion point values para luego sacar del score si quita o agrega score, usar condicional if
//   pointvalues

//   AGREGAR MEAT A LA FUNCION CREADA CON SET INTERVAL
