import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { VT_Tut } from "./VT_Tutorial_Scene";
import { Load_UFO } from "./Load_UFO";

export class Hub extends BaseGameScene {

  constructor() {
    super({ key: Hub.name });
  }

  public create() {
    const background = this.add.sprite(0, 0, 'hub_bg');
    background.setOrigin(0, 0);
    background.alpha = 0.7;
    background.displayWidth = window.innerWidth;
    background.displayHeight = window.innerHeight;
    const shipButton = this.add.sprite(window.innerWidth / 6, window.innerHeight / 4, 'ship');
    const lunchButton = this.add.sprite(window.innerWidth / 2, window.innerHeight / 4, 'lady');
    const tetrisButton = this.add.sprite(window.innerWidth / 2, 3 * window.innerHeight / 4, 'tet');
    shipButton.displayWidth = this.width / 2;
    shipButton.displayHeight = this.width / 2;
    lunchButton.displayWidth = this.width / 2;
    lunchButton.displayHeight = this.width / 2;
    tetrisButton.displayWidth = this.width / 3;
    tetrisButton.displayHeight = this.width / 3;
    tetrisButton.setInteractive({cursor: 'pointer'});
    lunchButton.setInteractive({cursor: 'pointer'});
    shipButton.setInteractive({cursor: 'pointer'});
    tetrisButton.on('pointerup', () => {
      this.scene.start("vt-tut");
    })
    lunchButton.on('pointerup', () => {
      this.scene.start(FoodPrep.name);
    })
    shipButton.on('pointerup', () => {
      this.scene.start(Load_UFO.name);
    })
  }

}