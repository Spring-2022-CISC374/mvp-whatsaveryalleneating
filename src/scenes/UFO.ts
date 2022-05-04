import { BaseGameScene } from "./BaseGameScene";
import { End_UFO } from "./End_UFO";

export class UFO extends BaseGameScene {

  protected bg: Phaser.GameObjects.TileSprite;
  protected ufo: Phaser.GameObjects.Image;
  protected velocity: number = 0;
  protected mult: number = -1;
  protected vegs = [];

  constructor() {
    super({ key: UFO.name });
  }

  public create() {
    super.create();
    this.bg = this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "background");
    this.bg.setOrigin(0,0);
    this.ufo = this.add.sprite(this.width / 5, this.height / 2, 'ufo');
    this.ufo.displayWidth = this.width / 5;
    this.ufo.displayHeight = this.width / 5;
    this.ufo.setInteractive();
  }

  setVelocity(delta: number) {
    this.velocity += ((this.mult * 2) * (delta / 1000));
  }

  revVelocity() {
    this.velocity = 0;
    this.mult = 2;
  }

  retVelocity() {
    this.velocity = 0;
    this.mult = -2;
  }

  createRandomVeg() {
    const a = Math.random();
    if(a < .01) {
      let veg = this.add.sprite(window.innerWidth, window.innerHeight * (Math.random() * 0.6 + 0.2), 'veg');
      veg.displayHeight = this.width / 15;
      veg.displayWidth = this.width / 15;
      this.vegs.push(veg);
      veg.setInteractive();
      this.physics.add.collider(this.ufo, veg, (p, s) => {
        console.log('collision');
        s.destroy();
      })
    }
  }

  public update(time: number, delta: number) {
    if(this.ufo.y > window.innerHeight || this.ufo.y < 0) {
      this.scene.start(End_UFO.name);
    }
    this.bg.tilePositionX += 6;
    this.input.on("pointerdown", this.revVelocity, this);
    this.input.on("pointerup", this.retVelocity, this);
    this.setVelocity(delta)
    this.ufo.setY(this.ufo.y - this.velocity);
    this.vegs.forEach(veg => {
      veg.setX(veg.x - 6);
      if(veg.x < 100 + this.width / 10 && veg.x > 100 - this.width / 10) {
        if(veg.y > this.ufo.y - this.height / 20 && veg.y < this.ufo.y + this.height / 20) {
          veg.destroy(true);
        }
      }
    });
    this.createRandomVeg();
    console.log('x: ' + this.ufo.x);
    console.log('y: ' + this.ufo.y);
  }

}