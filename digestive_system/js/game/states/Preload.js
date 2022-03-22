collectFood.Preload = function() {};

collectFood.Preload.prototype = {
    preload: function(){


        this.load.image('background1','assets/images/background1.png');
        this.load.image('foreground1','assets/images/foreground1.png');
        this.load.spritesheet('player','assets/images/player.png',50,50,0);
        
        this.load.image("beef","assets/images/beef.png");
        this.load.image("candy","assets/images/candy.png");
        this.load.image("coca","assets/images/coca.png");
        this.load.image("fries","assets/images/fries.png");
        this.load.image("milk","assets/images/milk.png");
        this.load.image("beef","assets/images/beef.png");
        this.load.image("veg","assets/images/veg.png");


        //this.load.onComplete.add(this.onLoadComplete,this);
    },

    create: function(){

    },

    update: function(){
        this.state.start('MainMenu');
    }
}
