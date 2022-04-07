collectFood.Preload = function() {};

collectFood.Preload.prototype = {
    preload: function(){

        // this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY,'logo');
        // this.logo.anchor.setTo(0.5);

        this.load.image('background1','assets/images/background1.png');
        this.load.image('foreground1','assets/images/foreground1.png');
        this.load.spritesheet('player','assets/images/player.png',50,50,0);
        this.load.spritesheet('veg','assets/images/veg.png',51,51,0);
        this.load.spritesheet('fries','assets/images/fries.png',51,51,0);

        // this.load.image("beef","assets/images/beef.png");
        // this.load.image("candy","assets/images/candy.png");
       
        // this.load.image("fries","assets/images/fries.png");
        // this.load.image("milk","assets/images/milk.png");
        // this.load.image("beef","assets/images/beef.png");
        // this.load.image("veg","assets/images/veg.png");

        this.load.bitmapFont('minecraftia','assets/fonts/minecraftia/minecraftia.png','assets/fonts/minecraftia/minecraftia.xml');
        //this.load.onComplete.add(this.onLoadComplete,this);
    },

    create: function(){

    },

    update: function(){
        this.state.start('MainMenu');
    }
}
