import { Scene } from "phaser";
import { MenuScene } from "./MenuScene";

export class LoadScene extends Scene {
  constructor() {
    super({ key: LoadScene.name });
  }

  public preload() {
    this.load.image("playIcon", "~/../../assets/play-64.png");
    this.load.image("block", "~/../../assets/block-32.png");
    this.load.image("blockA", "~/../../assets/block-32-A.png");
    this.load.image("blockB", "~/../../assets/block-32-B.png");
    this.load.image("blockC", "~/../../assets/block-32-C.png");
    this.load.image("blockD", "~/../../assets/block-32-D.png");
    this.load.image("blockK", "~/../../assets/block-32-K.png");
    this.load.image("blockCal", "~/../../assets/block-32-Cal.png");
    this.load.audio("tick", "~/../../assets/tickSound.wav");
    this.load.audio("click", "~/../../assets/click.wav");
    this.load.audio("lineBreak", "~/../../assets/lineBreak.wav");
    this.load.audio("background", "~/../../assets/background.mp3");
  }

  public create() {
    const backgroundSound = this.sound.add("background", { volume: 0.1, loop: true });
    backgroundSound.play();

    this.scene.start(MenuScene.name);
  }
}
