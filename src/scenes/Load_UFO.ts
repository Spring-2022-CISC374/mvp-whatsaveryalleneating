import { BaseGameScene } from "./BaseGameScene";
import { UFO } from "./UFO";

export class Load_UFO extends BaseGameScene {

  constructor() {
    super({ key: Load_UFO.name });
  }

  public preload() {
    this.game.config.fullscreenTarget
    this.load.image('ufo', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/player.png');
    this.load.image('background', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/stomach_background.png');
    this.load.image('veg', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating//assets/images/veg.png');
  }

  public create() {
    this.game.scale.resize(window.innerWidth, window.innerHeight);
    this.scene.start(UFO.name);
  }

}