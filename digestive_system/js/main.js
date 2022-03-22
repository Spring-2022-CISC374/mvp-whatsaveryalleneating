var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot',collectFood.Boot);
game.state.add('Preloader',collectFood.Preload);
game.state.add('MainMenu', collectFood.MainMenu);
game.state.add('Game', collectFood.Game);
var gameSettings ={
    playerSpeed: 200,
}
game.state.start('Boot');