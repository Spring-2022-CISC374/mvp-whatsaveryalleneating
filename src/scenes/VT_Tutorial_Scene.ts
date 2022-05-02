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

  public preload() {
    this.load.image("teacher", "https://raw.githubusercontent.com/Spring-2022-CISC374/mvp-whatsaveryalleneating/master/assets/teacher.png");
    this.load.image("avery", "https://raw.githubusercontent.com/Spring-2022-CISC374/mvp-whatsaveryalleneating/master/assets/avery.png");
  }

  public create() {
    console.log("in page")
    const button1 = this.add.text(20, 30, `Welcome to Vitamin Tetris!\nThe goal of this game is to\nteach you the vitamins of certain foods.\nThe goal of this game is to \nmatch blocks of five of the same color.\n\nThe game is over when the screen is filled up \nwith blocks.\n\nYou can move the blocks with the arrow keys and \nrotate them with the spacebar.\n\n Click me to start playing`);
    button1.setBackgroundColor('darkBlue');
    button1.setInteractive();
    button1.on('pointerup', () => {
      this.scene.start(LoadScene.name);
    })
    this.add.image(150, 600, "avery");
    this.add.image(300, 550, "teacher");
  }

}