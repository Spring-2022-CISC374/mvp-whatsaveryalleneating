var collectFood = function(){};

collectFood.Boot = function(){};

collectFood.Boot.prototype ={
    preload: function(){
       //this.load.image('background1', 'assets/images/background1.png');
        // this.preload.image('beef', 'assets/images/beef.png');
        // this.load.image('beef','assets/images/beef.png');
    },

    create: function (){
        this.game.stage.backgroundColor = '#fff';

        // Unless you specifically know your game needs to support multi-touch I would recommend set
        this.input.maxPointers = 1;
        if(this.game.device.desktop){
            this.scale.pageAlignHorizontally = true;
        }

        this.state.start('Preloader');
    }
};

