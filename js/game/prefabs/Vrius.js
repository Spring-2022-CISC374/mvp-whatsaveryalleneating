var Vrius = function(game, x, y, key, frame){
    key = 'vrius';
    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.scale.setTo(0.05);
    this.anchor.setTo(0.5);

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;

    this.checkWorldBounds = true;
    this.onOutOfBoundsKill = true;

   
    this.events.onRevived.add(this.onRevived, this);

   
};

Vrius.prototype = Object.create(Phaser.Sprite.prototype);
Vrius.prototype.constructor = Vrius;

Vrius.prototype.onRevived = function(){
    this.game.add.tween(this).to({y:this.y - 16}, 500, Phaser.Easing.Linear.NONE, true,0,Infinity,true);
    this.body.velocity.x = -400;
    //this.animation.play('spin',10,true);
};