import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { LoadScene } from "./LoadScene";
import { Preload_D } from "./Preload_D";

export class Hub extends BaseGameScene {

  constructor() {
    super({ key: Hub.name });
  }

  public create() {
    const a = document.getElementById('button1');
    const b = document.getElementById('button2');
    const c = document.getElementById('button3');
    a.addEventListener('click', () => {
      this.scene.start(LoadScene.name);
      a.parentElement.hidden = true;
    })
    b.addEventListener('click', () => {
      this.scene.start(FoodPrep.name);
      b.parentElement.hidden = true;
    })
  }

}