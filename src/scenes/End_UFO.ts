import { BaseGameScene } from "./BaseGameScene";
import { Hub } from "./Hub";

export class End_UFO extends BaseGameScene {

  constructor() {
    super({ key: End_UFO.name });
  }

  create() {
    this.scene.start(Hub.name);
  }

}