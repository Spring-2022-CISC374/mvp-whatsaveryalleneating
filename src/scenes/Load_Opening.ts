import { BaseGameScene } from './BaseGameScene';
import { OpeningScene } from './OpeningScene';

export class Load_Opening extends BaseGameScene {

  constructor() {
    super({ key: Load_Opening.name });
  }

  public preload() {
    this.game.config.fullscreenTarget
    this.load.video('opening', 'https://github.com/Spring-2022-CISC374/mvp-whatsaveryalleneating/blob/master/assets/AveryAllenOpening.mp4');
  }

  public create() {
    this.game.scale.resize(window.innerWidth, window.innerHeight);
    this.scene.start(OpeningScene.name);
  }

}