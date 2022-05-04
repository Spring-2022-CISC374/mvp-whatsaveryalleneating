import { BaseGameScene } from "./BaseGameScene";
import { Load_Hub } from "./Load_Hub";

export class End_UFO extends BaseGameScene {

  constructor() {
    super({ key: End_UFO.name });
  }

  create() {
    this.game.scale.resize(this.width, this.height);
    this.scene.start(Load_Hub.name);
  }

}