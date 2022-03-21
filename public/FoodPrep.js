class FoodPrep extends Phaser.Scene{

    constructor(){
        super('bootGame');
    }
    preload(){

    }
    create(){
        this.data.set('time', 0);
        
        var text = this.add.text(20,20, '');

        text.setText('Time: ' + this.data.get('time'));


    }
    decreaseTime(){
    }

}