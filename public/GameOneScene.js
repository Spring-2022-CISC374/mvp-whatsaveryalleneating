class GameOneScene extends Phaser.Scene {

  constructor() {
    super('bootGame');
  }

  create() {
    this.add.text(20, 20, "What's Avery Allen Eating?", {fill: '0x000000'});
  }

}