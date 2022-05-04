import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { VT_Tut } from "./VT_Tutorial_Scene";
import { Load_UFO } from "./Load_UFO";

export class Hub extends BaseGameScene {

  constructor() {
    super({ key: Hub.name });
  }

  public create() {
    const button1 = this.add.text(20, 30, "Tetris");
    button1.setBackgroundColor('darkblue');
    const button2 = this.add.text(20, 60, "Food Prep");
    button2.setBackgroundColor('darkblue');
    const button3 = this.add.text(20, 90, "Digestive System");
    button3.setBackgroundColor('darkblue');
    button1.setInteractive();
    button2.setInteractive();
    button3.setInteractive();
    button1.on('pointerup', () => {
      this.scene.start("vt-tut");
    })
    button2.on('pointerup', () => {
      this.scene.start(FoodPrep.name);
    })
    button3.on('pointerup', () => {
      this.scene.start(Load_UFO.name);
    })
  }

}