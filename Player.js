class Player {
  constructor(gameScreen) {
    this.playerElement = document.getElementById("player")
    this.gameScreen = gameScreen
    this.width = this.playerElement.offsetWidth;
    this.x = 0;
    this.element = document.createElement("img");
  }



checkBoundaries() {

  if (this.x < 0) {
    this.x = 0;
  }

  if (this.x > this.gameScreen.offsetWidth - 120) {
    this.x = this.gameScreen.offsetWidth - 120;
  }
  console.log(this.width)
  this.updatePosition();
}

updatePosition() {
  console.log("updating position")
  this.playerElement.style.left = `${this.x}px`
}

}
