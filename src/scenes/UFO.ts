import { BaseGameScene } from "./BaseGameScene";
import { End_UFO } from "./End_UFO";

class Collection {
  veg: integer = 0;
  meat: integer = 0;
  fries: integer = 0;
}

export class UFO extends BaseGameScene {

  protected bg: Phaser.GameObjects.TileSprite;
  protected ufo: Phaser.GameObjects.Image;
  protected velocity: number = 0;
  protected mult: number = -1;
  protected vegs = [];
  protected frieslist = [];
  protected meats = [];
  protected isPlaying: boolean = false;
  protected overlay: Phaser.GameObjects.Text;
  protected collection = new Collection();


  constructor() {
    super({ key: UFO.name });
  }

  public create() {
    super.create();
    this.bg = this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, "background");
    this.bg.setOrigin(0,0);
    const overlayText = `\n How To Play:\n
      Click the mouse to move the ship up\n
      Release the mouse for the ship to fall\n
      Collect food from different food groups for points  \n
      \n  Click To Start Playing!\n`;
    this.overlay = this.add.text(window.innerWidth / 4, window.innerHeight / 4, overlayText, {'color': 'black'});
    this.overlay.setBackgroundColor('white');
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

  startPlaying() {
    this.isPlaying = true;
    this.overlay.destroy();
    this.mult = -1;
    this.velocity = 0;
  }

  async collision(food, obj) {
    this.collection[food] = this.collection[food] + 1;
  }

  createRandomVeg() {
    const a = Math.random();
    if(a < .01) {
      let veg = this.add.sprite(window.innerWidth, window.innerHeight * (Math.random() * 0.6 + 0.2), 'veg');
      veg.displayHeight = this.width / 15;
      veg.displayWidth = this.width / 15;
      this.vegs.push(veg);
      veg.setInteractive();
    } else if(a < .02) {
      let fries = this.add.sprite(window.innerWidth, window.innerHeight * (Math.random() * 0.6 + 0.2), 'fries');
      fries.displayHeight = this.width / 15;
      fries.displayWidth = this.width / 15;
      this.frieslist.push(fries);
      fries.setInteractive();
    } else if(a < .03) {
      let meat = this.add.sprite(window.innerWidth, window.innerHeight * (Math.random() * 0.6 + 0.2), 'meat');
      meat.displayHeight = this.width / 15;
      meat.displayWidth = this.width / 15;
      this.meats.push(meat);
      meat.setInteractive();
    }
  }

  public update(time: number, delta: number) {
    if(this.ufo.y > window.innerHeight || this.ufo.y < 0) {
      this.isPlaying = false;
      this.ufo.setX(this.width / 5)
      this.ufo.setY(this.height / 2);
      localStorage.veg = this.collection.veg;
      localStorage.meat = this.collection.meat;
      localStorage.fries = this.collection.fries;
      this.scene.start(End_UFO.name);
    }
    this.bg.tilePositionX += 6;
    this.input.on("pointerdown", this.startPlaying, this);
    if(!this.isPlaying) return;
    this.setVelocity(delta)
    this.ufo.setY(this.ufo.y - this.velocity);
    this.input.on("pointerdown", this.revVelocity, this);
    this.input.on("pointerup", this.retVelocity, this);
    this.createRandomVeg();
    this.vegs.forEach(veg => {
      veg.setX(veg.x - 6);
      if(veg.x < 100 + this.width / 10 && veg.x > 100 - this.width / 10) {
        if(veg.y > this.ufo.y - this.height / 20 && veg.y < this.ufo.y + this.height / 20) {
          veg.destroy(true);
          this.collision('veg', veg);
        }
      }
    });
    this.frieslist.forEach(fries => {
      fries.setX(fries.x - 6);
      if(fries.x < 100 + this.width / 10 && fries.x > 100 - this.width / 10) {
        if(fries.y > this.ufo.y - this.height / 20 && fries.y < this.ufo.y + this.height / 20) {
          fries.destroy(true);
          this.collision('fries', fries);
        }
      }
    });
    this.meats.forEach(meat => {
      meat.setX(meat.x - 6);
      if(meat.x < 100 + this.width / 10 && meat.x > 100 - this.width / 10) {
        if(meat.y > this.ufo.y - this.height / 20 && meat.y < this.ufo.y + this.height / 20) {
          meat.destroy(true);
          this.collision('meat', meat);
        }
      }
    });
  }

}