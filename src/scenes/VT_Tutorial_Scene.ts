import { Scene } from "phaser";
import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { LoadScene } from "./LoadScene";
import { Load_UFO } from "./Load_UFO";
import { Preload_D } from "./Preload_D";

export class VT_Tut extends BaseGameScene {

  constructor() {
    console.log("in page")
    super({ key: "vt-tut" });
  }

  public create() {
    console.log("in page")
    const button1 = this.add.text(20, 30, `Welcome to Vitamin Tetris!\nThe goal of this game is to\nteach you the vitamins of certain foods.\nThe goal of this game is to \nmatch blocks of five of the same color.\n\nThe game is over when the screen is filled up \nwith blocks.\n\nYou can move the blocks with the arrow keys and \nrotate them with the spacebar.\n\n Click me to get breaking!`);
    button1.setBackgroundColor('darkBlue');
    button1.setInteractive();
    button1.on('pointerup', () => {
      this.scene.start(LoadScene.name);
    })
  }

}