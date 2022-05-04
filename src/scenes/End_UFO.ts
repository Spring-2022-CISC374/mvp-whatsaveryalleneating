import { BaseGameScene } from "./BaseGameScene";
import { Hub } from "./Hub";

export class End_UFO extends BaseGameScene {

  constructor() {
    super({ key: End_UFO.name });
  }

  create() {
    this.game.scale.resize(this.width, this.height);
    this.scene.start(Hub.name);
  }

}