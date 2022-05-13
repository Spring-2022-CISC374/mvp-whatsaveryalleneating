import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { VT_Tut } from "./VT_Tutorial_Scene";
import { Load_UFO } from "./Load_UFO";
import { Load_Hub } from "./Load_Hub";

export class OpeningScene extends BaseGameScene {

  constructor() {
    super({ key: OpeningScene.name });
  }

  public create() {
    var video = this.add.video(0, 0, 'opening');
    video.on('complete', ()=>{
        this.scene.start(Load_Hub.name);

    })
  }

}