class Obstacles {
    constructor(gameScreen, game) {
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
    }


    createEnemy() {

        let obstacle = document.createElement("div")
        obstacle.className = "vegetables"

        let randomNumber = Math.floor(Math.random() * this.gameScreen.offsetWidth)

        obstacle.style.left = randomNumber + "px"

        this.game.obstacles.push(obstacle)

        document.getElementById("game-screen").appendChild(obstacle)

    }
    
}



  // crear una funcion point values para luego sacar del score si quita o agrega score, usar condicional if
  // pointvalues

  // AGREGAR MEAT A LA FUNCION CREADA CON SET INTERVAL


