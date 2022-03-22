collectFood.Game = function(){};

collectFood.Game.prototype ={
    create: function(){
        this.background1 =this.game.add.tileSprite(0,0,this.game.width,this.game.height,'background1');
        this.background1.autoScroll(-100,0);

    

        this.player  = this.add.sprite(200, this.game.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.05);


        // this.candy = this.add.image(config.width/2 -200, config.height/2, "candy");
        // this.candy.setScale(0.05);
        // this.coca = this.add.image(config.width/2 -300, config.height/2, "coca");
        // this.coca.setScale(0.08);
        // this.fries = this.add.image(config.width/2 +200, config.height/2, "fries");
        // this.fries.setScale(0.08);
        // this.milk = this.add.image(config.width/2 -400, config.height/2, "milk");
        // this.milk.setScale(0.03);
        // this.veg = this.add.image(config.width/2 -600, config.height/2, "veg");
        // this.veg.setScale(0.05);
        
         this.game.physics.startSystem(Phaser.Physics.ARCADE);
         this.game.physics.arcade.gravity.y=800;
        //this.game.physics.arcade.gravity(this.background1);
        // this.game.physics.arcade.enableBody(this.foreground1);
         this.game.physics.arcade.enableBody(this.player);
         this.player.body.collideWorldBounds = true;
         this.player.body.bounce.set(0.25);
        //this.cursorKeys = this.input.keyboard.createCursorKeys();
    },

    update: function(){

        //this.movePlayerManager();
        if(this.game.input.activePointer.isDown){
            this.player.body.velocity.y -=40;

        }
        this.game.physics.arcade.collide(this.player);
    },

    

    shutdown: function(){

    },
    // movePlayerManager(){
    //     if(this.cursorKeys.left.isDown){
    //         this.player.setVelocityX(-gameSettings.playerSpeed);
    //     }
    //     else if(this.cursorKeys.right.isDown){
    //         this.player.setVelocityX(gameSettings.playerSpeed);
    //     }
    // }
}