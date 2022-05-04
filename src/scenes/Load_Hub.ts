import { BaseGameScene } from './BaseGameScene';
import { Hub } from './Hub';

export class Load_Hub extends BaseGameScene {

  constructor() {
    super({ key: Load_Hub.name });
  }

  public preload() {
    this.game.config.fullscreenTarget
    this.load.image('ship', 'assets/ship.png');
    this.load.image('hub_bg', 'assets/hub_background.png');
    this.load.image('lady', 'assets/lunchlady.png');
    this.load.image('tet', 'assets/block-64-K .png')
  }

  public create() {
    this.game.scale.resize(window.innerWidth, window.innerHeight);
    this.scene.start(Hub.name);
  }

}