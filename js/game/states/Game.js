collectFood.Game = function(){
    this.vegRate = 1000;
    this.vegTimer =0;

    this.friesRate = 500;
    this.friesTimer = 0;

    this.beefRate=1000;
    this.beefTimer = 0;

    this.candyRate=1000;
    this.candyTimer = 0;

    this.scoreVitamin = 0;
    this.scoreProtein = 0;
    this.scoreCarbs = 0;
    this.scoreFat = 0;
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
         this.beefs = this.game.add.group();
         this.candys = this.game.add.group();

        //this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.scoreTextProtein = this.game.add.bitmapText(10,10,'minecraftia','Protein: 0',24);
        this.scoreTextCarbs = this.game.add.bitmapText(200,10,'minecraftia','Carbs: 0',24);
        this.scoreTextFat = this.game.add.bitmapText(400,10,'minecraftia','Fat: 0',24);
        this.scoreTextVitamin = this.game.add.bitmapText(550,10,'minecraftia','Vitamin: 0',24);
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

        if(this.beefTimer < this.game.time.now){
            this.createBeef();
            this.beefTimer = this.game.time.now +this.beefRate;
        }

        if(this.candyTimer < this.game.time.now){
            this.createCandy();
            this.candyTimer = this.game.time.now +this.candyRate;
        }

        this,game.physics.arcade.overlap(this.player, this.vegs, this.vegHit, null, this);
        this,game.physics.arcade.overlap(this.player, this.friess, this.friesHit, null, this);
        this,game.physics.arcade.overlap(this.player, this.beefs, this.beefHit, null, this);
        this,game.physics.arcade.overlap(this.player, this.candys, this.candyHit, null, this);
        

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
    createBeef: function(){
        var x = this.game.width;
        var y = this.game.rnd.integerInRange(50,this.game.world.height -192);
        var beef = this.beefs.getFirstExists(false);
        if(!beef){
            beef = new Beef(this.game,0,0);
            this.beefs.add(beef);
        }
        beef.reset(x,y);
        beef.revive();
    },

    createCandy: function(){
        var x = this.game.width;
        var y = this.game.rnd.integerInRange(50,this.game.world.height -192);
        var candy = this.candys.getFirstExists(false);
        if(!candy){
            candy = new Candy(this.game,0,0);
            this.candys.add(candy);
        }
        candy.reset(x,y);
        candy.revive();
    },

    shutdown: function(){
        this.vegs.destroy();
        this.friess.destroy();
        this.score = 0;
        this.vegTimer = 0;
        this.friesTimer = 0;
    },

    vegHit: function(player, veg){
         this.scoreVitamin++;
         veg.kill();
         this.scoreTextVitamin.text = 'Vitamin: '+ this.scoreVitamin;

    },

    candyHit: function(player, candy){
        this.scoreCarbs++;
        candy.kill();
        this.scoreTextCarbs.text = 'Carbs: '+ this.scoreCarbs;

   },


    beefHit: function(player, beef){
        this.scoreProtein++;
        beef.kill();
        this.scoreTextProtein.text = 'Protein: '+ this.scoreProtein;

   },
    friesHit: function(player, fries){
        this.scoreFat++;
        fries.kill();
        this.scoreTextFat.text = 'Fat: '+ this.scoreFat;

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