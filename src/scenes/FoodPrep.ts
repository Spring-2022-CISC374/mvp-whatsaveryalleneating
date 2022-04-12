import { Scene } from 'phaser';
import { BaseGameScene } from './BaseGameScene';

export class FoodPrep extends BaseGameScene{

    protected list;
    protected randomOrder;
    protected text;
    protected order;
    protected foods = {
            lettuce: null,
            peanut: null,
            steak: null,
        };
    protected foodList = ['lettuce', 'peanut', 'steak'];
    protected timer;

    constructor() {
        super({ key: FoodPrep.name });
      }

    preload(){
        this.list = ['vegan', 'peanut allergy', 'carnivore'];
        this.newOrder();
        
        this.data.set('order', this.randomOrder);
        this.data.set('time', 30);
        this.data.set('foodTime', 10);

        this.load.image('lettuce', '/assets/lettuce.png');
        this.load.image('steak', '/assets/steak.png');
        this.load.image('peanut', '/assets/peanut.png');


    }
    create(){

        this.text = this.add.text(20,20, '');
        this.text.setText([
            'Time: ' + this.data.get('time'), 
            'FoodTimer: ' + this.data.get('foodTime')
        ]);

        this.add.text(0, this.height/4, 'Please select a food that specific diet can eat!');
        this.add.text(20, this.height/4 + 20, 'Select the right food to get more time!')
        this.order = this.add.text(this.width/2 -80, this.height/2 - 100, this.data.get('order'), {fontSize: '32px'});

        this.foods.lettuce = this.add.image(this.width/4, this.height/2 + 100, 'lettuce');
        this.foods.lettuce.setScale(.1);
        this.foods.steak = this.add.image(this.width/2, this.height/2 + 100, 'steak');
        this.foods.steak.setScale(.15);
        this.foods.peanut = this.add.image(3*this.width/4 + 20, this.height/2 + 100, 'peanut');
        this.foods.peanut.setScale(.1);

        this.initInteractice();

        this.timer = this.time.addEvent({
            delay: 800,                // ms
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
            this.foods.lettuce.destroy();
            this.foods.steak.destroy();
            this.foods.peanut.destroy();
            this.data.set('order','Nice Try!');
            this.order.setText('Nice Try!');

        }
        
        this.text.setText([
            'Time: ' + this.data.get('time'), 
            'FoodTimer: ' + this.data.get('foodTime')
        ]);

        

    }

    findOption(option){
        switch(option){
            case 'peanut':
                return [this.foods.peanut.x, this.foods.peanut.y];
            case 'steak':
                return [this.foods.steak.x, this.foods.steak.y];
            case 'lettuce':
                return[this.foods.lettuce.x, this.foods.lettuce.y];
            default:
                return;
        }
    }

    replaceOption(foodName, option){
        switch(foodName){
            case 'peanut':
                this.foods.peanut.setPosition(option[0], option[1]);
                break;
            case 'steak':
                this.foods.steak.setPosition(option[0], option[1]);
                break;
            case 'lettuce':
                this.foods.lettuce.setPosition(option[0], option[1]);
                break;
            default:
                return;
        }
    }

    switchOptions(foodName1, foodName2){
        let option1 = this.findOption(foodName1);
        let option2 = this.findOption(foodName2);
        this.replaceOption(foodName1, option2);
        this.replaceOption(foodName2, option1);

    }

    

    shuffleOptions(array) {
        let currentIndex = array.length,  randomIndex;

        console.log(array.length);
        console.log(array);
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
      
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

            this.switchOptions(array[currentIndex], array[randomIndex]);
        }
      
        return array;
      }

    resetOrderTime(){
        this.newOrder();
        this.data.set('order', this.randomOrder);
        this.order.setText(this.data.get('order'));
        this.shuffleOptions(this.foodList);
        this.data.set('foodTime', 10);
    }

    newOrder(){
        var randomNumber = Phaser.Math.Between(0, 2);
        this.randomOrder = this.list[randomNumber];
    }
    
    initInteractice(){
        this.foods.peanut.setInteractive();
        this.foods.peanut.on('pointerdown', () => {
            if(this.data.get('order') != 'peanut allergy'){
                this.data.set('time', this.data.get('time') + 5);
            }
            this.resetOrderTime();
        });
        this.foods.steak.setInteractive();
        this.foods.steak.on('pointerdown', () => {
            if(this.data.get('order') != 'vegan'){
                this.data.set('time', this.data.get('time') + 5);
            }
            this.resetOrderTime();
        });
        this.foods.lettuce.setInteractive();
        this.foods.lettuce.on('pointerdown', () => {
            if(this.data.get('order') != 'carnivore'){
                this.data.set('time', this.data.get('time') + 5);
            }
            this.resetOrderTime();
        });

    }


}