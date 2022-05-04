var Candy = function(game, x, y, key, frame){
    key = 'candy';
    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.scale.setTo(0.05);
    this.anchor.setTo(0.5);

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;

    this.checkWorldBounds = true;
    this.onOutOfBoundsKill = true;

    this.events.onKilled.add(this.onKilled, this);
    this.events.onRevived.add(this.onRevived, this);

   
};

Candy.prototype = Object.create(Phaser.Sprite.prototype);
Candy.prototype.constructor = Candy;

Candy.prototype.onRevived = function(){
    this.body.velocity.x = -400;
    //this.animation.play('spin',10,true);
};

Candy.prototype.onKilled = function(){
    this.animations.frame = 0;
}