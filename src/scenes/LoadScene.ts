import { Scene } from "phaser";
import { MenuScene } from "./MenuScene";

export class LoadScene extends Scene {
  constructor() {
    super({ key: LoadScene.name });
  }

  public preload() {
    this.load.image("playIcon", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/play-64.png");
    this.load.image("block", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32.png");
    this.load.image("blockA", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32-A.png");
    this.load.image("blockB", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32-B.png");
    this.load.image("blockC", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32-C.png");
    this.load.image("blockD", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32-D.png");
    this.load.image("blockK", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32-K.png");
    this.load.image("blockCal", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32-Cal.png");
    this.load.image("block", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/block-32.png");
    this.load.image("avery", "https://raw.githubusercontent.com/Spring-2022-CISC374/mvp-whatsaveryalleneating/master/assets/avery.png");
    this.load.image("roswell", "https://raw.githubusercontent.com/Spring-2022-CISC374/mvp-whatsaveryalleneating/master/assets/RosswellSprite.png");
    this.load.audio("tick", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/tickSound.wav");
    this.load.audio("click", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/click.wav");
    this.load.audio("lineBreak", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/lineBreak.wav");
    this.load.audio("background", "https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/background.mp3");
  }

  public create() {
    this.scene.start(MenuScene.name);
  }
}
