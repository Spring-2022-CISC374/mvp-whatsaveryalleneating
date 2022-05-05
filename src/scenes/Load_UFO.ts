import { BaseGameScene } from "./BaseGameScene";
import { UFO } from "./UFO";

export class Load_UFO extends BaseGameScene {

  constructor() {
    super({ key: Load_UFO.name });
  }

  public preload() {
    this.game.config.fullscreenTarget
    this.load.image('ufo', 'assets/ship.png');
    this.load.image('background', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/background1.png');
    this.load.image('veg', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/veg.png');
    this.load.image('fries', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/fries.png');
    this.load.image('meat', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/beef.png');
  }

  public create() {
    this.game.scale.resize(window.innerWidth, window.innerHeight);
    this.scene.start(UFO.name);
  }

}