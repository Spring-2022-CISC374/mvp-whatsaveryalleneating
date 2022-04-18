import { BaseGameScene } from "./BaseGameScene";
import { UFO } from "./UFO";

export class Load_UFO extends BaseGameScene {

  constructor() {
    super({ key: Load_UFO.name });
  }

  public preload() {
    this.game.config.fullscreenTarget
    this.load.image('ufo', '~/../assets/images/player.png');
    this.load.image('background', '~/../assets/images/stomach_background.png');
    this.load.image('veg', '~/../assets/images/veg.png');
  }

  public create() {
    this.game.scale.resize(window.innerWidth, window.innerHeight);
    this.scene.start(UFO.name);
  }

}