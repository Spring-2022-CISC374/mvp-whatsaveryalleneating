import { Scene } from 'phaser';
import { BaseGameScene } from './BaseGameScene';

export class FoodPrep extends BaseGameScene{

    protected list;
    protected randomOrder;
    protected text;
    protected order;
    protected foods = {
            salad: null,
            pbandj: null,
            hamburger: null,
            salmon: null,
            mac:null
        };
    protected foodList = ['salad', 'pbandj', 'hamburger', 'salmon', 'mac'];
    protected foodsCategories = new Map();
    protected timer;
    protected categories = ['peanut allergy', 'vegan', 'gluten free', 'lactose intolerant', 'pescatarian', 'carnivore'];

    constructor() {
        super({ key: FoodPrep.name });
      }

    preload(){
        this.newOrder();
        
        this.data.set('order', this.randomOrder);
        this.data.set('time', 40);
        this.data.set('foodTime', 10);

        //this.load.image('salad', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/salad.png');
        //this.load.image('hamburger', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/hamburger.png');
        //this.load.image('pbandj', 'https://spring-2022-cisc374.github.io/mvp-whatsaveryalleneating/assets/pbandj.png');
        this.load.image('hamburger', '../assets/hamburger.png');
        this.load.image('salad', '../assets/salad.png');
        this.load.image('pbandj', '../assets/pbandj.png');
        this.load.image('salmon', '../assets/salmon.png');
        this.load.image('mac', '../assets/mac.png');
        this.load.image('background', '../assets/foodpickerbackground.png')

    }
    create(){
        let bg = this.add.image(this.width/2,this.height/2, 'background');
        bg.displayWidth = this.sys.canvas.width;
        bg.displayHeight = this.sys.canvas.height;

        this.text = this.add.text(20,20, '').setTint(0x000000);
        this.text.setText([
            'Time: ' + this.data.get('time'), 
            'FoodTimer: ' + this.data.get('foodTime')
        ]);

        this.initializeFoodCategories();
        this.displayInstructions();
        this.initImages();
        this.initInteractive();

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
            this.foods.salad.destroy();
            this.foods.hamburger.destroy();
            this.foods.pbandj.destroy();
            this.foods.salmon.destroy();
            this.foods.mac.destroy();

            this.data.set('order','Nice Try!');
            this.order.setText('Nice Try!');

        }
        
        this.text.setText([
            'Time: ' + this.data.get('time'), 
            'FoodTimer: ' + this.data.get('foodTime')
        ]);
    }

    displayInstructions(){
        this.add.text(5, this.height/8 - 20, 'Please select a food that specific diet can eat!').setTint(0x000000);
        this.add.text(20, this.height/8, 'Select the right food to get more time!').setTint(0x000000);
        this.add.text(5, this.height/8 + 20, "But if you pick the wrong food, you'll lose time!").setTint(0x000000);
        this.order = this.add.text(this.width/8, this.height/2 - 100, this.data.get('order'), {fontFamily: 'troika', fontSize: '64px'}).setTint(0x000000);
        this.order.strokeThickness = 6;
    }

    initImages(){
        //background
        


        this.foods.salad = this.add.image(this.width/4 - 20, this.height/2 + 100, 'salad');
        this.foods.salad.setScale(.25);
        this.foods.hamburger = this.add.image(this.width/2, this.height/2 + 100, 'hamburger');
        this.foods.hamburger.setScale(.15);
        this.foods.pbandj = this.add.image(3*this.width/4 + 20, this.height/2 + 100, 'pbandj');
        this.foods.pbandj.setScale(.1);
        this.foods.salmon = this.add.image(this.width/2, this.height/2 + 100, 'salmon');
        this.foods.salmon.setScale(.15);
        this.foods.salmon.visible = false;
        this.foods.mac = this.add.image(this.width/2, this.height/2 + 100, 'mac');
        this.foods.mac.setScale(.15);
        this.foods.mac.visible = false;
    }

    findFood(option){
        switch(option){
            case 'pbandj':
                return this.foods.pbandj;
            case 'hamburger':
                return this.foods.hamburger;
            case 'salad':
                return this.foods.salad;
            case 'salmon':
                return this.foods.salmon;
            case 'mac':
                return this.foods.mac;
            default:
                return;
        }
    }

    switchOptions(foodName1, foodName2){
        let food1 = this.findFood(foodName1);
        let food2 = this.findFood(foodName2);
        let v1 = Boolean(food1.visible);
        let v2 = Boolean(food2.visible);
        let c1 = [food1.x, food2.y];
        let c2 = [food2.x, food2.y];
        food1.setPosition(c2[0], c2[1]);
        food2.setPosition(c1[0], c1[1]);
        food1.visible = v2;
        food2.visible = v1;
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
        var randomNumber = Phaser.Math.Between(0, this.foodsCategories.size-1);
        this.randomOrder = this.categories[randomNumber];
    }

    initializeFoodCategories(){
        let food = 'pbandj';
        let foodCategories = ['vegan', 'lactose intolerant', 'pescatarian'];
        this.foodsCategories.set(food,foodCategories);

        food = 'salad';
        foodCategories = ['vegan', 'lactose intolerant', 'peanut allergy', 'gluten free', 'pescatarian'];
        this.foodsCategories.set(food,foodCategories);

        food = 'hamburger';
        foodCategories = ['lactose intolerant', 'peanut allergy'];
        this.foodsCategories.set(food,foodCategories);

        food = 'salmon';
        foodCategories = ['lactose intolerant', 'gluten free', 'peanut allergy', 'pescatarian'];
        this.foodsCategories.set(food,foodCategories);

        food = 'mac';
        foodCategories = ['peanut allergy'];
        this.foodsCategories.set(food,foodCategories);
        
    }
    
    initInteractive(){
        this.foods.pbandj.setInteractive();
        this.foods.pbandj.on('pointerdown', () => {
            if(this.foodsCategories.get('pbandj').indexOf(this.data.get('order')) > -1){
                this.data.set('time', this.data.get('time') + 5);
            }else{
                this.data.set('time', this.data.get('time') - 5);
            }
            this.resetOrderTime();
        });
        this.foods.hamburger.setInteractive();
        this.foods.hamburger.on('pointerdown', () => {
            if(this.foodsCategories.get('hamburger').indexOf(this.data.get('order')) > -1){
                this.data.set('time', this.data.get('time') + 5);
            }else{
                this.data.set('time', this.data.get('time') - 5);
            }
            this.resetOrderTime();
        });
        this.foods.salad.setInteractive();
        this.foods.salad.on('pointerdown', () => {
            if(this.foodsCategories.get('salad').indexOf(this.data.get('order')) > -1){
                this.data.set('time', this.data.get('time') + 5);
            }else{
                this.data.set('time', this.data.get('time') - 5);
            }
            this.resetOrderTime();
        });

        this.foods.salmon.setInteractive();
        this.foods.salmon.on('pointerdown', () => {
            if(this.foodsCategories.get('salmon').indexOf(this.data.get('order')) > -1){
                this.data.set('time', this.data.get('time') + 5);
            }else{
                this.data.set('time', this.data.get('time') - 5);
            }
            this.resetOrderTime();
        });

        this.foods.mac.setInteractive();
        this.foods.mac.on('pointerdown', () => {
            if(this.foodsCategories.get('mac').indexOf(this.data.get('order')) > -1){
                this.data.set('time', this.data.get('time') + 5);
            }else{
                this.data.set('time', this.data.get('time') - 5);
            }
            this.resetOrderTime();
        });

    }
}