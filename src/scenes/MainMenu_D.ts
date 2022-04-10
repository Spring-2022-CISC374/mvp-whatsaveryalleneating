import { BaseGameScene } from "./BaseGameScene";
import { Game_D } from "./Game_D";

export class MainMenu_D extends BaseGameScene {

    protected background1;
    protected player;
    protected startText;

    constructor() {
        super({ key: MainMenu_D.name });
    }

    create(){
        this.background1 = this.add.tileSprite(0,0,this.width, this.height,'background1');
        this.background1.autoScroll(-100,0);
        

        // this.foreground1 = this.game.add.tileSprite(0,470,this.game.width, this.game.height-533,'foreground1');
        // this.foreground1.autoScroll(-100,0);

        this.player = this.add.sprite(200, this.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.05);

        this.add.tween(this.player).to({y:this.player.y-16}, 500, (a) => {return a}, true,0, Infinity, true);
        
        this.startText = this.add.bitmapText(0,0,'minecraftia','tap to start',32);
        this.startText.x = this.width/2 - this.startText.textWidth/2;
        this.startText.y = this.height/2;
   
    }

    update(){
        if(this.game.input.activePointer.leftButtonDown()){
            this.scene.start(Game_D.name);
        }
    }

};