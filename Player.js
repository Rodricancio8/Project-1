class Player {
  constructor(gameScreen) {
    // DOM elements
    this.playerElement = document.getElementById("player");
    this.gameScreen = gameScreen;

    // Set player-related properties
    // Width of the player element
    this.width = this.playerElement.offsetWidth;
    // Initial x position of the player
    this.x = 0;
    // Create a new img element (not used in this code)
    this.element = document.createElement("img");
  }

  // New method to handle player movement within game boundaries
  playerMove(key) {
    // Set player's movement speed
    const moveAmount = 50;
    const gameWidth = this.gameScreen.offsetWidth;
    const playerWidth = this.playerElement.offsetWidth;

    if (key === "left") {
      this.x -= moveAmount;
      // Ensure the player's x coordinate doesn't go below 0
      if (this.x < 0) {
        this.x = 0;
      }
    } else if (key === "right") {
      this.x += moveAmount;
      // Ensure the player's x coordinate doesn't go beyond the game screen's width minus the player's width
      if (this.x > gameWidth - playerWidth) {
        this.x = gameWidth - playerWidth;
      }
    }

    // Update the player's position after moving
    this.updatePosition();
  }

  // Method to update the player's position on the screen
  updatePosition() {
    console.log("updating position");
    // Set the left style property of the player element to move it horizontally
    this.playerElement.style.left = `${this.x}px`;
  }


}

