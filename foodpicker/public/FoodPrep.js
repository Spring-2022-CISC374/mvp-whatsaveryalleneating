class FoodPrep extends Phaser.Scene{

    constructor(){
        super('bootGame');
    }
    preload(){
        this.list = ['vegan', 'peanut allergy', 'carnivore'];
        this.newOrder();
        
        this.data.set('order', this.randomOrder);
        this.data.set('time', 60);
        this.data.set('foodTime', 10);

        this.load.image('lettuce', '/assets/images/lettuce.png');
        this.load.image('steak', '/assets/images/steak.png');
        this.load.image('peanut', '/assets/images/peanut.png');


    }
    create(){

        this.text = this.add.text(20,20, '');
        this.text.setText([
            'Time: ' + this.data.get('time'), 
            'FoodTimer: ' + this.data.get('foodTime')
        ]);

        this.order = this.add.text(config.width/2, config.height/2 - 100, this.data.get('order'));

        this.lettuce = this.add.image(config.width/4, config.height/2 + 100, 'lettuce');
        this.lettuce.setScale(.1);
        this.steak = this.add.image(config.width/2, config.height/2 + 100, 'steak');
        this.steak.setScale(.15);
        this.peanut = this.add.image(3*config.width/4 + 20, config.height/2 + 100, 'peanut');
        this.peanut.setScale(.1);

        
        this.initInteractice();

        this.timer = this.time.addEvent({
            delay: 1000,                // ms
            callback: this.decreaseTime,
            callbackScope: this,
            loop: true
        });

    }
    update(){
    }
    decreaseTime(){
        this.data.set('time', this.data.get('time') -1);
        this.data.set('foodTime', this.data.get('foodTime') -1);

        if(this.data.get('foodTime') <= 0){
            this.resetOrderTime();
        }

        if(this.data.get('time') <= 0){
            this.timer.remove();
            this.lettuce.destroy();
            this.steak.destroy();
            this.peanut.destroy();
            this.data.set('order','Nice Try!');
            this.order.setText('Nice Try!');

        }
        
        this.text.setText([
            'Time: ' + this.data.get('time'), 
            'FoodTimer: ' + this.data.get('foodTime')
        ]);

        

    }

    resetOrderTime(){
        this.newOrder();
        this.data.set('order', this.randomOrder);
        this.order.setText(this.data.get('order'));
        this.data.set('foodTime', 10);
    }

    newOrder(){
        var randomNumber = Phaser.Math.Between(0, 2);
        this.randomOrder = this.list[randomNumber];
    }
    
    initInteractice(){
        this.peanut.setInteractive();
        this.peanut.on('pointerdown', () => {
            if(this.data.get('order') != 'peanut allergy'){
                this.data.set('time', this.data.get('time') + 5);
            }
            this.resetOrderTime();
        });
        this.steak.setInteractive();
        this.steak.on('pointerdown', () => {
            if(this.data.get('order') != 'vegan'){
                this.data.set('time', this.data.get('time') + 5);
            }
            this.resetOrderTime();
        });
        this.lettuce.setInteractive();
        this.lettuce.on('pointerdown', () => {
            if(this.data.get('order') != 'carnivore'){
                this.data.set('time', this.data.get('time') + 5);
            }
            this.resetOrderTime();
        });

    }


}