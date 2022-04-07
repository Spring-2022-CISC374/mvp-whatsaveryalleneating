var gameSetttings = {
    playerSpeed : 200,
}

var config = {
    width: 500,
    height: 400,
    backgroundColor: 0x3498eb,
    scene: [FoodPrep],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
  }
  
  var game = new Phaser.Game(config);