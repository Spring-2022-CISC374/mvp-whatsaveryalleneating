import { BaseGameScene } from "./BaseGameScene";
import { MainMenu_D } from "./MainMenu_D";

export class Preload_D extends BaseGameScene {

    constructor() {
        super({ key: Preload_D.name });
    }

    preload() {

        this.load.image('background1','assets/images/stomach_backgroud.png');
        this.load.image('foreground1','assets/images/foreground1.png');
        this.load.spritesheet('player','assets/images/player.png');
        this.load.spritesheet('veg','assets/images/veg.png');
        this.load.spritesheet('fries','assets/images/fries.png');

        this.load.bitmapFont('minecraftia','assets/fonts/minecraftia/minecraftia.png','assets/fonts/minecraftia/minecraftia.xml');

    }

    create() {

    }

    update() {
        this.scene.start(MainMenu_D.name);
    }
}
