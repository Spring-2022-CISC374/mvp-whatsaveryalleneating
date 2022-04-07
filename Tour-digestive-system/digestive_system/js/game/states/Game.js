collectFood.Game = function(){
    this.vegRate = 1000;
    this.vegTimer =0;

    this.friesRate = 500;
    this.friesTimer = 0;

    this.score = 0;
};

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

         this.vegs = this.game.add.group();
         this.friess = this.game.add.group();
        //this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.scoreText = this.game.add.bitmapText(10,10,'minecraftia','Score: 0',24);
    },

    update: function(){

        //this.movePlayerManager();
        if(this.game.input.activePointer.isDown){
            this.player.body.velocity.y -=40;

        }
        this.game.physics.arcade.collide(this.player);
        
        if(this.vegTimer<this.game.time.now){
            this.createVeg();
            this.vegTimer = this.game.time.now+this.vegRate;
        }

        if(this.friesTimer < this.game.time.now){
            this.createFries();
            this.friesTimer = this.game.time.now + this.friesRate;
        }

        this,game.physics.arcade.overlap(this.player, this.vegs, this.coinHit, null, this);
        this,game.physics.arcade.overlap(this.player, this.friess, this.firesHit, null, this);
        

    },

    createVeg: function(){
        var x = this.game.width;
        var y = this.game.rnd.integerInRange(50,this.game.world.height -192);
        var veg = this.vegs.getFirstExists(false);
        if(!veg){
            veg = new Veg(this.game,0,0);
            this.vegs.add(veg);
        }
        veg.reset(x,y);
        veg.revive();
    },

    createFries: function(){
        var x = this.game.width;
        var y = this.game.rnd.integerInRange(50,this.game.world.height -192);
        var fries = this.friess.getFirstExists(false);
        if(!fries){
            fries = new Fries(this.game,0,0);
            this.friess.add(fries);
        }
        fries.reset(x,y);
        fries.revive();
    },
    shutdown: function(){
        this.vegs.destroy();
        this.friess.destroy();
        this.score = 0;
        this.vegTimer = 0;
        this.friesTimer = 0;
    },

    coinHit: function(player, veg){
         this.score++;
         veg.kill();
         this.scoreText.text = 'Score: '+ this.score;

    },
    firesHit: function(player, fries){
        player.kill();
        fries.kill();
    

        //this.background.stopScroll();
   
    
        this.friess.setAll('body.velocity.x', 0);
        this.vegs.setAll('body.velocity.x', 0);
    
        this.friesTimer = Number.MAX_VALUE;
        this.vegTimer = Number.MAX_VALUE;
    
        var scoreboard = new Scoreboard(this.game);
        scoreboard.show(this.score);
    }
    
    // movePlayerManager(){
    //     if(this.cursorKeys.left.isDown){
    //         this.player.setVelocityX(-gameSettings.playerSpeed);
    //     }
    //     else if(this.cursorKeys.right.isDown){
    //         this.player.setVelocityX(gameSettings.playerSpeed);
    //     }
    // }
}