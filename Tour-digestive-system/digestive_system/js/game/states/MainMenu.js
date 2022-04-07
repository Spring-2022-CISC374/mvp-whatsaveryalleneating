collectFood.MainMenu = function(){};

collectFood.MainMenu.prototype ={
    create: function(){
        this.background1 =this.game.add.tileSprite(0,0,this.game.width,this.game.height,'background1');
        this.background1.autoScroll(-100,0);
        

        // this.foreground1 = this.game.add.tileSprite(0,470,this.game.width, this.game.height-533,'foreground1');
        // this.foreground1.autoScroll(-100,0);

        this.player  = this.add.sprite(200, this.game.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.05);


        // this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY,'logo');
        // this.logo.anchor.setTo(1);

        this.game.add.tween(this.player).to({y:this.player.y-16},500, Phaser.Easing.Linear.NONE, true,0, Infinity, true);
        
        this.startText = this.game.add.bitmapText(0,0,'minecraftia','tap to start',32);
        this.startText.x = this.game.width/2 - this.startText.textWidth/2;
        this.startText.y = this.game.height/2;
        


       


        // this.anims.create({
        //     key:'tree_anim',
        //     frames: this.anims.generateFrameNumbers('tree'),
        //     frameRate: 20,
        //     repeat: -1
        // })
        // this.tree.play('tree_anim');
   
    },

    update: function(){
        if(this.game.input.activePointer.justPressed()){
            this.game.state.start('Game');
        }

    }
};