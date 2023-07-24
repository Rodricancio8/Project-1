class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width;
        this.height = height
        this.directionX = 0
        this.directionY = 0
        const img = document.querySelector("img"); 
        img.src = "https://picsum.photos/200/301";
       
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
    
        if (this.left < 0) {
          this.left = 0;
        }
    
        if (this.top < 0) {
          this.top = 0;
        }
    
        if (this.left > this.gameScreen.offsetWidth - this.width) {
          this.left = this.gameScreen.offsetWidth - this.width;
        }
    
        if (this.top > this.gameScreen.offsetHeight - this.height) {
          this.top = this.gameScreen.offsetHeight - this.height;
        }
        this.updatePosition();
      }
}
