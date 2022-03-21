var gameSetttings = {
    playerSpeed : 200,
}

var config = {
    width: 800,
    height: 700,
    backgroundColor: 0x000000,
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