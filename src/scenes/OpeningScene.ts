import { BaseGameScene } from "./BaseGameScene";
import { FoodPrep } from "./FoodPrep";
import { VT_Tut } from "./VT_Tutorial_Scene";
import { Load_UFO } from "./Load_UFO";
import { Load_Hub } from "./Load_Hub";

export class OpeningScene extends BaseGameScene {
  cursors: any;
    video: Phaser.GameObjects.Video;
  constructor() {
    super({ key: OpeningScene.name });
  }

  public create() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.video = this.add.video(700, 350, 'opening');
    const playButton = this.add.text(700, 300, "Press to start the Game");
    this.addControls();
    this.video.play()
    this.video.on('unlocked', ()=>{
        playButton.destroy();
    });
    this.video.on('complete', ()=>{
        this.scene.start(Load_Hub.name);
    })
  }
  public update(time: number, delta: number) {
    if(this.cursors.shift.isDown){
        console.log("hi")
        this.scene.start(Load_Hub.name);
        this.video.destroy()
    }
  }

  private addControls() {
    this.cursors = this.input.keyboard.createCursorKeys();
    // TODO: Add pausing game using ESC key
  }

}