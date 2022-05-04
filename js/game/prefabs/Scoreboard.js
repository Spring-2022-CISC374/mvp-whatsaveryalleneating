var Scoreboard = function(game){
    Phaser.Group.call(this,game);
};

Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

Scoreboard.prototype.show = function(scoreProtein,scoreCarbs,scoreFat,scoreVitamin){
var bmd, background, gameoverText,  scoreTextProtein,scoreTextCarbs,scoreTextFat,scoreTextVitamin, highScoreText, newHighScoreText, startText;

    bmd = this.game.add.bitmapData(this.game.width, this.game.height);
    bmd.ctx.fillStyle = '#000';
    bmd.ctx.fillRect(0,0, this.game.width, this.game.height);

    background = this.game.add.sprite(0,0,bmd);
    background.alpha = 0.5;
    this.add(background);

    // var isNewHighScore = false;
    // var highscore = localStorage.getItem('highscore');

    // if(!highscore||highscore<score){
    //     isNewHighScore = true;
    //     highscore = score;
    //     localStorage.setItem('highscore',highscore);
    
    // }
     this.y = this.game.height;

    // gameoverText = this.game.add.bitmapText(0,100, 'minecraftia',' You Win.',36);
    // gameoverText.x = this.game.width/2 - (gameoverText.textWidth/2);
    // this.add(gameoverText);

    scoreTextProtein = this.game.add.bitmapText(0,200, 'minecraftia',' You Protein Score: ' + scoreProtein, 24);
    scoreTextProtein.x = this.game.width/2 - ( scoreTextProtein.textWidth/2);
    this.add(scoreTextProtein);

    scoreTextCarbs = this.game.add.bitmapText(0,300, 'minecraftia',' You Carbs Score: ' + scoreCarbs, 24);
    scoreTextCarbs.x = this.game.width/2 - ( scoreTextCarbs.textWidth/2);
    this.add(scoreTextCarbs);

    scoreTextFat = this.game.add.bitmapText(0,400, 'minecraftia',' You Fat Score: ' + scoreFat, 24);
    scoreTextFat.x = this.game.width/2 - (scoreTextFat.textWidth/2);
    this.add(scoreTextFat);

    scoreTextVitamin = this.game.add.bitmapText(0,500, 'minecraftia',' You Vitamin Score: ' + scoreVitamin, 24);
    scoreTextVitamin.x = this.game.width/2 - (scoreTextVitamin.textWidth/2);
    this.add(scoreTextVitamin);
   // highScoreText = this.game.add.bitmapText(0,250, 'minecraftia',' You High Score: ' + highscore, 24);
    //highScoreText.x = this.game.width/2 - (highScoreText.textWidth/2);
   // this.add(highScoreText);

    startText = this.game.add.bitmapText(0,600, 'minecraftia','Tap to play again ',30);
    startText.x = this.game.width/2 - (startText.textWidth/2);
    this.add(startText);

    // if(isNewHighScore){
    //     newHighScoreText = this.game.add.bitmapText(0,100,'minecraftia','New High Score!', 12);
    //     newHighScoreText.tint = 0x4ebef7;
    //     newHighScoreText.x = gameoverText.x + gameoverText.textWidth+40;
    //     newHighScoreText.angle = 45;
    //     this.add(newHighScoreText);
    // }

    this.game.add.tween(this).to({y:0},1000, Phaser.Easing.Bounce.Out, true);
    this.game.input.onDown.addOnce(this.restart, this);
};

Scoreboard.prototype.restart = function(){
 this.game.state.start('Game', true, false);
};