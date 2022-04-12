import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { LoadScene } from "./LoadScene";
import { Load_UFO } from "./Load_UFO";
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
    })
    b.addEventListener('click', () => {
      this.scene.start(FoodPrep.name);
    })
    c.addEventListener('click', () => {
      this.scene.start(Load_UFO.name);
    })
  }

}