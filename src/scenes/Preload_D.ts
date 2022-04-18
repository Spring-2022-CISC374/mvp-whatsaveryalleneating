import { BaseGameScene } from "./BaseGameScene";
import { MainMenu_D } from "./MainMenu_D";

export class Preload_D extends BaseGameScene {

    constructor() {
        super({ key: Preload_D.name });
    }

    preload() {

        this.load.image('background1','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/stomach_backgroud.png');
        this.load.image('foreground1','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/foreground1.png');
        this.load.spritesheet('player','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/player.png');
        this.load.spritesheet('veg','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/veg.png');
        this.load.spritesheet('fries','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/images/fries.png');

        this.load.bitmapFont('minecraftia','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/fonts/minecraftia/minecraftia.png','https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/fonts/minecraftia/minecraftia.xml');

    }

    create() {

    }

    update() {
        this.scene.start(MainMenu_D.name);
    }
}
