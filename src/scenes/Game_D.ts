import { BaseGameScene } from "./BaseGameScene";
import { Fries } from "../prefabs/Fries";
import { Veg } from "../prefabs/Veg";
import { Scoreboard } from "../prefabs/Scoreboard";

export class Game_D extends BaseGameScene {

    protected fries;
    protected friesRate;
    protected friesTimer;

    protected vegs;
    protected vegRate;
    protected vegTimer;
    protected score;
    protected background1;
    protected player;
    protected scoreText;

    constructor() {
        super({ key: Game_D.name });
    }

    create(){
        
        this.vegRate = 1000;
        this.vegTimer =0;

        this.friesRate = 500;
        this.friesTimer = 0;

        this.score = 0;
        this.background1 =this.add.tileSprite(0,0,this.width,this.height,'background1');
        this.background1.autoScroll(-100,0);

    

        this.player  = this.add.sprite(200, this.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.05);

        this.physics.world.enableBody(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.set(0.25);
        
        this.vegs = this.add.group();
        this.fries = this.add.group();
        this.scoreText = this.add.bitmapText(10,10,'minecraftia','Score: 0',24);
    }

    update(){

        //this.movePlayerManager();
        if(this.game.input.activePointer.isDown){
            this.player.body.velocity.y -=40;

        }
        this.physics.collide(this.player);
        
        if(this.vegTimer<this.time.now){
            this.createVeg();
            this.vegTimer = this.time.now+this.vegRate;
        }

        if(this.friesTimer < this.time.now){
            this.createFries();
            this.friesTimer = this.time.now + this.friesRate;
        }

        this.physics.overlap(this.player, this.vegs, this.coinHit, null, this);
        this.physics.overlap(this.player, this.fries, this.firesHit, null, this);
        

    }

    createVeg(){
        var x = this.width;
        var y = Math.random()*(this.height - 142) + 50;
        var veg = this.vegs.getFirstExists(false);
        if(!veg){
            veg = new Veg(this.game,0,0);
            this.vegs.add(veg);
        }
        veg.reset(x,y);
        veg.revive();
    }

    createFries(){
        var x = this.width;
        var y = Math.random()*(this.height - 142) + 50;
        var fries = this.fries.getFirstExists(false);
        if(!fries){
            fries = new Fries(this.game,0,0);
            this.fries.add(fries);
        }
        fries.reset(x,y);
        fries.revive();
    }

    shutdown(){
        this.vegs.destroy();
        this.fries.destroy();
        this.score = 0;
        this.vegTimer = 0;
        this.friesTimer = 0;
    }

    coinHit(player, veg){
         this.score++;
         veg.kill();
         this.scoreText.text = 'Score: '+ this.score;

    }
    
    firesHit(player, fries){
        player.kill();
        fries.kill();
    

        //this.background.stopScroll();
   
        this.fries.setAll('body.velocity.x', 0);
        this.vegs.setAll('body.velocity.x', 0);
    
        this.friesTimer = Number.MAX_VALUE;
        this.vegTimer = Number.MAX_VALUE;
    
        var scoreboard = new Scoreboard(this.game);
        scoreboard.show(this.score);
    }
}