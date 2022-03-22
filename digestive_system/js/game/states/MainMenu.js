collectFood.MainMenu = function(){};

collectFood.MainMenu.prototype ={
    create: function(){
        this.background1 =this.game.add.tileSprite(0,0,this.game.width,this.game.height,'background1');
        this.background1.autoScroll(-100,0);
        this.beef = this.add.image(this.game.width/2 -50, this.game.height/2, "beef");
        this.beef.setScale(0.1);

        // this.foreground1 = this.game.add.tileSprite(0,470,this.game.width, this.game.height-533,'foreground1');
        // this.foreground1.autoScroll(-100,0);

        this.player  = this.add.sprite(200, this.game.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.05);



        this.game.add.tween(this.player).to({y:this.player.y-16},500, Phaser.Easing.Linear.NONE, true,0, Infinity, true);
        






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