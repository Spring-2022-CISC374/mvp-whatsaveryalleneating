import { BaseGameScene } from "./BaseGameScene";
import { Load_Hub } from "./Load_Hub";

export class End_UFO extends BaseGameScene {

  constructor() {
    super({ key: End_UFO.name });
  }

  create() {
    this.game.scale.resize(this.width, this.height);
    const l = localStorage;
    const total = l.meat + l.veg + l.fries;
    const endText = `\nYou earned \n${localStorage.meat} Meat!  \n${localStorage.veg} Vegetables!  \n${localStorage.fries} Fries! \n`
    this.add.text(this.width / 4, this.height / 4, endText, {color: 'black'});
    setTimeout(() => {this.scene.start(Load_Hub.name)}, 5000);
    const backButton = this.add.text(190, 500, "Go Back To Menu");
    backButton.setBackgroundColor('darkBlue');
    backButton.setInteractive();
    backButton.on('pointerup', () => {
      this.scene.start(Load_Hub.name);
      location.reload(); 
    })
  }

}